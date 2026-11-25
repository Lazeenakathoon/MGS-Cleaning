import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> LOCAL CLEANING, DONE WITH CARE</div>
          <h1>A fresher home<br />starts with <span>MGS.</span></h1>
          <p className="hero-description">
            From deep home cleaning to beautifully clean living spaces, book trusted cleaning for your Pune home.
          </p>
          <a className="text-link hero-explore" href="#services">Explore our services <ArrowDown size={16} /></a>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-grid" aria-label="MGS cleaning services">
            <img src="/mgs-home-cleaning.jpg" alt="Professional home deep cleaning" />
            <img src="/mgs-home-cleaning.jpg" alt="Professional home deep cleaning" />
            <img src="/mgs-bathroom-cleaning.jpg" alt="Bathroom cleaning service" />
            <img src="/mgs-kitchen-cleaning.jpg" alt="Kitchen cleaning service" />
          </div>
          <div className="hero-photo-shade" />
          <div className="hero-image-note">
            <span className="image-note-icon"><Sparkles size={18} /></span>
            <span><strong>Made for your home</strong><small>Care for every corner</small></span>
          </div>
          <div className="hero-service-note">
            <span className="service-note-icon"><Sparkles size={18} /></span>
            <span><strong>Home cleaning</strong><small>Book a convenient visit</small></span>
            <ArrowRight size={18} />
          </div>
          <div className="hero-image-label">MGS · PUNE</div>
        </div>
      </div>
      <div className="hero-bottom-line">
        <div className="site-container hero-bottom-inner">
          <span>At your service around</span>
          <strong>Wakad</strong><i /> <strong>Hinjawadi</strong><i /> <strong>Marunji</strong>
          <span className="hero-bottom-city">Pune, Maharashtra</span>
        </div>
      </div>
    </section>
  );
}
