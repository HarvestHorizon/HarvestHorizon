import React from 'react';
import '../Styles/contact.css'


function Contact() {
  return (
    <div className="contact-container">

      <section className="contact-section">
        <h3>Contact</h3>
        <p>You can contact us with Facebook, Twitter, YouTube, and Gmail</p> 
        <div className="contact-links">
          <div className="contact-link">
          <img class="png" src="images/facebook.png" />
            <i className="fab fa-facebook"></i> HARVEST HORIZON
          </div>
          <div className="contact-link">
          <img class="png" src="images/twitter.png" />
            <i className="fab fa-twitter"></i> HARVEST HORIZON
          </div>
          <div className="contact-link">
          <img class="png" src="images/youtube.png" />
            <i className="fab fa-youtube"></i> HARVEST HORIZON
          </div>
          <div className="contact-link">
          <img class="png" src="images/gmail.png" />
            <i className="fab fa-envelope"></i> harvesthorizon123@gmail.com
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
