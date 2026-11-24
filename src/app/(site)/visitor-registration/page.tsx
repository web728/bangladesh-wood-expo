import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import VisitorForm from "@/components/forms/VisitorForm";
import { PageHero } from "@/components/blocks";
import { pageMeta, graph, breadcrumbNode, eventNode } from "@/lib/seo";
import { event, contacts, telHref, waHref } from "@/lib/site";
import heroImg from "@/assets/bangladesh-2026/aisle.webp";

export const metadata = pageMeta({
  title: "Visitor Updates | Bangladesh Wood International Expo",
  description:
    "Register your interest for Bangladesh Wood International Expo visitor-entry, programme and travel updates.",
  path: "/visitor-registration",
});

const perks = [
  {
    icon: "ticket",
    t: "Verified updates",
    d: "Visitor-entry and programme information.",
  },
  {
    icon: "badge",
    t: "Visitor information",
    d: "Receive the official registration process when released.",
  },
  {
    icon: "mail",
    t: "Show updates",
    d: "Seminar schedule and exhibitor list by email.",
  },
];

export default function VisitorRegistration() {
  const crumbs = [{ name: "Register interest", path: "/visitor-registration" }];
  return (
    <>
      <JsonLd data={graph(breadcrumbNode(crumbs), eventNode())} />
      <PageHero
        seed={121}
        eyebrow={`Visitor updates · ${event.datesLabel}`}
        title={
          <>
            Register your interest in <em>Bangladesh Wood.</em>
          </>
        }
        lead="Share your interest and the team will send confirmed next-edition information when it is released."
        crumbs={crumbs}
        image={heroImg}
      >
        <ul className="hero-perks">
          {perks.map((p) => (
            <li key={p.t}>
              <Icon name={p.icon} />
              <span>
                <strong>{p.t}</strong>
                {p.d}
              </span>
            </li>
          ))}
        </ul>
      </PageHero>
      <section className="section section--cream form-section">
        <div className="container form-layout">
          <div className="form-card">
            <VisitorForm />
          </div>
          <aside className="form-aside">
            <div className="card">
              <p className="card__kicker">Visiting guidelines</p>
              <ul>
                <li>
                  <Icon name="check" />
                  This is a trade event for industry professionals, business
                  owners, architects, designers and students of design.
                </li>
                <li>
                  <Icon name="check" />
                  Carry a business card, company ID or photo ID with your badge.
                </li>
                <li>
                  <Icon name="check" />
                  One badge per person. Badges can’t be shared.
                </li>
                <li>
                  <Icon name="check" />
                  {event.hours.label} daily
                  {event.hours.tentative ? " (tentative)" : ""},{" "}
                  {event.datesLabel}.
                </li>
              </ul>
            </div>
        
          </aside>
        </div>
      </section>
    </>
  );
}
