/** Verified exhibition facts from the supplied 2026 brochure and 2025 post-show report. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://bangladeshwoodexpo.com').replace(/\/$/, '');

export const event = {
  name: 'Bangladesh Wood International Expo', shortName: 'Bangladesh Wood Expo', edition: '11th', editionNumber: 11,
  yearLabel: '2027 edition', dateConfirmed: true, startDate: '2027-11-11', endDate: '2027-11-13',
  datesLabel: '11–13 November 2027', datesShort: '11–13 Nov 2027', weekdays: 'Thursday–Saturday', days: 3,
  hours: { open: null as string | null, close: null as string | null, label: 'Show timings to be announced', tentative: true }, countdownTarget: '2027-11-11T00:00:00+06:00',
  venue: { name: 'ICCB Exhibition Hall', full: 'ICCB Exhibition Hall, Dhaka, Bangladesh', street: '', city: 'Dhaka', country: 'Bangladesh', countryCode: 'BD', geo: null as { lat: number; lng: number } | null,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=ICCB+Exhibition+Hall+Dhaka+Bangladesh', embedUrl: 'https://www.google.com/maps?q=ICCB+Exhibition+Hall,+Dhaka,+Bangladesh&output=embed' },
  badgePrefix: 'BW11',
};

export const stats = { expectedVisitors: 7000, exhibitors: 100, expectedCountries: 5, lastEditionVisitors: 7000, lastEditionCompanies: 100, lastEditionCountries: 12, lastEditionAreaSqm: 8000, b2bMeetings: 1000, workforce: 2000000, seniorManagementPct: 80 };
export const organisers = [
  { id: 'futurex', name: 'Futurex Trade Fair and Events Pvt. Ltd.', short: 'Futurex', logo: '/partners/futurex-trade-fair.png', url: 'https://www.futurextrade.com', city: 'New Delhi, India', since: 2011, blurb: 'An international exhibition and corporate-events organiser with offices across South Asia and a portfolio spanning woodworking, manufacturing, infrastructure, textiles, agriculture and packaging.', tagline: 'Where Business Meets Opportunities.' },
  { id: 'ask', name: 'ASK Trade & Exhibitions Pvt. Ltd.', short: 'ASK', logo: '/partners/ask-trade-exhibitions.webp', url: '', city: 'Dhaka, Bangladesh', since: null, blurb: 'The Bangladesh organising partner, creating a platform for global technology providers and local industry across wood, furniture, manufacturing and allied sectors.', tagline: 'Connecting global technology with local industry.' },
];

export const partners = {
  titleSponsor: [{ name: 'Best CNC Router', logo: '/partners/best-cnc-router.webp', note: 'Title sponsor' }],
  supportedBy: [] as { name: string; logo: string }[],
  media: [
    { name: 'Ply Insight', logo: '/partners/ply-insight.webp' }, { name: 'Ply World', logo: '/partners/ply-world.webp' },
    { name: 'Modern Woodwork', logo: '/partners/modern-woodwork.webp' }, { name: 'Woodage India.com', logo: '/partners/woodage-india.webp' },
  ],
  pastCoSponsor: [] as { name: string; logo: string; note?: string }[],
};

export const contacts = [
  { name: 'Mr. Namit Gupta', role: 'India & international exhibitor enquiries', phone: '+91 98108 55697', email: 'info@futurextrade.com', whatsapp: '919810855697' },
  { name: 'Bangladesh Secretariat', role: 'Local exhibitor and visitor enquiries', phone: '+880 1700 877768', email: 'info@futurextrade.com', whatsapp: '8801700877768' },
  { name: 'Bangladesh Secretariat', role: 'Local support', phone: '+880 1674 517071', email: 'info@futurextrade.com', whatsapp: '8801674517071' },
];
export const offices = [
  { name: 'Futurex Trade Fair and Events Pvt. Ltd.', lines: ['E-52, 1st Floor, Kalkaji', 'New Delhi 110019, India'], phone: '+91 98108 55697' },
  { name: 'ASK Trade & Exhibitions Pvt. Ltd.', lines: ['House 1117 (3rd Floor), Road 9 (Main Road)', 'Sarkarbari, Mirpur DOHS, Dhaka 1216, Bangladesh'], phone: '+880 1700 877768' },
];
export const social = { facebook: 'https://www.facebook.com/BangladeshWoodInternationalExpo/' };
export const whatsappDefault = contacts[1].whatsapp;

export type NavItem = { label: string; href?: string; items?: { label: string; href: string; desc?: string }[] };
export const nav: NavItem[] = [
  { label: 'About', items: [
    { label: 'About the Expo', href: '/about-show', desc: 'Bangladesh’s international woodworking trade platform' }, { label: 'Organisers', href: '/about-organizers', desc: 'Futurex and ASK Trade & Exhibitions' },
    { label: 'Past Editions', href: '/past-editions', desc: 'Previous-edition results and milestones' }, { label: 'Plan Your Visit', href: '/venue', desc: 'Latest venue and travel information' },
  ]},
  { label: 'Exhibit', items: [
    { label: 'Why Exhibit', href: '/why-exhibit', desc: 'Meet Bangladesh’s wood-industry buyers' }, { label: 'Exhibitor Profile', href: '/exhibitor-profile', desc: 'Product categories and sectors' },
    { label: 'Book a Stand', href: '/exhibitor-registration', desc: 'Enquire about exhibition space' }, { label: 'Sponsorship', href: '/sponsorship', desc: 'Branding and partnership opportunities' },
  ]},
  { label: 'Visit', items: [
    { label: 'Why Visit', href: '/why-visit', desc: 'Discover technology, materials and suppliers' }, { label: 'Visitor Profile', href: '/visitor-profile', desc: 'Industries and professional segments' },
    { label: 'Register Interest', href: '/visitor-registration', desc: 'Receive next-edition visitor updates' },
  ]},
  { label: 'Knowledge', items: [
    { label: 'Seminars', href: '/seminars', desc: 'Technical seminars and knowledge forums' }, { label: 'Conference', href: '/conference', desc: 'Programme information and updates' },
    { label: 'Past Conference Highlights', href: '/past-conferences', desc: 'Highlights from the previous edition' },
  ]},
  { label: 'Media', items: [{ label: 'Gallery', href: '/gallery', desc: 'Authentic photographs from the exhibition' }] },
  { label: 'Resources', items: [
    { label: 'Event Brochure', href: '/downloads/event-brochure', desc: 'Download the official brochure' },
    { label: 'Post-Show Report', href: '/downloads/Bangladesh_Wood_Expo_2025_Post_Show_Report.pdf', desc: 'Verified previous-edition results' },
  ]},
  { label: 'Contact', href: '/contact' },
];

export const downloads = { brochure: { file: '/downloads/Bangladesh_Wood_Expo_2026_Brochure.pdf', label: 'Official event brochure', size: '6.7 MB' }, reports: [{ edition: '9th', dates: '23-25 January 2025', file: '/downloads/Bangladesh_Wood_Expo_2025_Post_Show_Report.pdf', size: '11 MB' }] };
export const telHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, '')}`;
export const waHref = (num: string, text = 'Hello, I would like to know more about Bangladesh Wood International Expo.') => `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
