import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { PageHero, SectionHead, StatStrip, FeatureGrid, CtaBand, Testimonials } from '@/components/blocks';
import { pageMeta, graph, breadcrumbNode } from '@/lib/seo';
import { stats, downloads } from '@/lib/site';
import { whyExhibit, jobProfile, standOptions } from '@/lib/content';
import { getTestimonials } from '@/lib/public-data';
import heroImg from '@/assets/bangladesh-2026/laser.webp';
import meetImg from '@/assets/bangladesh-2026/meeting.webp';

export const revalidate = 300;

export const metadata = pageMeta({
  title: 'Why Exhibit at Bangladesh Wood Expo | Meet Wood-Industry Buyers',
  description: 'Exhibit at Bangladesh Wood International Expo to meet furniture manufacturers, factory owners, engineers, architects, importers, distributors and dealers.',
  path: '/why-exhibit',
});

export default async function WhyExhibit() {
  const crumbs = [{ name: 'Why exhibit', path: '/why-exhibit' }];
  const testimonials = await getTestimonials(6);
  return (
    <>
      <JsonLd data={graph(breadcrumbNode(crumbs))} />
      <PageHero seed={41} eyebrow="Exhibit" title={<>Put your brand in front of <em>the buyers.</em></>} lead="Meet furniture factories, dealers, architects and importers sourcing machinery, boards, tools and hardware in Bangladesh." crumbs={crumbs} image={heroImg}>
        <Link className="btn btn--copper" href="/exhibitor-registration">Book a stand<Icon name="arrow" className="arrow" /></Link>
        <Link className="btn btn--ghost" href="/downloads/event-brochure">Download the brochure</Link>
      </PageHero>

      <section className="section">
        <div className="container">
          <StatStrip items={[
            { v: stats.expectedVisitors, suffix: '+', label: 'Trade visitors expected' },
            { v: stats.exhibitors, suffix: '+', label: 'Exhibitors expected' },
            { v: stats.lastEditionCountries, suffix: '+', label: 'Countries in the 2025 report' },
            { v: stats.b2bMeetings, suffix: '+', label: 'B2B meetings in the 2025 report' },
          ]}   />
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionHead eyebrow="What exhibiting gets you" title={<>Reasons brands <em>come back.</em></>} />
          <FeatureGrid items={whyExhibit} />
        </div>
      </section>

      <section className="section">
        <div className="container split split--top">
          <div>
            <p className="eyebrow" data-reveal>Decision-makers</p>
            <h2 className="h-lg" data-reveal>Meet the people who <em>shape decisions.</em></h2>
            <p className="lead" data-reveal>Visitor-demographic split published in the supplied post-show report:</p>
            <ul className="bars" data-bars style={{ marginTop: 28 }}>
              {jobProfile.map((b, i) => (
                <li className="bar" key={b.label} style={{ ['--bd' as string]: `${i * 0.06}s` }}>
                  <span className="bar__label">{b.label}</span>
                  <span className="bar__track"><span className="bar__fill" style={{ ['--v' as string]: b.v / 45 }} /></span>
                  <span className="bar__val tnum">{b.v}%</span>
                </li>
              ))}
            </ul>
            <Link className="link-arrow" href="/visitor-profile" style={{ marginTop: 18 }}>Full visitor profile<Icon name="arrow" /></Link>
          </div>
          <div className="split__media split__media--tall" data-reveal><Image src={meetImg} alt="Exhibitor discussing a catalogue with buyers" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHead split eyebrow="Stand options" title={<>Choose how you <em>show up.</em></>} lead="Rates are shared with the floor plan in your quote. Book early for the best positions." />
          <div className="cards cards--3">
            {standOptions.map((s) => (
              <article className={`card${s.featured ? ' card--featured' : ''}`} key={s.t} data-reveal>
                <p className="card__kicker">{s.from}</p>
                <h3 className="h-sm">{s.t}</h3>
                <p>{s.d}</p>
                <ul>{s.inc.map((i) => <li key={i}><Icon name="check" />{i}</li>)}</ul>
                <Link className="link-arrow" href="/exhibitor-registration">Get a quote<Icon name="arrow" /></Link>
              </article>
            ))}
          </div>
          
        </div>
      </section>

      <Testimonials items={testimonials} />

      <section className="section">
        <div className="container container--narrow">
          <SectionHead eyebrow="Before you book" title={<>Exhibitor <em>essentials.</em></>} />
          <ul className="check-list">
            <li><Icon name="check" />Send an enquiry to request the floor plan and a tailored stand quotation.</li>
            <li><Icon name="check" />Confirm your position with the booking form and advance payment, as set out in your quote.</li>
            <li><Icon name="check" />Receive the exhibitor manual: build-up and dismantling schedule, contractor rules, power orders and badges.</li>
            <li><Icon name="check" />Heavy machinery: share weights, dimensions and power (including 3-phase) early so we can plan floor load and unloading.</li>
            <li><Icon name="check" />International exhibitors: our India & international desk helps with freight contacts, invitation letters and hotels.</li>
          </ul>
          <a className="btn btn--ghost" style={{ marginTop: 28 }} href="/downloads/event-brochure"><Icon name="download" className="arrow" />Official brochure</a>
        </div>
      </section>
      <CtaBand countdown={false} />
    </>
  );
}
