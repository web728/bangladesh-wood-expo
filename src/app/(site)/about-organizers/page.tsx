import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { PageHero, SectionHead, CtaBand } from '@/components/blocks';
import { pageMeta, graph, breadcrumbNode, organizationNodes } from '@/lib/seo';
import { organisers, offices, contacts, telHref } from '@/lib/site';
import heroImg from '@/assets/bangladesh-2026/inauguration.webp';
import teamImg from '@/assets/bangladesh-2026/seminar.webp';

export const metadata = pageMeta({
  title: 'Organisers | Futurex Trade Fair & Events and ASK Trade & Exhibitions',
  description: 'Bangladesh Wood International Expo is jointly organised by Futurex Trade Fair and Events in New Delhi and ASK Trade & Exhibitions in Dhaka.',
  path: '/about-organizers',
});

export default function Organisers() {
  const crumbs = [{ name: 'Organisers', path: '/about-organizers' }];
  return (
    <>
      <JsonLd data={graph(breadcrumbNode(crumbs), ...organizationNodes())} />
      <PageHero seed={22} eyebrow="Jointly organised by" title={<>International reach, <em>local industry depth.</em></>} lead="Futurex and ASK bring exhibition expertise from New Delhi and Dhaka." crumbs={crumbs} image={heroImg} />

      <section className="section">
        <div className="container org-grid">
          {organisers.map((o, i) => (
            <article className="org" key={o.id} data-reveal style={{ ['--d' as string]: `${i * 0.08}s` }}>
              <div className="org__logo">
                {o.logo ? <Image src={o.logo} alt={o.name} width={220} height={60} sizes="220px" /> : <strong>{o.name}</strong>}
              </div>
              <p className="card__kicker">{o.since ? `Established ${o.since} · ` : ''}{o.city}</p>
              <h2 className="h-md">{o.name}</h2>
              <p>{o.blurb}</p>
              <p className="org__tag">{o.tagline}</p>
              {o.url && <a className="link-arrow" href={o.url} target="_blank" rel="noopener">Visit website<Icon name="arrow-up-right" /></a>}
            </article>
          ))}
        </div>
      </section>

      <section className="section section--cream">
        <div className="container split">
          <div className="split__media" data-reveal><Image src={teamImg} alt="Organisers and partners on stage at Bangladesh Wood International Expo" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
          <div>
            <p className="eyebrow" data-reveal>How we work together</p>
            <h2 className="h-lg" data-reveal>International exhibitors, <em>Bangladeshi buyers.</em></h2>
          <ul className="check-list" data-reveal>
  <li>
    <Icon name="check" />
    Futurex manages international exhibitor participation, 
    industry partnerships and exhibition promotion in India 
    and overseas markets.
  </li>
  <li>
    <Icon name="check" />
    ASK Trade manages local exhibitor participation, event 
    operations, visitor promotion and industry relations 
    in Bangladesh.
  </li>
  <li>
    <Icon name="check" />
    Both organisations work together to bring exhibitors, 
    industry professionals and business visitors together 
    through targeted promotion and industry outreach.
  </li>
</ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Offices & contacts" title={<>Talk to <em>the team.</em></>} />
          <div className="cards">
            {contacts.map((c) => (
              <article className="card" key={c.email} data-reveal>
                {/* <p className="card__kicker">{c.role}</p> */}
                <h3 className="h-sm">{c.name}</h3>
                <p><a href={telHref(c.phone)}>{c.phone}</a><br /><a href={`mailto:${c.email}`}>{c.email}</a></p>
              </article>
            ))}
            {offices.map((o) => (
              <article className="card" key={o.name} data-reveal>
                <p className="card__kicker">Office</p>
                <h3 className="h-sm">{o.name}</h3>
                <p>{o.lines.map((l) => <span key={l}>{l}<br /></span>)}{o.phone}</p>
              </article>
            ))}
          </div>
        
        </div>
      </section>
      <CtaBand />
    </>
  );
}
