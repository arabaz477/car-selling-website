import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <h1>📞 Contact Us</h1>
      <p className="contact-subtitle">
        Have questions? We'd love to hear from you.
      </p>

      <div className="contact-box">
        <div className="contact-info">
  <h2>🚗 CarZone Support</h2>

  <p>📍 Noida, Uttar Pradesh, India</p>

  <p>📞 +91 9876543210</p>

  <p>📧 support@carzone.com</p>

  <p>🕒 Mon - Sat : 9 AM - 7 PM</p>

  <p>
    We help customers buy and sell cars with complete transparency,
    secure payments and trusted service.
  </p>
</div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;