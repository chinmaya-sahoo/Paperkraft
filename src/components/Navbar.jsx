import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Kids", href: "/category/kids" },
  { name: "Adults", href: "/category/adults" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="lg:w-[80%] relative mx-4 mt-4 flex items-center justify-between rounded-full border border-slate-300 bg-white px-6 py-3 text-sm text-slate-800 shadow-sm left-1/2 -translate-x-[50%]">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 font-semibold">
        <span className="text-indigo-600 text-lg">🎭</span>
        Paperkraft
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="relative group overflow-hidden h-6"
          >
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              {item.name}
            </span>
            <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:flex">
        <a
          href="https://wa.me/917735584055?text=Hi,%20I'm%20Interested%20in%20Your%20Products"
          className="rounded-full border border-slate-300 px-4 py-1.5 hover:bg-green-400 transition"
          target="_blank"
        >
          WhatsApp
        </a>
      </div>

      {/* Mobile Toggle */}
      <button onClick={() => setOpen(!open)} className="md:hidden">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 top-16 z-20 w-full rounded-xl border bg-white py-4 shadow-md md:hidden">
          <div className="flex flex-col items-center gap-4">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setOpen(false)}
                className="hover:text-indigo-600"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/917735584055"
              className="w-40 rounded-full border px-4 py-2 text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
