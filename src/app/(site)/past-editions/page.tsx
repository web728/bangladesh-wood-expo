import Link from 'next/link';
import heroImg from '@/assets/bangladesh-2026/inauguration.webp';
import { PageHero, SectionHead, CtaBand } from '@/components/blocks';
import { pageMeta } from '@/lib/seo';
import { editions } from '@/lib/content';
import { downloads } from '@/lib/site';

export const metadata = pageMeta({ title: 'Past Editions & Post-Show Report | Bangladesh Wood Expo', description: 'Verified Bangladesh Wood Expo milestones, including the supplied 2025 post-show results and official 2026 brochure.', path: '/past-editions' });

export default function PastEditions() {
  return <>
    <PageHero seed={33} eyebrow="Our journey" title={<>A growing platform for <em>industry business.</em></>} lead="This timeline contains only the editions and results supported by the supplied official materials." crumbs={[{ name: 'Past editions', path: '/past-editions' }]} image={heroImg} />
    <section className="section"><div className="container"><SectionHead eyebrow="Verified timeline" title={<>Previous results. <em>Next opportunity.</em></>} />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">{editions.map((edition) => <article key={`${edition.ed}-${edition.year}`} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm"><p className="text-sm font-bold uppercase tracking-widest text-[#84231e]">{edition.ed} edition · {edition.year}</p><h3 className="mt-3 text-2xl font-bold">{edition.dates}</h3><p className="mt-4 text-black/65">{edition.note}</p>{edition.report ? <a className="link-arrow mt-5" href={downloads.reports[0].file}>Read the post-show report</a> : null}</article>)}</div>
      <div className="mt-10 flex flex-wrap gap-4"><Link className="btn" href="/exhibitor-registration">Enquire about exhibiting</Link><Link className="btn btn--ghost" href="/downloads/event-brochure">Official brochure</Link></div>
    </div></section>
    <CtaBand countdown={false} />
  </>;
}
