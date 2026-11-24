import heroImg from '@/assets/bangladesh-2026/aisle.webp';
import sideImg from '@/assets/bangladesh-2026/machine_demo.webp';
import Image from 'next/image';
import { PageHero, SectionHead, StatStrip, CtaBand } from '@/components/blocks';
import { pageMeta } from '@/lib/seo';
import { stats } from '@/lib/site';

export const metadata = pageMeta({ title: 'About Bangladesh Wood International Expo', description: 'Bangladesh Wood International Expo is a focused B2B exhibition for woodworking machinery, furniture production, timber, laminates, interiors, tools and hardware.', path: '/about-show' });

export default function AboutShowPage() {
  return <>
    <PageHero seed={21} eyebrow="About the expo" title={<>Bangladesh’s wood-industry <em>business platform.</em></>} lead="A focused international exhibition connecting manufacturers, suppliers, buyers and technical professionals across the woodworking and furniture value chain." crumbs={[{ name: 'About the expo', path: '/about-show' }]} image={heroImg} />
    <section className="section">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div><SectionHead eyebrow="The platform" title={<>Technology, materials and buyers <em>connected.</em></>} /><div className="prose mt-6"><p>The expo covers woodworking machinery and equipment, furniture production technologies, timber, veneers and laminates, interior and decorative solutions, cutting and processing tools, hardware and accessories.</p><p>Organised by Futurex Trade Fair and Events with ASK Trade & Exhibitions, it combines international reach with local market knowledge.</p></div></div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={sideImg} alt="Trade visitors exploring woodworking technology at Bangladesh Wood Expo" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
      </div>
    </section>
    <section className="section bg-[#fff1dd]"><div className="container"><StatStrip items={[{ v: stats.lastEditionCompanies, suffix: '+', label: 'Companies in the 2025 report' }, { v: stats.lastEditionVisitors, suffix: '+', label: 'Trade visitors' }, { v: stats.lastEditionCountries, suffix: '+', label: 'Participating countries' }, { v: stats.b2bMeetings, suffix: '+', label: 'B2B meetings' }]} note="Verified from the supplied Bangladesh Wood & Metal Expo 2025 post-show report." /></div></section>
    <CtaBand countdown={false} />
  </>;
}
