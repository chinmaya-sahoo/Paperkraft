import React from 'react';
// import './Contact.css'; // Ensure you style it accordingly

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Contact Us</h2>
        <h1>Let’s talk about your project</h1>
        <p>Email: <a href="mailto:info@pixwell.sk">info@pixwell.sk</a></p>
        <p>Phone: <a href="tel:+421915261658">+421 915 261 658</a></p>

        <div className="social-icons">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
        </div>

        <div className="billing-info">
          <p><strong>Billing info:</strong></p>
          <p>Pixwell, s.r.o</p>
          <p>Hattalova 8, 831 03 Bratislava, Slovakia</p>
          <p>ID: 50 108 816</p>
          <p>TAX ID: 2120177829</p>
          <p>VAT ID: SK2120177829</p>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="query">How can we help you?</label>
          <select id="query" name="query">
            <option value="general">General Inquiry</option>
            <option value="project">Project Discussion</option>
            <option value="support">Support</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Write your message here..." rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
