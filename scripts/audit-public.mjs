import puppeteer from 'puppeteer-core';

const base = process.env.AUDIT_BASE_URL || 'http://127.0.0.1:3000';
const sitemap = await fetch(`${base}/sitemap.xml`);
if (!sitemap.ok) throw new Error(`Sitemap returned ${sitemap.status}`);

const xml = await sitemap.text();
const paths = [...xml.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)]
  .map((match) => match[1] || '/')
  .filter((path, index, all) => all.indexOf(path) === index);

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
});
const failures = [];
const internalLinks = new Set();

for (const viewport of [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 390, height: 844 },
]) {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  let currentPath = '/';
  let runtimeErrors = [];
  page.on('pageerror', (error) => runtimeErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error' && !/favicon|Failed to load resource/i.test(message.text())) {
      runtimeErrors.push(message.text());
    }
  });

  for (const path of paths) {
    currentPath = path;
    runtimeErrors = [];
    const response = await page.goto(`${base}${path}`, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    await new Promise((resolve) => setTimeout(resolve, 250));
    const result = await page.evaluate(() => ({
      title: document.title.trim(),
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
      h1Count: document.querySelectorAll('h1').length,
      brokenImages: [...document.images]
        .filter((image) => image.complete && image.naturalWidth === 0)
        .map((image) => image.currentSrc || image.src),
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      internalLinks: [...document.querySelectorAll('a[href]')]
        .map((link) => link.getAttribute('href'))
        .filter((href) => href?.startsWith('/')),
    }));

    result.internalLinks.forEach((href) => internalLinks.add(href.split('#')[0]));

    if (!response || response.status() >= 400) failures.push(`${viewport.name} ${path}: HTTP ${response?.status() ?? 'no response'}`);
    if (!result.title) failures.push(`${viewport.name} ${path}: missing title`);
    if (!result.canonical.startsWith('https://bangladeshwoodexpo.com')) {
      failures.push(`${viewport.name} ${path}: invalid canonical ${result.canonical || '(missing)'}`);
    }
    if (result.h1Count !== 1) failures.push(`${viewport.name} ${path}: ${result.h1Count} H1 elements`);
    if (result.brokenImages.length) failures.push(`${viewport.name} ${path}: broken images ${result.brokenImages.join(', ')}`);
    if (result.overflow > 2) failures.push(`${viewport.name} ${path}: ${result.overflow}px horizontal overflow`);
    runtimeErrors.forEach((error) => failures.push(`${viewport.name} ${currentPath}: console ${error}`));
  }

  await page.close();
}

await browser.close();

for (const href of internalLinks) {
  const response = await fetch(`${base}${href}`, { redirect: 'manual' });
  if (response.status >= 400) failures.push(`internal link ${href}: HTTP ${response.status}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Passed ${paths.length} public routes at desktop and mobile viewports, plus ${internalLinks.size} internal links.`);
}
