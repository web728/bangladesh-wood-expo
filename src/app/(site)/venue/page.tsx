import Link from 'next/link';
import Icon from '@/components/Icon';
import { PageHero, SectionHead, CtaBand } from '@/components/blocks';
import { pageMeta } from '@/lib/seo';
import { event } from '@/lib/site';
import heroImg from '@/assets/bangladesh-2026/registration.webp';

export const metadata = pageMeta({ title: 'Plan Your Visit | Bangladesh Wood International Expo 2027', description: 'Plan your visit to Bangladesh Wood International Expo, 11–13 November 2027 at ICCB Exhibition Hall in Dhaka, Bangladesh.', path: '/venue' });

export default function Venue() {
  return <>
    <PageHero seed={131} eyebrow="Plan your visit" title={<>See you at <em>ICCB, Dhaka.</em></>} lead={`${event.datesLabel} at ${event.venue.full}.`} crumbs={[{ name: 'Plan your visit', path: '/venue' }]} image={heroImg}>
      <Link className="btn btn--copper" href="/visitor-registration">Register for updates <Icon name="arrow" className="arrow" /></Link>
    </PageHero>
    <section className="section"><div className="container">
      <div className="grid gap-5 md:grid-cols-3">
        <article className="rounded-xl border border-black/10 bg-white p-6"><Icon name="calendar" /><p className="card__kicker mt-4">Dates</p><strong className="text-xl">{event.datesLabel}</strong></article>
        <article className="rounded-xl border border-black/10 bg-white p-6"><Icon name="pin" /><p className="card__kicker mt-4">Location</p><strong className="text-xl">{event.venue.name}</strong><p className="mt-2 text-sm text-black/60">{event.venue.city}, {event.venue.country}</p></article>
        <article className="rounded-xl border border-black/10 bg-white p-6"><Icon name="clock" /><p className="card__kicker mt-4">Show timings</p><strong className="text-xl">To be announced</strong></article>
      </div>
    </div></section>
    <section className="section bg-[#fff1dd]"><div className="container"><SectionHead eyebrow="Travel information" title={<>Details you can <em>rely on.</em></>} lead="Airport, road, public-transport, hotel and access guidance will be added when the organiser releases the official travel advisory." /><a className="btn mt-8" href={event.venue.mapsUrl} target="_blank" rel="noopener">Open venue in Maps <Icon name="arrow-up-right" /></a></div></section>
    <CtaBand countdown={false} title={<>Plan with <em>confidence.</em></>} lead="Register interest to receive visitor-registration, programme and travel updates." primary={{ href: '/visitor-registration', label: 'Register for updates' }} secondary={{ href: '/faq', label: 'Visitor FAQ' }} />
  </>;
}
