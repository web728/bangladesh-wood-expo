import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { PageHero, SectionHead, CtaBand } from '@/components/blocks';
import { pageMeta, graph, breadcrumbNode, placeNode, orgIds } from '@/lib/seo';
import { seminars } from '@/lib/content';
import { SITE_URL, event } from '@/lib/site';
import heroImg from '@/assets/bangladesh-2026/seminar.webp';
import aud from '@/assets/bangladesh-2026/seminar.webp';
import g58 from '@/assets/bangladesh-2026/laser.webp';
import g57 from '@/assets/bangladesh-2026/meeting.webp';

export const metadata = pageMeta({
  title: 'Seminars & Knowledge Sessions | Bangladesh Wood International Expo',
  description: 'Technical seminars and knowledge forums at Bangladesh Wood Expo. Next-edition dates, speakers and sessions will be published after organiser confirmation.',
  path: '/seminars',
});

const imgs = [aud, g58, g57];

export default function Seminars() {
  const crumbs = [{ name: 'Seminars', path: '/seminars' }];
  return (
    <>
      <JsonLd data={graph(breadcrumbNode(crumbs))} />
      <PageHero seed={141} eyebrow="Knowledge sessions" title={<>More than a <em>trade floor.</em></>} lead="Seminars with industry associations, policymakers, technologists, architects and designers, held on the show days." crumbs={crumbs} image={heroImg} />
      <section className="section">
        <div className="container">
          <div className="sem-next" data-reveal>
            <span className="tag tag--copper">11th edition · {event.datesLabel}</span>
            <h2 className="h-lg">The next programme is <em>being curated.</em></h2>
            <p className="lead">The confirmed themes, speakers and schedule will be announced here and shared with registered visitors.</p>
            <div className="form-done__actions" style={{ justifyContent: 'flex-start' }}>
              <Link className="btn" href="/visitor-registration">Register to get the schedule<Icon name="arrow" className="arrow" /></Link>
              <a className="btn btn--ghost" href="#speak">Propose a session</a>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container">
          <SectionHead eyebrow="Previous sessions" title={<>What we’ve <em>discussed.</em></>} />
          <div className="sem-list">
            {seminars.map((s, i) => (
              <article className="sem" id={s.slug} key={s.slug} data-reveal>
                <div className="sem__img"><Image src={imgs[i % imgs.length]} alt={`${s.title} session at Bangladesh Wood International Expo`} fill sizes="(max-width: 900px) 100vw, 35vw" /></div>
                <div>
                  <p className="card__kicker">{s.date} · {s.ed}</p>
                  <h3 className="h-md">{s.title}</h3>
                  <p>{s.text}</p>
                  <ul className="check-list">{s.sessions.map((x) => <li key={x}><Icon name="check" />{x}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="speak">
        <div className="container form-layout">
          <div className="form-card">
            <p className="eyebrow">Speak or partner</p>
            <h2 className="h-md" style={{ margin: '14px 0 26px' }}>Propose a session or a seminar partnership.</h2>
            <EnquiryForm topic="other" />
          </div>
          <aside className="form-aside">
            <div className="card"><p className="card__kicker">Good proposals</p><ul><li><Icon name="check" />Are practical: a process, a case study or a standard</li><li><Icon name="check" />Speak to factory owners, architects or dealers</li><li><Icon name="check" />Are not sales pitches. Sponsors can host branded sessions separately.</li></ul></div>
          </aside>
        </div>
      </section>
      <CtaBand countdown={false} />
    </>
  );
}
