import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: "🚗",
      title: "Buy Cars",
      desc: "Choose from a wide range of premium and budget cars."
    },
    {
      icon: "💰",
      title: "Sell Cars",
      desc: "Sell your old car quickly at the best market price."
    },
    {
      icon: "🛡️",
      title: "Insurance",
      desc: "Affordable insurance plans with trusted partners."
    },
    {
      icon: "🏦",
      title: "Car Finance",
      desc: "Easy EMI and instant approval financing options."
    },
    {
      icon: "🔧",
      title: "Inspection",
      desc: "Professional vehicle inspection and verification."
    },
    {
      icon: "📞",
      title: "24/7 Support",
      desc: "Dedicated support team available anytime."
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Premium Car Services</h1>
          <p>
            Buy, Sell and Finance your dream car with complete trust.
          </p>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>

        <div className="service-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
