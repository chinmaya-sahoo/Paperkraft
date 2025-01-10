import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8 md:flex md:justify-between">
      {/* Left Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-lg uppercase tracking-wide text-gray-400">Contact Us</h2>
        <h1 className="text-4xl font-bold mt-4">Let’s talk about your project</h1>
        <p className="mt-6">Email: <a href="mailto:info@pixwell.sk" className="text-blue-500">info@pixwell.sk</a></p>
        <p className="mt-2">Phone: <a href="tel:+421915261658" className="text-blue-500">+421 915 261 658</a></p>

        <div className="flex space-x-4 mt-6">
          <a href="#" aria-label="Facebook" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-500"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-500"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-500"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Pinterest" className="hover:text-blue-500"><i className="fab fa-pinterest-p"></i></a>
        </div>

        <div className="mt-8 text-gray-400">
          <p><strong>Billing info:</strong></p>
          <p>Pixwell, s.r.o</p>
          <p>Hattalova 8, 831 03 Bratislava, Slovakia</p>
          <p>ID: 50 108 816</p>
          <p>TAX ID: 2120177829</p>
          <p>VAT ID: SK2120177829</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="mt-2 block w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="query" className="block text-sm font-medium text-gray-400">How can we help you?</label>
            <select
              id="query"
              name="query"
              className="mt-2 block w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="general">General Inquiry</option>
              <option value="project">Project Discussion</option>
              <option value="support">Support</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows="5"
              className="mt-2 block w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
