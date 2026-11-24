import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { PageHero } from '@/components/blocks';
import { pageMeta, graph, breadcrumbNode, organizationNodes } from '@/lib/seo';
import { contacts, offices, event, telHref, waHref, social } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Contact Us | Stall Booking, Visitors & Sponsorship | Bangladesh Wood',
  description: 'Contact the Bangladesh Wood Expo team: stall booking (India & international), the Bangladesh secretariat, sponsorship and media, by phone, WhatsApp or email.',
  path: '/contact',
});

export default function Contact() {
  const crumbs = [{ name: 'Contact', path: '/contact' }];
  return (
    <>
      <JsonLd data={graph(breadcrumbNode(crumbs), ...organizationNodes())} />
      <PageHero seed={171} dark={false} eyebrow="Contact" title={<>We’re here to help <em>you connect.</em></>} lead="Booking a stand, planning a visit, sponsoring or writing about the expo? Reach the right person directly." crumbs={crumbs} />
     
      <section className="section section--cream">
        <div className="container form-layout">
          <div className="form-card">
            <p className="eyebrow">Send a message</p>
            <h2 className="h-md" style={{ margin: '14px 0 26px' }}>Our team will respond promptly.</h2>
            <EnquiryForm topic="other" />
          </div>
          <aside className="form-aside">
         {contacts.map((contact) => (
  <div className="card" key={contact.name}>
    
    <strong>{contact.name}</strong>
    

    <p>
      <a href={telHref(contact.phone)}>{contact.phone}</a>
      <br />
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </p>
  </div>
))}
            <div className="card">
              <p className="card__kicker">Venue</p>
              <strong>{event.venue.full}</strong>
              <p>{event.venue.full}<br />{event.datesLabel}</p>
              <a className="link-arrow" href={event.venue.mapsUrl} target="_blank" rel="noopener">Directions<Icon name="arrow-up-right" /></a>
            </div>
            <a className="dl" href={social.facebook} target="_blank" rel="noopener"><span className="dl__icon"><Icon name="facebook" /></span><span><strong>Follow on Facebook</strong><span>News and exhibitor announcements</span></span></a>
          </aside>
        </div>
      </section>
    </>
  );
}
