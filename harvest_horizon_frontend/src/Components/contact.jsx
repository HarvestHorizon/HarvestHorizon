import React from 'react';
import '../Styles/contact.css'


function Contact() {
  return (
    <div className="contact-container">

      <section className="contact-section">
        <h2>Contact</h2>
        <p>You can contact us with Facebook, Twitter, YouTube, and Gmail</p>
        <div className="contact-links">
          <div className="contact-link">
            <i className="fab fa-facebook"></i> HARVEST HORIZON
          </div>
          <div className="contact-link">
            <i className="fab fa-twitter"></i> HARVEST HORIZON
          </div>
          <div className="contact-link">
            <i className="fab fa-youtube"></i> HARVEST HORIZON
          </div>
          <div className="contact-link">
            <i className="fas fa-envelope"></i> harvesthorizon123@gmail.com
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
