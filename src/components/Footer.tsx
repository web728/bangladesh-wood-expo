import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';
import { event, contacts, social, organisers, telHref, waHref, whatsappDefault } from '@/lib/site';


const cols = [
  {
    h: 'Exhibit',
    links: [
      ['Why exhibit', '/why-exhibit'],
      ['Exhibitor profile', '/exhibitor-profile'],
      ['Book a stand', '/exhibitor-registration'],
      ['Sponsorship', '/sponsorship'],
      ['Exhibitor updates', '/exhibitors'],
      ['Event brochure', '/downloads/event-brochure'],
    ],
  },
  {
    h: 'Visit',
    links: [
      ['Why visit', '/why-visit'],
      ['Visitor profile', '/visitor-profile'],
      ['Register interest', '/visitor-registration'],
      ['Plan your visit', '/venue'],
      ['Seminars', '/seminars'],
      ['FAQ', '/faq'],
    ],
  },
  {
    h: 'About',
    links: [
      ['About the expo', '/about-show'],
      ['Organisers', '/about-organizers'],
      ['Past editions', '/past-editions'],
      ['Past conference highlights', '/past-conferences'],
      ['Gallery', '/gallery'],
      ['Contact', '/contact'],
    ],
  },
];


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Image src="/brand/bangladesh-wood-expo-11th-display.png" alt="Best CNC Presents Bangladesh Wood and Metal Industries Expo, 11th Edition" width={900} height={726} sizes="150px" />
              <p>Bangladesh’s international B2B exhibition for woodworking machinery, furniture production, timber, laminates, interiors, tools and hardware.</p>
              <p className="small footer-brand__when">{event.datesLabel} · {event.venue.full}</p>
              <div className="footer-orgs" aria-label="Organised by">
                {organisers.map((o) => <span key={o.id}>{o.logo ? <Image src={o.logo} alt={o.name} width={180} height={64} sizes="180px" /> : <strong>{o.short}</strong>}</span>)}
              </div>
            </div>

            {cols.map((c) => (
              <div className="footer-col" key={c.h}>
                <h3>{c.h}</h3>
                <ul>{c.links.map(([l, h]) => <li key={h}><Link href={h}>{l}</Link></li>)}</ul>
              </div>
            ))}

            <div className="footer-col footer-contact">
              <h3>Talk to the team</h3>
              <ul>
                <li>
                  
                  <a href={`mailto:${contacts[0].email}`} className="small">{contacts[0].email}</a><br />
                  <a href={telHref(contacts[0].phone)} className="small">{contacts[0].phone}</a>
                </li>
                <li>
                 
                  <a href={`mailto:${contacts[1].email}`} className="small">{contacts[1].email}</a><br />
                  <a href={telHref(contacts[1].phone)} className="small">{contacts[1].phone}</a>
                </li>
                <li><Link className="small footer-all" href="/contact">All contacts →</Link></li>
              </ul>
              <div className="socials">
                <a href={social.facebook} target="_blank" rel="noopener" aria-label="Bangladesh Wood Expo on Facebook"><Icon name="facebook" /></a>
                <a href={waHref(whatsappDefault)} target="_blank" rel="noopener" aria-label="Chat with the Bangladesh secretariat on WhatsApp"><Icon name="whatsapp" /></a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {year} Bangladesh Wood International Expo. Organised by Futurex Trade Fair and Events and ASK Trade & Exhibitions.</span>
            <nav aria-label="Legal">
              <Link href="/privacy-policy">Privacy policy</Link>
              <button type="button" data-cookie-settings>Cookie settings</button>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </footer>

      <div className="action-bar" data-action-bar>
        <Link className="btn btn--copper" href="/exhibitor-registration">Book a stand</Link>
        <Link className="btn btn--ghost btn--on-dark" href="/visitor-registration">Register interest</Link>
        <a className="action-bar__call" href={waHref(whatsappDefault)} target="_blank" rel="noopener" aria-label="WhatsApp the Bangladesh secretariat"><Icon name="whatsapp" /></a>
      </div>
      <a className="wa-float" href={waHref(whatsappDefault)} target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><Icon name="whatsapp" /><span>Chat with us</span></a>
    </>
  );
}
