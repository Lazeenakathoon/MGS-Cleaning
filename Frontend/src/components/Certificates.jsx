import { Award, BadgeCheck, ShieldCheck } from "lucide-react";

const certificates = [
  {
    icon: Award,
    title: "Professional Training",
    subtitle: "MGS Quality Standard",
  },
  {
    icon: ShieldCheck,
    title: "Safety Compliant",
    subtitle: "Care & Precaution",
  },
  {
    icon: BadgeCheck,
    title: "Verified Service",
    subtitle: "Trusted Cleaners",
  },
];

export default function Certificates() {
  return (
    <section className="certificates-section" id="certificates">
      <div className="site-container">
        <div className="certificates-heading">
          <span className="section-kicker">TRUST & QUALITY</span>
          <h2>Cleaning with Confidence</h2>
          <p>Our team follows careful service standards to deliver reliable cleaning for every home.</p>
        </div>

        <div className="certificate-grid">
          {certificates.map(({ icon: Icon, title, subtitle }) => (
            <article className="certificate-card" key={title}>
              <div className="certificate-inner">
                <div className="certificate-seal"><Icon size={30} strokeWidth={1.7} /></div>
                <span className="certificate-brand">MGS CLEANING</span>
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <div className="certificate-rule" />
                <strong>Certificate of Quality</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
