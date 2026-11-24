import type { Metadata } from 'next';
import { SITE_URL, event, organisers } from './site';

type MetaInput = { title: string; description: string; path: string; image?: string; noindex?: boolean };

/** Per-page metadata: unique title + description, canonical on the real domain, OG/Twitter cards. */
export function pageMeta({ title, description, path, image = '/og/og-default.jpg', noindex }: MetaInput): Metadata {
  const url = SITE_URL + (path === '/' ? '/' : path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'Bangladesh Wood International Expo',
      locale: 'en_US',
      images: [{ url: image, width: 1200, height: 630, alt: `${event.name}, ${event.datesLabel}, ${event.venue.city}, ${event.venue.country}` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export const orgIds = organisers.map((o) => ({ '@id': `${SITE_URL}/#${o.id}` }));

export function organizationNodes() {
  return organisers.map((o) => ({
    '@type': 'Organization',
    '@id': `${SITE_URL}/#${o.id}`,
    name: o.name,
    ...(o.url ? { url: o.url } : {}),
    address: { '@type': 'PostalAddress', addressLocality: o.city.split(',')[0], addressCountry: o.city.includes('India') ? 'IN' : 'BD' },
  }));
}

export function placeNode() {
  return {
    '@type': 'Place',
    name: event.venue.full,
    address: { '@type': 'PostalAddress', ...(event.venue.street ? { streetAddress: event.venue.street } : {}), addressLocality: event.venue.city, addressCountry: event.venue.countryCode },
    ...(event.venue.geo ? { geo: { '@type': 'GeoCoordinates', latitude: event.venue.geo.lat, longitude: event.venue.geo.lng } } : {}),
  };
}

export function eventNode() {
  return {
    '@type': 'ExhibitionEvent',
    '@id': `${SITE_URL}/#event-next-edition`,
    name: event.name,
    description: 'Bangladesh Wood International Expo is a B2B exhibition for woodworking machinery, furniture production technology, timber, laminates, interiors, tools, hardware and allied materials.',
    ...(event.startDate && event.endDate ? {
      startDate: event.hours.open ? `${event.startDate}T${event.hours.open}:00+06:00` : event.startDate,
      endDate: event.hours.close ? `${event.endDate}T${event.hours.close}:00+06:00` : event.endDate,
      eventStatus: 'https://schema.org/EventScheduled',
    } : {}),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: placeNode(),
    image: [`${SITE_URL}/og/og-default.jpg`],
    organizer: orgIds,
    url: `${SITE_URL}/`,
    inLanguage: 'en',
  };
}

export function breadcrumbNode(trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: SITE_URL + (t.path === '/' ? '/' : t.path) })),
  };
}

export function faqNode(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
