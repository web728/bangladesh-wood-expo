import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/Icon';
import TreeRings from '@/components/TreeRings';
import ExpoCountdown from '@/components/ExpoCountdown';
import HomeMotion from '@/components/HomeMotion';
import JsonLd from '@/components/JsonLd';
import { SectionHead, PartnerWall, Testimonials } from '@/components/blocks';
import { event, organisers, SITE_URL } from '@/lib/site';
import { zones, whyExhibit } from '@/lib/content';
import { pageMeta, graph, organizationNodes, eventNode } from '@/lib/seo';
import { getTestimonials } from '@/lib/public-data';
import '../home.css';

import heroImg from '@/assets/bangladesh-2026/aisle.webp';
import exhibitImg from '@/assets/bangladesh-2026/laser.webp';
import meetingImg from '@/assets/bangladesh-2026/meeting.webp';
import ribbonImg from '@/assets/bangladesh-2026/inauguration.webp';
import seminarImg from '@/assets/bangladesh-2026/seminar.webp';
import crowdImg from '@/assets/bangladesh-2026/networking.webp';
import textureImg from '@/assets/photos/wood-texture.jpg';
import g1 from '@/assets/bangladesh-2026/machinery.webp';
import g2 from '@/assets/bangladesh-2026/machine_demo.webp';
import g3 from '@/assets/bangladesh-2026/meeting.webp';
import g4 from '@/assets/bangladesh-2026/networking.webp';

export const revalidate = 300;

export const metadata = pageMeta({
  title: 'Bangladesh Wood International Expo | Woodworking Exhibition in Dhaka',
  description: 'Bangladesh Wood International Expo connects woodworking machinery, furniture production, timber, laminates, interiors, tools and hardware with trade buyers in Bangladesh.',
  path: '/',
});

// One calm row of photos.
const galleryImages = [g1, ribbonImg, g2, crowdImg, g3, seminarImg, g4, exhibitImg];

export default async function Home() {
  const testimonials = await getTestimonials(3);

  return (
    <>
      <HomeMotion />
      <JsonLd
        data={graph(
          ...organizationNodes(),
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: 'Bangladesh Wood International Expo',
            inLanguage: 'en',
          },
          eventNode(),
        )}
      />

      {/* HERO */}
      <section className="hero on-dark" aria-labelledby="hero-title">
        <div className="hero__media" aria-hidden="true">
          <Image
            src={heroImg}
            alt=""
            fill
            priority
            fetchPriority="high"
            placeholder="blur"
            sizes="100vw"
            className="hero__img"
          />
        </div>
        <TreeRings className="hero__rings" rings={20} seed={12} cracks={3} />

        <div className="container hero__main">
          <div className="hero__copy">
            <h1 id="hero-title" className="hero__title">
              <span className="hero__kicker">Best CNC Presents · {event.edition} Edition</span>
              <span className="h-display hero__headline">
                Where Bangladesh’s wood industry <em>does business.</em>
              </span>
            </h1>
            <p className="lead hero__lead">
              Woodworking machinery, furniture production, timber, laminates, interiors, tools and hardware—connected with the buyers who matter.
            </p>
            <ul className="hero__meta" aria-label="Event dates and venue">
              <li className="hero__meta-date tnum">{event.datesLabel}</li>
              <li>
                <Icon name="pin" />
                {event.venue.name}, {event.venue.city}
              </li>
            </ul>
            <div className="hero__ctas">
              <Link className="btn btn--copper" href="/exhibitor-registration">
                Book a stand <Icon name="arrow" className="arrow" />
              </Link>
              <Link className="btn btn--ghost" href="/visitor-registration">
                Register your interest
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="hero__foot">
            <ul className="hero__highlights" aria-label="Exhibition highlights">
              <li><strong>Focused trade platform</strong><span>Built for wood, furniture and interior professionals</span></li>
              <li><strong>Joint organiser expertise</strong><span>International reach with local industry depth</span></li>
              <li><strong>Live technology discovery</strong><span>See machinery, materials and solutions in action</span></li>
              <li><strong>Buyer–supplier connections</strong><span>Meet decision-makers and build partnerships</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section--cream about" aria-labelledby="about-title">
        <div className="container about__grid">
          <div className="about__side" data-fx="0">
            <p className="eyebrow">The expo</p>
            <div className="about__seal" aria-label="11th edition">
              <TreeRings rings={12} seed={3} cracks={0} className="about__seal-rings" />
              <span className="about__seal-num">11</span>
              <span className="about__seal-txt">edition</span>
            </div>
          </div>
          <div className="about__main">
            <h2 id="about-title" className="h-lg" data-fx="1">
              Bangladesh’s international trade platform for the <em>wood and furniture</em> industry.
            </h2>
            <p className="about__text" data-fx="2">
              Manufacturers, importers, traders and end-users meet face to face to discover
              products, compare suppliers and close deals.
            </p>
            <div className="about__orgs" data-fx="3">
              <span className="about__orgs-label">Organised by</span>
              {organisers.map((org) => (
                <span key={org.id} className="about__org-mark">
                  {org.logo ? (
                    <Image src={org.logo} alt={org.name} width={150} height={34} sizes="150px" />
                  ) : (
                    <strong>{org.name}</strong>
                  )}
                </span>
              ))}
              <Link className="link-arrow" href="/about-show">
                More about the expo <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      {event.countdownTarget ? <ExpoCountdown dates={event.datesLabel} venue={event.venue.full} /> : null}

      {/* TWO WAYS IN */}
      <section className="section paths" aria-labelledby="paths-title">
        <div className="container">
          <div data-fx="0">
            <SectionHead
              center
              eyebrow="Be part of it"
              id="paths-title"
              title={<>Built for exhibitors. <em>Made for buyers.</em></>}
            />
          </div>
          <div className="paths__grid">
            <article className="path" data-fx="1">
              <div className="path__media">
                <Image
                  src={meetingImg}
                  alt="Exhibitor discussing business with trade visitors"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div className="path__body">
                <p className="path__tag">For exhibitors</p>
                <h3 className="h-sm">Meet the buyers who sign the orders.</h3>
                <p>Show your machines live to dealers, importers and decision-makers.</p>
                <div className="path__actions">
                  <Link className="btn" href="/exhibitor-registration">
                    Book a stand <Icon name="arrow" className="arrow" />
                  </Link>
                </div>
              </div>
            </article>

            <article className="path" data-fx="2">
              <div className="path__media">
                <Image
                  src={crowdImg}
                  alt="Trade visitors at the expo"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div className="path__body">
                <p className="path__tag">For visitors</p>
                <h3 className="h-sm">Find suppliers and close deals.</h3>
                <p>Register interest for confirmed visitor updates.</p>
                <div className="path__actions">
                  <Link className="btn" href="/visitor-registration">
                    Register your interest <Icon name="arrow" className="arrow" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* EXHIBITOR ZONES */}
      <section className="section section--cream cats" aria-labelledby="cats-title">
        <div className="container">
          <div data-fx="0">
            <SectionHead
              split
              eyebrow="Exhibitor profile"
              id="cats-title"
              title={<>Everything between the log <em>and the living room.</em></>}
              lead="Focused coverage from machinery and raw materials to finished interiors."
            />
          </div>
          <div className="cats__rail" data-accordion data-fx="1">
            {zones.map((zone, index) => (
              <Link
                href={`/exhibitor-profile/${zone.slug}`}
                className={`cat${index === 0 ? ' is-open' : ''}`}
                data-cat
                key={zone.slug}
              >
                <Image
                  src={zone.img}
                  alt={zone.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 40vw"
                  className="cat__img"
                />
                <span className="cat__shade" />
                <span className="cat__body">
                  <span className="cat__title">{zone.title}</span>
                  <span className="cat__more">Explore the zone <Icon name="arrow" /></span>
                </span>
              </Link>
            ))}
          </div>
          <div className="cats__foot" data-fx="2">
            <Link className="link-arrow" href="/exhibitor-profile">
              See the full exhibitor profile <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY EXHIBIT: three reasons only */}
      <section className="section why" aria-labelledby="why-title">
        <div className="container">
          <div data-fx="0">
            <SectionHead
              split
              eyebrow="Why exhibit"
              id="why-title"
              title={<>Your gateway to one of the region’s <em>fastest-growing markets.</em></>}
            />
          </div>
          <ol className="reasons">
            {whyExhibit.slice(0, 3).map((reason, index) => (
              <li className="reason" data-fx={String(index + 1)} key={reason.t}>
               
                <h3 className="h-sm">{reason.t}</h3>
                <p>{reason.d}</p>
              </li>
            ))}
          </ol>
          <div className="why__ctas" data-fx="2">
            <Link className="btn" href="/exhibitor-registration">
              Book a stand <Icon name="arrow" className="arrow" />
            </Link>
            <Link className="link-arrow" href="/why-exhibit">
              All the reasons <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-band section--darkest" aria-labelledby="gal-title">
        <div className="container gallery-band__head" data-fx="0">
          <p className="eyebrow">Glimpses</p>
          <h2 id="gal-title" className="h-lg">Inside past editions</h2>
          <Link className="link-arrow" href="/gallery">
            Open the gallery <Icon name="arrow" />
          </Link>
        </div>
        <div className="marquee" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="marquee__track" key={copy}>
              {galleryImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt=""
                  sizes="(max-width: 700px) 235px, 365px"
                  className="marquee__img"
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      <Testimonials items={testimonials} />

      {/* PARTNERS */}
      <section className="section partners" aria-labelledby="partners-title">
        <div className="container">
          <div data-fx="0">
            <SectionHead
              center
              eyebrow="Partners"
              id="partners-title"
              title={<>Backed by <em>the industry.</em></>}
            />
          </div>
          <div data-fx="1">
            <PartnerWall />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final on-dark" aria-labelledby="final-title">
        <div className="final__bg" aria-hidden="true">
          <Image src={textureImg} alt="" fill sizes="100vw" />
        </div>
        <TreeRings className="final__rings" rings={18} seed={5} cracks={2} />
        <div className="container final__inner">
          <p className="eyebrow" data-fx="0">{event.edition} edition · {event.datesLabel}</p>
          <h2 id="final-title" className="h-display" data-fx="1">
            Mark your <em>presence.</em>
          </h2>
          <p className="lead" data-fx="2">
            Tell us what you want to show and the team will share confirmed availability and options for the next edition.
          </p>
          <div className="final__ctas" data-fx="3">
            <Link className="btn btn--copper" href="/exhibitor-registration">
              Book a stand <Icon name="arrow" className="arrow" />
            </Link>
            <Link className="btn btn--ghost" href="/visitor-registration">
              Register your interest
            </Link>
          </div>
          <div className="final__links" data-fx="3">
            <Link className="final__link" href="/downloads/event-brochure">
              <Icon name="download" />Download the official brochure
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
