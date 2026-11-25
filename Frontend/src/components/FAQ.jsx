import { Plus } from "lucide-react";

const questions = [
  {
    question: "What areas does MGS serve?",
    answer: "We currently take enquiries for Wakad, Hinjawadi, and Marunji in Pune. Contact us with your address and we’ll confirm availability.",
  },
  {
    question: "What cleaning services can I request?",
    answer: "MGS offers full home, kitchen, bathroom, sofa, and office cleaning services.",
  },
  {
    question: "How do I get a price for a service?",
    answer: "Send us the service you need and a few details about the space. We’ll discuss the requirements and share a quote before confirming.",
  },
  {
    question: "How do I arrange a booking?",
    answer: "Use the enquiry form below or call/WhatsApp the MGS team. We’ll help confirm the service and an available time.",
  },
];

export default function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="site-container faq-layout">
        <div className="faq-intro">
          <span className="section-kicker">GOOD TO KNOW</span>
          <h2>Frequently Asked<br />Questions</h2>
          <p>Need help with something else? Our team is happy to help.</p>
          <a className="text-link" href="#contact">Ask MGS a question <span aria-hidden="true">→</span></a>
        </div>
        <div className="faq-list">
          {questions.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary>{question}<Plus size={19} aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
