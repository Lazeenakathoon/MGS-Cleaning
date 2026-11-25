import { ArrowUpRight, MapPin } from "lucide-react";

const areas = ["Wakad", "Hinjawadi", "Marunji"];
const services = ["Home deep cleaning", "Kitchen", "Bathroom", "Sofa", "Office"];
const mapSearch = "Wakad, Hinjawadi, Marunji, Pune, Maharashtra";

export default function ServiceAreas() {
  return (
    <section className="areas-section" id="service-areas">
      <div className="site-container areas-layout">
        <div>
          <span className="section-kicker">LOCAL CLEANING COVERAGE</span>
          <h2>What We Serve<br />in Pune</h2>
          <p>We provide home and office cleaning in Wakad, Hinjawadi, and Marunji. Choose a service and ask our team for a quote for your address.</p>
        </div>
        <div className="areas-panel">
          <div className="areas-panel-heading"><MapPin size={19} /><span>AREAS WE SERVE</span></div>
          <div className="area-chips">
            {areas.map((area) => <span className="area-chip" key={area}>{area}<i>PUNE</i></span>)}
          </div>
          <div className="areas-panel-heading areas-services-heading">
            <span>CLEANING SERVICES</span>
          </div>
          <div className="area-chips areas-service-chips">
            {services.map((service) => <span className="area-chip" key={service}>{service}</span>)}
          </div>
          <a
            className="text-link"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapSearch)}`}
            target="_blank"
            rel="noreferrer"
          >
            View service areas in Google Maps <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="service-area-map">
          <iframe
            title="Google Map showing MGS Cleaning service areas in Pune"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(mapSearch)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="areas-quote">
          <span>
            <strong>Need cleaning in Pune?</strong>
            <small>Tell us your location and the service you need. We’ll share a quote.</small>
          </span>
          <a href="#contact">Get a quote <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
