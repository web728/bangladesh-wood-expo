import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { PageHero, SectionHead, FeatureGrid, CtaBand } from '@/components/blocks';
import { pageMeta, graph, breadcrumbNode, eventNode } from '@/lib/seo';
import { whyVisit, zones, seminars } from '@/lib/content';
import heroImg from '@/assets/bangladesh-2026/aisle.webp';
import demoImg from '@/assets/bangladesh-2026/machinery.webp';
import { visitorGroups, interest, whyExhibit } from '@/lib/content';
import '../../home.css';

export const metadata = pageMeta({
  title: 'Why Visit Bangladesh Wood Expo | Woodworking Trade Exhibition',
  description: 'Visit Bangladesh Wood Expo to compare woodworking machinery, furniture production technology, timber, laminates, interiors, tools and hardware.',
  path: '/why-visit',
});

export default function WhyVisit() {
  const crumbs = [{ name: 'Why visit', path: '/why-visit' }];
  return (
    <>
      <JsonLd data={graph(breadcrumbNode(crumbs), eventNode())} />
      <PageHero seed={101} eyebrow="Visit the trade exhibition" title={<>Source smarter. <em>See it running.</em></>} lead="Compare suppliers, watch machinery demonstrations and meet the people behind the brands in Dhaka." crumbs={crumbs} image={heroImg}>
        <Link className="btn btn--copper" href="/visitor-registration">Register for updates<Icon name="arrow" className="arrow" /></Link>
        <Link className="btn btn--ghost" href="/venue">Plan your visit</Link>
      </PageHero>
      <section className="section section--cream">
        <div className="container">
          <SectionHead eyebrow="Why visit" title={<>Worth a day out of <em>the factory.</em></>} />
          <FeatureGrid items={whyVisit} />
        </div>
      </section>
         {/* ============ VISITORS ============ */}
       
      <section className="section">
        <div className="container split">
          <div className="split__media" data-reveal><Image src={demoImg} alt="Visitors watching a live machine demonstration" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
          <div>
            <p className="eyebrow" data-reveal>What you’ll find</p>
            <h2 className="h-lg" data-reveal>Explore the complete <em>industry floor.</em></h2>
            <ul className="check-list" data-reveal>
              {zones.map((z) => <li key={z.slug}><Icon name="check" /><span><strong>{z.title}</strong>: {z.short}</span></li>)}
            </ul>
            <Link className="link-arrow" href="/exhibitors" style={{ marginTop: 22 }}>See who’s exhibiting<Icon name="arrow" /></Link>
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container">
          <SectionHead split eyebrow="Seminars" title={<>Learn while <em>you’re there.</em></>} lead="Recent sessions covered timber plantation, quality standards, automation and Bangladeshi materials in interiors." />
          <div className="cards">
            {seminars.map((s) => <article className="card card--dark" key={s.slug} data-reveal><p className="card__kicker">{s.date} · {s.ed}</p><h3 className="h-sm">{s.title}</h3><p>{s.text}</p></article>)}
          </div>
          <Link className="link-arrow" href="/seminars" style={{ marginTop: 28 }}>Seminar programme<Icon name="arrow" /></Link>
        </div>
      </section>
      <CtaBand countdown={false} title={<>Plan your <em>visit.</em></>} lead="Register your interest for visitor-registration and programme updates." primary={{ href: '/visitor-registration', label: 'Register for updates' }} secondary={{ href: '/faq', label: 'Visitor FAQ' }} />
    </>
  );
}
