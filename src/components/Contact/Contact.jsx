import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-900 h-screen overflow-x-hidden overflow-y-auto  text-white py-16 px-8 md:flex md:justify-between my-auto">
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

      {/* Right Section Replaced with Image */}
      <div 
        className="md:w-1/2 bg-cover bg-center rounded-lg shadow-lg animate-pulse" 
        style={{ backgroundImage: "url('/Default_Images/user.png')", height: '400px' }}
      >
      </div>
    </div>
  );
};

export default Contact;
