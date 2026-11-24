import type { StaticImageData } from 'next/image';
import panelsImg from '@/assets/bangladesh-2026/panels.webp';
import machineImg from '@/assets/bangladesh-2026/machine_demo.webp';
import furnitureImg from '@/assets/bangladesh-2026/booth.webp';
import interiorImg from '@/assets/bangladesh-2026/panels.webp';
import toolsImg from '@/assets/bangladesh-2026/tools.webp';

export type Zone = { slug: string; title: string; short: string; img: StaticImageData; alt: string; items: string[]; intro: string; forWho: string[]; seoTitle: string; seoDesc: string; keyword: string };
export const zones: Zone[] = [
  { slug: 'woodworking-machinery', title: 'Woodworking Machinery & Equipment', short: 'CNC, panel saws, edge banders and automation', img: machineImg, alt: 'Woodworking machinery demonstrated at Bangladesh Wood Expo', items: ['CNC routers and nesting machines', 'Panel and beam saws', 'Edge banding machines', 'Drilling, boring and routing', 'Sanding and finishing lines', 'Dust extraction and automation'], intro: 'See production technology running on the show floor and compare solutions for productivity, precision and finish.', forWho: ['Woodworking machinery manufacturers', 'CNC and automation suppliers', 'Sawmill and veneer-line makers', 'Tooling, spares and service companies'], seoTitle: 'Woodworking Machinery Exhibition in Bangladesh', seoDesc: 'Showcase woodworking machinery, CNC routers, panel saws and automation to Bangladesh furniture manufacturers and trade buyers.', keyword: 'woodworking machinery exhibition Bangladesh' },
  { slug: 'furniture-production-technology', title: 'Furniture Production Technologies', short: 'Factory systems, software and production solutions', img: furnitureImg, alt: 'Furniture production technology at Bangladesh Wood Expo', items: ['Modular furniture systems', 'Kitchen and wardrobe production', 'Upholstery and foam technology', 'Factory planning and software', 'Packaging and material handling', 'Quality-control solutions'], intro: 'Connect technology providers with furniture factories, exporters and workshops upgrading capacity.', forWho: ['Furniture manufacturers and exporters', 'Modular-system brands', 'Upholstery suppliers', 'Design and production software companies'], seoTitle: 'Furniture Production Technology Expo Bangladesh', seoDesc: 'Present furniture production technology, modular systems and factory solutions at Bangladesh Wood International Expo.', keyword: 'furniture manufacturing exhibition Bangladesh' },
  { slug: 'timber-veneers-laminates', title: 'Timber, Veneers & Laminates', short: 'Boards, surfaces and engineered wood', img: panelsImg, alt: 'Wood panels and decorative surfaces at Bangladesh Wood Expo', items: ['Timber and sawn wood', 'Plywood, MDF and particle board', 'Veneers and laminates', 'Engineered wood products', 'Decorative surfaces', 'Sustainable material solutions'], intro: 'A focused sourcing platform for materials used by furniture, joinery and interior-production businesses.', forWho: ['Board and panel manufacturers', 'Laminate and veneer brands', 'Timber importers and sawmills', 'Distributors seeking Bangladesh partners'], seoTitle: 'Timber, Plywood & Laminates Expo Bangladesh', seoDesc: 'Exhibit timber, plywood, MDF, veneers and laminates to Bangladesh wood and furniture-industry buyers.', keyword: 'plywood laminate exhibition Bangladesh' },
  { slug: 'interior-decorative-solutions', title: 'Interior & Decorative Solutions', short: 'Flooring, doors, wall panels and finishes', img: interiorImg, alt: 'Interior and decorative products at Bangladesh Wood Expo', items: ['Wood and laminate flooring', 'Doors, frames and windows', 'Decorative wall panels', 'Interior surfaces and finishes', 'Kitchen and wardrobe accessories', 'Commercial interior materials'], intro: 'Meet architects, interior designers, builders and furniture brands sourcing finishes for upcoming projects.', forWho: ['Flooring and door manufacturers', 'Wall-panel and surface brands', 'Interior product suppliers', 'Importers of decorative finishes'], seoTitle: 'Interior Products Exhibition Bangladesh', seoDesc: 'Show flooring, doors, wall panels and decorative interior products to Bangladesh architects, designers and buyers.', keyword: 'interior products exhibition Dhaka' },
  { slug: 'tools-hardware-accessories', title: 'Tools, Hardware & Accessories', short: 'Fittings, adhesives, coatings and cutting tools', img: toolsImg, alt: 'Woodworking tools and hardware at Bangladesh Wood Expo', items: ['Furniture fittings and hardware', 'Power tools, blades and cutters', 'Adhesives and woodworking chemicals', 'Coatings, polishes and paints', 'Abrasives and edge-banding materials', 'Fasteners and accessories'], intro: 'Build year-round dealer and distributor relationships for the consumables every workshop and factory needs.', forWho: ['Hardware and fittings brands', 'Adhesive and coating manufacturers', 'Tooling and abrasive suppliers', 'Bangladesh distributors and retailers'], seoTitle: 'Furniture Hardware & Tools Expo Bangladesh', seoDesc: 'Show furniture hardware, tools, adhesives, coatings and accessories at Bangladesh Wood International Expo.', keyword: 'furniture hardware exhibition Bangladesh' },
  { slug: 'wood-cutting-processing-tools', title: 'Wood Cutting & Processing Tools', short: 'Precision cutting, handling and workshop systems', img: machineImg, alt: 'Precision cutting system at Bangladesh Wood Expo', items: ['Saw blades and cutters', 'Routing and profiling tools', 'Sharpening systems', 'Material handling', 'Workshop extraction', 'Measurement and quality tools'], intro: 'Put precision tools directly in front of workshop owners, production heads and technical teams.', forWho: ['Cutting-tool manufacturers', 'Workshop equipment suppliers', 'Extraction and handling specialists', 'Technical distributors'], seoTitle: 'Wood Cutting & Processing Tools Bangladesh', seoDesc: 'Meet buyers of wood cutting, processing and workshop tools at Bangladesh Wood International Expo.', keyword: 'wood processing tools Bangladesh' },
];

export const editions = [
  { year: '2025', ed: '9th', dates: '23-25 January 2025', note: 'The supplied post-show report records 100+ companies, 7,000+ trade visitors, 12+ participating countries, 8,000+ sqm and 1,000+ B2B meetings.', report: '9th' },
  { year: '2026', ed: '10th', dates: '17-19 September 2026', note: 'The official brochure positioned the expo as an international B2B platform for woodworking, furniture production, interiors, tools and materials.' },
  { year: '2027', ed: '11th', dates: '11–13 November 2027', note: 'The next edition will take place at ICCB Exhibition Hall in Dhaka, Bangladesh.', current: true },
];
export const visitorGroups = ['Furniture manufacturers and exporters', 'Factory owners and production heads', 'Engineers and technical professionals', 'Architects and interior designers', 'Builders and contractors', 'Importers, distributors and dealers', 'Government and trade associations'];
export const jobProfile = [{ label: 'Top management / owners', v: 45 }, { label: 'Senior managers', v: 35 }, { label: 'Engineers / technical staff', v: 20 }];
export const interest = [{ label: 'Woodworking machinery and tools', v: 30 }, { label: 'Furniture production technology', v: 22 }, { label: 'Timber, plywood and laminates', v: 18 }, { label: 'Interior products and surfaces', v: 15 }, { label: 'Hardware, fittings and accessories', v: 10 }, { label: 'Coatings, adhesives and abrasives', v: 5 }];
export const seminars = [{ slug: 'technical-seminars', date: 'Programme to be announced', iso: '', ed: 'Next edition', title: 'Technical Seminars & Knowledge Forums', text: 'The official programme will bring industry professionals together for practical discussions on manufacturing technology, productivity, materials and market development.', sessions: ['Live technology and application insights', 'Production efficiency and automation', 'Materials and finishing innovations', 'Buyer-supplier networking'] }];

export const whyExhibit = [
  { icon: 'users', t: 'Meet focused trade buyers', d: 'Connect with furniture manufacturers, factory owners, engineers, architects, importers, distributors and dealers.' },
  { icon: 'saw', t: 'Demonstrate machinery live', d: 'Show performance, precision and finish on the exhibition floor where technical teams can compare solutions.' },
  { icon: 'handshake', t: 'Build local partnerships', d: 'Find distributors, agents and business partners for expansion across the Bangladesh market.' },
  { icon: 'trend', t: 'Enter a growing manufacturing market', d: 'Position your company within Bangladesh’s expanding furniture and wood-processing ecosystem.' },
  { icon: 'megaphone', t: 'Generate qualified business leads', d: 'Use a focused B2B environment to meet decision-makers and develop active opportunities.' },
  { icon: 'spark', t: 'Launch products to the trade', d: 'Introduce new technology, tools and materials through demonstrations and direct conversations.' },
];
export const whyVisit = [
  { icon: 'layers', t: 'Compare global technologies', d: 'Evaluate machinery, materials, hardware and production solutions across a focused trade floor.' },
  { icon: 'saw', t: 'See machines running', d: 'Watch live demonstrations and discuss output, service and applications directly with suppliers.' },
  { icon: 'trend', t: 'Source reliable partners', d: 'Meet manufacturers, importers, distributors and technical specialists.' },
  { icon: 'mic', t: 'Learn from industry experts', d: 'Attend technical seminars and knowledge forums when the next programme is announced.' },
  { icon: 'handshake', t: 'Network with decision-makers', d: 'Build relationships across furniture, interiors, woodworking and manufacturing.' },
  { icon: 'ticket', t: 'Receive visitor updates', d: 'Register your interest to be notified when visitor registration and event details open.' },
];
export const standOptions = [
  { t: 'Shell scheme stand', from: 'Configuration on request', d: 'A ready-built stand for product presentation and business meetings.', inc: ['Stand structure and fascia', 'Basic furniture and lighting', 'Exhibitor listing', 'Organiser support'] },
  { t: 'Raw space', from: 'Configuration on request', d: 'Open floor space for custom stands and live machinery displays.', inc: ['Floor space for custom build', 'Technical-service planning', 'Machinery access coordination', 'Exhibitor listing'], featured: true },
  { t: 'Premium positions & pavilions', from: 'Subject to availability', d: 'Prominent positions and grouped participation for brands and delegations.', inc: ['High-visibility locations', 'Multiple-open-side options', 'Pavilion planning', 'Sponsorship combinations'] },
];
export const sponsorships = [
  { t: 'Title partner', tier: 'Confirmed: Best CNC', d: 'Best CNC is the official title sponsor and appears in the supplied event lockup.', perks: ['Presented-by lockup across event branding'], taken: true },
  { t: 'Registration & badge partner', tier: 'Enquire for availability', d: 'Visibility across registration touchpoints and visitor badges.', perks: ['Digital registration presence', 'On-site counter branding'] },
  { t: 'Seminar partner', tier: 'Per session', d: 'Support a focused knowledge session for industry professionals.', perks: ['Session branding', 'Subject to programme approval'] },
  { t: 'Venue branding', tier: 'Multiple opportunities', d: 'High-footfall branding opportunities planned around the event venue.', perks: ['Placement options shared with the sponsorship plan'] },
];
export const faqs = [
  { group: 'Visiting', items: [
    { q: 'When is the 11th Bangladesh Wood International Expo?', a: 'The exhibition will take place from 11 to 13 November 2027.' },
    { q: 'Where will the next edition take place?', a: 'The next edition will take place at ICCB Exhibition Hall in Dhaka, Bangladesh.' },
    { q: 'Who should visit?', a: 'Furniture manufacturers, factory owners, engineers, architects, interior designers, builders, contractors, importers, distributors, dealers and trade associations.' },
    { q: 'What products will be shown?', a: 'Woodworking machinery, furniture production technology, timber, veneers, laminates, interior products, cutting tools, hardware, accessories and allied materials.' },
  ]},
  { group: 'Exhibiting', items: [
    { q: 'How do I enquire about a stand?', a: 'Submit the stand-enquiry form with your product category and space requirements. The team will share confirmed availability and commercial details.' },
    { q: 'Can machinery be demonstrated live?', a: 'Live machinery demonstrations are a core part of the expo. Technical requirements must be agreed with the organiser before confirmation.' },
    { q: 'Who organises the exhibition?', a: 'Bangladesh Wood International Expo is organised by Futurex Trade Fair and Events Pvt. Ltd. with ASK Trade & Exhibitions Pvt. Ltd. in Bangladesh.' },
    { q: 'Who is the title sponsor?', a: 'Best CNC is the title sponsor, shown in the official “Best CNC Presents” event logo.' },
  ]},
  { group: 'Registration', items: [
    { q: 'Is visitor registration open?', a: 'The confirmed visitor-registration window for the next edition has not yet been published. You can register interest to receive updates.' },
    { q: 'How will my information be used?', a: 'Details submitted through this website are used to respond to your enquiry and send relevant exhibition updates, as described in the privacy policy.' },
  ]},
];
export const countries = ['Bangladesh', 'India', 'China', 'Turkey', 'Germany', 'Italy', 'Malaysia', 'Taiwan', 'Thailand', 'Vietnam', 'Indonesia', 'United Arab Emirates', 'United Kingdom', 'United States', 'Other'];
export const businessTypes = ['Furniture manufacturer / exporter', 'Factory owner / production team', 'Architect / interior designer', 'Builder / contractor', 'Dealer / distributor / retailer', 'Importer / trader', 'Woodworking workshop', 'Engineer / technical professional', 'Government / association', 'Student / academic', 'Other'];
export const interestOptions = interest.map((i) => i.label);
export const heardFrom = ['Trade publication', 'Facebook / social media', 'Google search', 'WhatsApp / SMS', 'Invitation / industry outreach', 'Hoarding / banner', 'Colleague / friend', 'Exhibitor invitation', 'Other'];
