import { useState } from "react";
import { MapPin, Phone, Search, ShoppingCart, UserRound } from "lucide-react";

export default function Header({ search, onSearchChange, onSearch }) {
  const [activeSection, setActiveSection] = useState("");

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href="#home" aria-label="MGS Cleaning home">
          <img className="brand-mark" src="/mgs-logo.png" alt="MGS Cleaning" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a className={activeSection === "home" ? "is-active" : ""} href="#home" onClick={() => setActiveSection("home")}>Home</a>
          <a className={activeSection === "services" ? "is-active" : ""} href="#services" onClick={() => setActiveSection("services")}>Services</a>
        </nav>

        <form className="header-search" onSubmit={onSearch} role="search">
          <span className="header-search-location">
            <MapPin size={18} strokeWidth={2.7} aria-hidden="true" />
            <strong>Pune</strong>
          </span>
          <span className="header-search-divider" aria-hidden="true" />
          <input
            aria-label="Search cleaning services"
            type="search"
            placeholder="Kitchen or tank cleaning"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
          />
          <button type="submit" aria-label="Find a service"><Search size={19} strokeWidth={2.5} /></button>
        </form>

        <div className="header-actions">
          <a className="header-phone" href="tel:+918862089006" aria-label="Call MGS at +91 88620 89006">
            <Phone size={18} strokeWidth={2.8} />
            <span>+91 88620 89006</span>
          </a>
          <a className="header-book" href="#contact">Book Now</a>
          <a className="header-icon-button" href="#contact" aria-label="Contact MGS">
            <UserRound size={20} />
          </a>
          <a className="header-icon-button header-bag" href="#contact" aria-label="Start a cleaning booking">
            <ShoppingCart size={19} />
          </a>
        </div>
      </div>
    </header>
  );
}
