import { BadgeIndianRupee, CalendarCheck2, HeartHandshake, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Care you can count on",
    description: "Our team treats your home with care and respects your space from start to finish.",
  },
  {
    icon: BadgeIndianRupee,
    title: "A clear quote first",
    description: "Know what the service includes and discuss the quote with us before confirming.",
  },
  {
    icon: CalendarCheck2,
    title: "A time that works",
    description: "Choose a preferred time and we’ll coordinate your visit based on availability.",
  },
  {
    icon: HeartHandshake,
    title: "A local MGS team",
    description: "We focus on serving homes in Wakad, Hinjawadi, and Marunji, Pune.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-section" id="why-mgs">
      <div className="site-container">
        <div className="why-layout">
          <div className="why-intro">
            <span className="section-kicker">WHY MGS</span>
            <h2>Why Choose MGS?</h2>
            <p>Thoughtful home cleaning, clear communication, and local service you can count on.</p>
            <a className="text-link" href="#contact">Talk to our team <span aria-hidden="true">→</span></a>
          </div>
          <div className="reasons-grid">
            {reasons.map(({ icon: Icon, title, description }, index) => (
              <article className="reason-card" key={title}>
                <div className="reason-topline">
                  <span className="reason-icon"><Icon size={21} strokeWidth={1.8} /></span>
                  <span className="reason-number">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
