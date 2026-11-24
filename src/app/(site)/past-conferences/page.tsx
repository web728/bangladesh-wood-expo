import heroImg from '@/assets/bangladesh-2026/seminar.webp';
import { PageHero, SectionHead, CtaBand } from '@/components/blocks';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({ title: 'Past Conference Highlights | Bangladesh Wood Expo', description: 'Previous-edition technical seminars, buyer engagement and knowledge-sharing highlights from Bangladesh Wood International Expo.', path: '/past-conferences' });

export default function PastConferencesPage() {
  const highlights = ['Technical discussions and knowledge sharing', 'Live machinery demonstrations', 'Strong buyer-seller engagement', 'International networking platform'];
  return <>
    <PageHero seed={62} eyebrow="Past conference highlights" title={<>Ideas shared. <em>Connections made.</em></>} lead="The supplied post-show report records technical seminars and knowledge forums as a core part of the previous edition." crumbs={[{ name: 'Past conference highlights', path: '/past-conferences' }]} image={heroImg} />
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Previous edition" title={<>Knowledge alongside <em>business.</em></>} lead="The programme supported practical exchange between manufacturers, technical professionals, suppliers and buyers." />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">{highlights.map((item) => <li key={item} className="rounded-xl border border-black/10 bg-[#fffaf3] p-6 text-lg font-semibold">{item}</li>)}</ul>
      </div>
    </section>
    <CtaBand countdown={false} />
  </>;
}
