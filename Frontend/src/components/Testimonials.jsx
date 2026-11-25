import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    area: "Wakad, Pune",
    initials: "PS",
    text: "The team was punctual, polite and very detailed. Every room felt fresh after the deep cleaning, and they explained everything clearly.",
  },
  {
    name: "Rahul Patil",
    area: "Hinjawadi, Pune",
    initials: "RP",
    text: "Booking was simple and the kitchen cleaning result was excellent. The team used proper equipment and completed the work on time.",
  },
  {
    name: "Sneha Kulkarni",
    area: "Marunji, Pune",
    initials: "SK",
    text: "I booked a bathroom and sofa cleaning service together. Both services were handled carefully, professionally and without any mess.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="site-container">
        <div className="testimonials-heading">
          <span className="section-kicker">CUSTOMER REVIEWS</span>
          <h2>What Our Customers Say</h2>
          <p>Real feedback from customers who chose MGS Cleaning for their homes.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <Quote className="testimonial-quote" size={34} strokeWidth={1.5} />
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">“{testimonial.text}”</p>
              <div className="testimonial-person">
                <span className="testimonial-avatar">{testimonial.initials}</span>
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.area}</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
