import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 px-4 md:px-16 lg:px-24 xl:px-40 pt-16 pb-8">
      
      {/* Top Section */}
      <div className="grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-white">🎭 FancyDress</h3>
          <p className="mt-3 text-sm text-slate-400">
            Fancy Dress Costume Accessories for Kids & Adults.
            Krishna Dress, Sanju Costume, Mukut, Belts & More.
          </p>

          <a
            href="https://wa.me/917735584055?text=Hi,%20I%20want%20to%20enquire%20about%20Fancy%20Dress%20Costumes"
            className="inline-block mt-4 rounded-full bg-green-500 hover:bg-green-600 text-white px-5 py-2 text-sm transition"
          >
            WhatsApp Order
          </a>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/category/kids" className="hover:text-white">Kids Fancy Dress</a></li>
            <li><a href="/category/adults" className="hover:text-white">Adult Fancy Dress</a></li>
            <li><a href="/category/krishna" className="hover:text-white">Krishna Dress & Mukut</a></li>
            <li><a href="/category/sanju" className="hover:text-white">Sanju Costume</a></li>
            <li><a href="/category/accessories" className="hover:text-white">Accessories</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/products" className="hover:text-white">All Products</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">School Orders</a></li>
            <li><a href="#" className="hover:text-white">Festival Orders</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>📍 Odisha, India</li>
            <li>📞 <a href="tel:+917735584055" className="hover:text-white">+91 77355 84055</a></li>
            <li>🕒 Mon – Sun: 9 AM – 9 PM</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} FancyDress. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
