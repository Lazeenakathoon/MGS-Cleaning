
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "./HowItWorks";
import Certificates from "./Certificates";
import Testimonials from "./Testimonials";
import InstagramReels from "./InstagramReels";
import Footer from "../components/Footer";
import ServiceAreas from "./ServiceAreas";
import FAQ from "./FAQ";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header search={search} onSearchChange={setSearch} onSearch={handleSearch} />
      <main>
        <Hero />
        <ServiceSection search={search} onSelectService={handleServiceSelect} />
        <WhyChooseUs />
        <HowItWorks />
        <Certificates />
        <Testimonials />
        <InstagramReels />
        <ServiceAreas />
        <FAQ />
      </main>
      <Footer selectedService={selectedService} onServiceChange={setSelectedService} />
    </>
  );
}
