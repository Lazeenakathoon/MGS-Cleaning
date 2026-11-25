import { ArrowUpRight, MessageCircle, ClipboardList, CalendarCheck2 } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Tell us what you need", description: "Choose a service and share a few details about your home." },
  { icon: MessageCircle, title: "Get a clear quote", description: "Our team will connect with you to understand the job." },
  { icon: CalendarCheck2, title: "Pick a convenient time", description: "Confirm the service details and arrange your visit." },
];

export default function HowItWorks() {
  return (
    <section className="steps-section" id="how-it-works">
      <div className="site-container">
        <div className="steps-heading">
          <div>
            <span className="section-kicker section-kicker-light">A SIMPLE WAY TO BOOK</span>
            <h2>Three Easy Steps<br />to a Cleaner Home</h2>
          </div>
          <a className="steps-cta" href="#contact">Get a quote <ArrowUpRight size={17} /></a>
        </div>
        <div className="steps-grid">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <article className="step-card" key={title}>
              <div className="step-icon"><Icon size={22} strokeWidth={1.8} /><span>0{index + 1}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
