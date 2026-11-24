import Link from 'next/link';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import ExhibitorForm from '@/components/forms/ExhibitorForm';
import { PageHero } from '@/components/blocks';
import { pageMeta, graph, breadcrumbNode } from '@/lib/seo';
import { contacts, downloads, event, telHref, waHref } from '@/lib/site';
import { zones } from '@/lib/content';
import heroImg from '@/assets/bangladesh-2026/aisle.webp';

export const metadata = pageMeta({
  title: 'Book a Stand | Bangladesh Wood International Expo Exhibitor Enquiry',
  description: 'Enquire about exhibition space at Bangladesh Wood International Expo for woodworking machinery, furniture production, materials, tools, hardware and interiors.',
  path: '/exhibitor-registration',
});

export default async function ExhibitorRegistration({ searchParams }: { searchParams: Promise<{ zone?: string }> }) {
  const { zone } = await searchParams;
  const defaultZone = zones.find((z) => z.title === zone)?.title;
  const crumbs = [{ name: 'Book a stand', path: '/exhibitor-registration' }];
  return (
    <>
      <JsonLd data={graph(breadcrumbNode(crumbs))} />
      <PageHero seed={71} eyebrow="Exhibitor space enquiry" title={<>Exhibit at <em>Bangladesh Wood.</em></>} lead="Tell us what you plan to show and how much space you need. The team will respond with confirmed next-edition availability and commercial information." crumbs={crumbs} image={heroImg} />
      <section className="section section--cream form-section">
        <div className="container form-layout">
          <div className="form-card" id="form">
            <ExhibitorForm defaultZone={defaultZone} />
          </div>
          <aside className="form-aside">
            <div className="card card--featured">
              <p className="card__kicker">Talk to sales directly</p>
              {contacts.slice(0, 2).map((c) => (
                <div key={c.email} className="aside-contact">
                  <strong>{c.name}</strong>
                  {/* <span>{c.role}</span> */}
                  <a href={telHref(c.phone)}><Icon name="phone" />{c.phone}</a>
                  <a href={waHref(c.whatsapp, 'Hello, I would like to enquire about a stand at Bangladesh Wood Expo.')} target="_blank" rel="noopener"><Icon name="whatsapp" />WhatsApp</a>
                  <a href={`mailto:${c.email}`}><Icon name="mail" />{c.email}</a>
                </div>
              ))}
            </div>
            
            <a className="dl" href="/downloads/event-brochure">
              <span className="dl__icon"><Icon name="download" /></span>
              <span><strong>Official brochure</strong><span>Exhibitor and visitor profile</span></span>
            </a>
            <div className="card">
              <p className="card__kicker">Heavy machinery?</p>
              <p>Running live demos or bringing machines over a tonne? Tick the box in step 2 and tell us about power (3-phase), compressed air and unloading. We plan floor load and placement with you.</p>
              <Link className="link-arrow" href="/why-exhibit">Why exhibit<Icon name="arrow" /></Link>
            </div>
         
          </aside>
        </div>
      </section>
    </>
  );
}
