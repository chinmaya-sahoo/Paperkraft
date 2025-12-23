import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative mx-4 mt-4 flex items-center justify-between rounded-full border border-slate-300 bg-white px-6 py-3 text-sm text-slate-800 shadow-sm">
      
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 font-semibold">
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4.706" cy="16" r="4.706" fill="#6366F1" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="#6366F1" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="#6366F1" />
          <circle cx="27.294" cy="16" r="4.706" fill="#6366F1" />
        </svg>
        FancyDress
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {["Home", "Product", "Adults", "Accessories", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="relative group overflow-hidden h-6"
          >
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              {item}
            </span>
            <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">
              {item}
            </span>
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="rounded-full border border-slate-300 px-4 py-1.5 text-sm hover:bg-slate-100 transition"
        >
          WhatsApp
        </a>
        <button className="rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 transition">
          Order Now
        </button>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-slate-700"
      >
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
        <div className="absolute left-0 top-16 z-20 w-full rounded-xl border border-slate-200 bg-white py-4 shadow-md md:hidden">
          <div className="flex flex-col items-center gap-4">
            {["Home", "Product", "Adults", "Accessories", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-700 hover:text-indigo-600"
                >
                  {item}
                </a>
              )
            )}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="w-40 rounded-full border border-slate-300 px-4 py-2 text-center hover:bg-slate-100 transition"
            >
              WhatsApp
            </a>
            <button className="w-40 rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 transition">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
