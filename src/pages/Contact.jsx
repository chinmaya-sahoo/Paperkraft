import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-40 py-20 bg-linear-to-b from-indigo-50 via-white to-white">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Contact Me
        </h1>
        <p className="mt-4 text-gray-600">
          Reach out for orders, enquiries, or collaborations
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="/images/my_image.png"
              alt="Profile"
              className="w-56 h-56 rounded-2xl object-cover shadow-md"
            />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Let’s Connect
            </h2>

            <div className="space-y-4 text-sm">
              <a
                href="tel:7735584055"
                className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition"
              >
                <Phone size={18} /> +91 7735584055
              </a>

              <a
                href="mailto:chinmaysahoo668@gmail.com"
                className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition"
              >
                <Mail size={18} /> chinmaysahoo668@gmail.com
              </a>

              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={18} /> Near Coordinate: {`20.8009, 86.2365`}
              </div>

              <a
                href="https://wa.me/917735584055"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-4 rounded-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-sm font-medium shadow transition"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-4">
                Follow me on
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border hover:bg-indigo-50 transition"
                >
                  <Instagram />
                </a>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border hover:bg-indigo-50 transition"
                >
                  <Facebook />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border hover:bg-indigo-50 transition"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border hover:bg-indigo-50 transition"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MapPin /> Our Exact Location
          </h3>

          <div className="overflow-hidden rounded-2xl border shadow-sm">
            <iframe
              title="Exact Location Map"
              src={`https://www.google.com/maps?q=20.8008787,86.2364611&z=17&output=embed`}
              className="w-full h-80 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
