import { useState } from "react";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { createEnquiry } from "../api/client";

const serviceOptions = [
  "Full Home Deep Cleaning",
  "Bathroom Cleaning",
  "Kitchen Cleaning",
  "Sofa Cleaning",
  "Corporate Office Cleaning",
  "Other",
];

export default function Footer({ selectedService, onServiceChange }) {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");
    setErrorMessage("");

    try {
      await createEnquiry({
        name: formData.get("name"),
        phone: formData.get("phone"),
        area: formData.get("area"),
        service: selectedService,
        details: formData.get("details"),
      });
      setStatus("sent");
      form.reset();
      onServiceChange("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="site-container">
        <div className="contact-banner">
          <div className="contact-banner-copy">
            <span className="section-kicker section-kicker-light">LET’S MAKE YOUR HOME FEEL NEW</span>
            <h2>Tell us what needs<br />a little MGS care.</h2>
            <p>Share a few details and the MGS team will follow up with you.</p>
            <a className="contact-phone" href="tel:+918862089006"><Phone size={17} /> +91 88620 89006</a>
          </div>
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>QUICK ENQUIRY</span>
              <small>We’ll follow up to confirm the details.</small>
            </div>
            <div className="form-row">
              <label>Your name<input name="name" autoComplete="name" placeholder="Name" required minLength="2" maxLength="100" /></label>
              <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Your number" required maxLength="20" /></label>
            </div>
            <div className="form-row">
              <label>Your area
                <select name="area" defaultValue="Wakad, Pune">
                  <option>Wakad, Pune</option>
                  <option>Hinjawadi, Pune</option>
                  <option>Marunji, Pune</option>
                  <option>Other area in Pune</option>
                </select>
              </label>
              <label>Service
                <select name="service" value={selectedService} onChange={(event) => onServiceChange(event.target.value)} required>
                  <option value="">Choose a service</option>
                  {serviceOptions.map((service) => <option key={service}>{service}</option>)}
                </select>
              </label>
            </div>
            <label>Anything else we should know?
              <textarea name="details" rows="2" placeholder="A short note about the space or service" maxLength="1000" />
            </label>
            <button className="submit-enquiry" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : status === "sent" ? "Send another enquiry" : "Send enquiry"} <ArrowRight size={17} />
            </button>
            {status === "sent" ? (
              <p className="form-note" role="status"><MessageCircle size={14} /> Thanks — your enquiry has been sent to MGS.</p>
            ) : status === "error" ? (
              <p className="form-note" role="alert">{errorMessage}</p>
            ) : (
              <p className="form-note"><MessageCircle size={14} /> Your details are sent directly to the MGS enquiry service.</p>
            )}
          </form>
        </div>

        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <img className="brand-mark" src="/mgs-logo.png" alt="" />
            <span className="brand-copy"><strong>MGS <span>Cleaning</span></strong><small>HOME & WATER CARE</small></span>
          </a>
          <p>Home and water tank cleaning for Wakad, Hinjawadi, and Marunji, Pune.</p>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#services">Services</a>
            <a href="#why-mgs">Why MGS</a>
            <a href="#service-areas">Service areas</a>
            <a href="#faq">FAQs</a>
          </nav>
          <div className="footer-contact">
            <a href="tel:+918862089006"><Phone size={15} /> Call MGS</a>
            <a href="https://wa.me/918862089006" target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a>
            <span><MapPin size={15} /> Pune, Maharashtra</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© MGS Cleaning</span>
          <span>Made for cleaner, happier spaces.</span>
        </div>
      </div>
    </footer>
  );
}
