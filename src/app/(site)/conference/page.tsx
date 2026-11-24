import Link from 'next/link';
import heroImg from '@/assets/bangladesh-2026/seminar.webp';
import { PageHero, SectionHead, CtaBand } from '@/components/blocks';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({ title: 'Conference & Knowledge Programme | Bangladesh Wood Expo', description: 'Technical seminars, knowledge forums and networking at Bangladesh Wood International Expo. The next-edition programme will be published after organiser confirmation.', path: '/conference' });

export default function ConferencePage() {
  return <>
    <PageHero seed={61} eyebrow="Knowledge programme" title={<>Technical insight for a <em>changing industry.</em></>} lead="Bangladesh Wood brings technology providers, manufacturers and technical professionals together for practical knowledge exchange." crumbs={[{ name: 'Conference', path: '/conference' }]} image={heroImg} />
    <section className="section bg-[#fff1dd]" aria-labelledby="programme-title">
      <div className="container">
        <SectionHead id="programme-title" eyebrow="Programme status" title={<>Next-edition programme <em>to be announced.</em></>} lead="Speakers, sessions, timings and participation terms have not yet been officially confirmed. They will be published here only after organiser approval." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {['Manufacturing technology', 'Automation & productivity', 'Materials & finishing', 'Market development'].map((item) => <article key={item} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm"><h3 className="text-xl font-bold">{item}</h3><p className="mt-3 text-sm text-black/65">A prospective knowledge theme, subject to the confirmed programme.</p></article>)}
        </div>
        <div className="mt-10 flex flex-wrap gap-4"><Link className="btn" href="/visitor-registration">Register for updates</Link><Link className="btn btn--ghost" href="/contact">Contact the team</Link></div>
      </div>
    </section>
    <CtaBand countdown={false} />
  </>;
}
