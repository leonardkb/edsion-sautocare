import React from "react";

export default function Navbar() {
  // Function to close mobile nav
  const closeMobileNav = () => {
    const m = document.getElementById('mobile-nav');
    if (m) m.classList.add('hidden');
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-neutral-800 text-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-12 w-12" />
            <div className="leading-tight">
              <div className="font-semibold">Edisons AutoCare</div>
              <div className="text-xs text-gray-400">Your Trusted Car Service</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-yellow-400 font-medium">Services</a>
            <a href="#about" className="text-gray-300 hover:text-yellow-400 font-medium">About</a>
            <a href="#contact" className="inline-flex items-center rounded-xl bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400">Contact</a>
          </nav>
          <button
            className="md:hidden p-2"
            onClick={() => {
              const m = document.getElementById('mobile-nav');
              if (m) m.classList.toggle('hidden');
            }}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-nav" className="md:hidden hidden border-t border-neutral-800 bg-black text-gray-100">
        <div className="px-4 py-3 flex flex-col gap-3">
          {[
            { href: '#services', label: 'Services' },
            { href: '#about', label: 'About' },
          
            { href: '#contact', label: 'Contact' },
          ].map(n => (
            <a
              key={n.href}
              href={n.href}
              className="py-2"
              onClick={closeMobileNav}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400"
            onClick={closeMobileNav}
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}