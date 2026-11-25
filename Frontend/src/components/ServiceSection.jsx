import {
  ArrowUpRight,
  Bath,
  BriefcaseBusiness,
  CookingPot,
  House,
  MapPin,
  Sofa,
  Sparkles,
} from "lucide-react";
import { homeServices } from "../data/services";

const serviceIcons = {
  House,
  Bath,
  CookingPot,
  Sofa,
  BriefcaseBusiness,
};

const featuredServices = [
  { name: "Home Cleaning", image: "/mgs-home-cleaning.jpg" },
  { name: "Corporate Office Cleaning", image: "/mgs-home-cleaning.jpg" },
  { name: "Kitchen Cleaning", image: "/mgs-kitchen-cleaning.jpg" },
  { name: "Bathroom Cleaning", image: "/mgs-bathroom-cleaning.jpg" },
  { name: "Sofa Cleaning", image: "/mgs-home-cleaning.jpg" },
  { name: "Full Deep Cleaning", image: "/mgs-home-cleaning.jpg" },
];

const serviceImages = {
  1: "/mgs-home-cleaning.jpg",
  2: "/mgs-bathroom-cleaning.jpg",
  3: "/mgs-kitchen-cleaning.jpg",
  4: "/mgs-home-cleaning.jpg",
  5: "/mgs-home-cleaning.jpg",
};

export default function ServiceSection({ search, onSelectService }) {
  const term = search.trim().toLowerCase();
  const filterServices = (items) =>
    term
      ? items.filter((service) =>
          `${service.name} ${service.description}`.toLowerCase().includes(term)
        )
      : items;

  const groupedServices = [
    { title: "Home Cleaning Services", items: filterServices(homeServices), category: "home" },
  ].filter((group) => group.items.length > 0);

  return (
    <section className="section services-section" id="services">
      <div className="site-container">
        <div className="section-heading services-heading">
          <div>
            <span className="section-kicker">SERVICES IN PUNE</span>
            <h2>Professional Cleaning Services</h2>
          </div>
          <p>Choose trusted cleaning for your home and everyday spaces.</p>
        </div>

        {!term && (
          <div className="featured-services" aria-label="Popular cleaning services">
            {featuredServices.map((service) => (
              <button
                type="button"
                className="featured-service-card"
                key={service.name}
                onClick={() => onSelectService(service.name)}
              >
                <img src={service.image} alt="" />
                <span className="featured-service-shade" />
                <span className="featured-service-location">
                  <MapPin size={13} /> Pune
                </span>
                <strong>{service.name}</strong>
                <span className="featured-service-book">Book Now <ArrowUpRight size={15} /></span>
              </button>
            ))}
          </div>
        )}

        {groupedServices.length > 0 ? (
          <div className="service-groups">
            {groupedServices.map((group) => (
              <div className="service-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="service-grid">
                  {group.items.map((service) => {
                    const Icon = serviceIcons[service.icon] || Sparkles;
                    return (
                      <button
                        className="service-card"
                        type="button"
                        key={service.id}
                        onClick={() => onSelectService(service.name)}
                      >
                        <img
                          className="service-card-image"
                          src={serviceImages[service.id] || "/mgs-home-cleaning.jpg"}
                          alt=""
                        />
                        <span className="service-card-body">
                          <span className={`service-icon service-icon-${group.category}`}>
                            <Icon size={21} strokeWidth={1.8} />
                          </span>
                          <span className="service-card-copy">
                            <strong>{service.name}</strong>
                            <small>{service.description}</small>
                            <span className="service-card-location">
                              <MapPin size={12} /> Pune
                            </span>
                          </span>
                          <span className="service-card-book">
                            Book Now <ArrowUpRight size={15} />
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-services">
            <strong>No services found</strong>
            <span>Try another search for a cleaning service.</span>
          </div>
        )}
      </div>
    </section>
  );
}
