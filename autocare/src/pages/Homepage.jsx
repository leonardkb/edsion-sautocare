import React,{useState} from "react";
import Navbar from "../components/Navbar";
import SplashScreen from "../components/SplashScreen";
// Site info and logo
const site = {
  name: "Edisons AutoCare",
  tagline: "Your Trusted Car Service",
  phone: "+61491756626",
  email: "edisonmanjaly@gmail.com",
  address: "Kempsey, NSW, Australia 2440",
  hours: "Mon-Sat 8am–6pm",
};

const Logo = (props) => (
  <img src="/logo.png" alt="Edisons AutoCare Logo" {...props} />
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden bg-black text-gray-100">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-neutral-900 to-black" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="text-yellow-400">Edison's</span> Auto Care on Wheels
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-300">
            Edison is a certified mobile mechanic who brings the workshop to your driveway.
            From quick oil changes to full diagnostics and emergency fixes, he saves you time
            by servicing your vehicle wherever you are. Transparent pricing, quality parts,
            and friendly service—every time.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <a href="#contact" className="inline-flex items-center rounded-xl bg-yellow-500 px-5 py-3 
            text-black font-semibold hover:bg-yellow-400">Contact Now</a>
            
          </div>
          <div className="mt-6 text-sm text-gray-400">
            <span className="font-medium text-gray-300">Hours:</span> {site.hours}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="w-72 h-72 rounded-2xl bg-neutral-900 ring-1 ring-neutral-800
           shadow flex items-center justify-center hidden md:block">
            <Logo className="w-68 h-68" />
          </div>
        </div>
      </div>
    </div>
    <svg className="absolute bottom-0 left-0 right-0 -z-10" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <rect width="1440" height="120" fill="#000"/>
    </svg>
  </section>
);

const services = [
  { title: 'Oil & Filter Change', desc: 'Premium oil, OEM filters, and a 20‑point safety check.' },
  { title: 'Brake Service', desc: 'Pads, rotors, inspections, and fluid replacement.' },
  { title: 'Battery Replacement', desc: 'On‑site testing, replacement, and disposal.' },
  { title: 'Diagnostic Scan', desc: 'OBD‑II troubleshooting and repair recommendations.' },
  { title: 'Tire Rotation & Flat Fix', desc: 'Extend tire life and get back on the road fast.' },
  { title: 'Emergency Roadside Help', desc: 'Jump starts, minor fixes, and quick assistance.' },
];

const Services = () => (
  <section id="services" className="py-16 sm:py-24 bg-neutral-950 text-gray-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">Services</h2>
        <p className="mt-3 text-gray-400">Professional mobile maintenance and repairs for most makes and models.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(s => (
          <div key={s.title} className="rounded-2xl bg-neutral-900 p-6 shadow-sm
           ring-1 ring-neutral-800">
            <div className="h-12 w-12 rounded-xl bg-yellow-100/10 border 
            border-yellow-500/30 flex items-center justify-center mb-4 text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
              className="h-6 w-6"><path fill="currentColor" d="M22 19v1a2 2 0 0 1-2 
              2h-7v-2h7v-1zM9 20v2H4a2 2 0 0 1-2-2v-1h7zm9.5-12.5l-2.1 2.1l-3-3l2.1-2.1a2.12 2.12 0 1 1 3 3zM3 14l8.5-8.5l3 3L6 17H3z"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-16 sm:py-24 bg-black text-gray-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">About Edison</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            With years of hands‑on experience, Edison set out to make car care simple.
            No towing. No waiting rooms. Just honest, high‑quality service delivered
            at your home or office. He treats every vehicle like his own and every
            visit like a relationship built on trust.
          </p>
          <ul className="mt-6 space-y-3 text-gray-200">
            <li>✅ Step by step walkthrough</li>
            <li>✅ Transparent estimates before work begins</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-neutral-900 p-6 shadow-sm ring-1 ring-neutral-800">
          <h3 className="text-xl font-semibold text-white">What to expect</h3>
          <ol className="mt-4 list-decimal list-inside text-gray-300 space-y-2">
            <li>Request a time that works for you.</li>
            <li>Get a clear quote.</li>
            <li>Relax while we handle the rest—on site.</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
);



const Contact = () => (
  <section id="contact" className="py-16 sm:py-24 bg-neutral-950 text-gray-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
        <p className="mt-3 text-gray-400">Call or send a message. We’ll confirm your booking quickly.</p>
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl bg-neutral-900 p-6 shadow-sm ring-1 ring-neutral-800">
          <dl className="space-y-3 text-gray-300">
            <div className="flex items-center gap-3">
              <span className="font-semibold w-28 text-gray-200">Phone</span>
              <a className="text-yellow-400 hover:underline" href={`tel:${site.phone.replace(/[^\d+]/g,'')}`}>{site.phone}</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold w-28 text-gray-200">Email</span>
              <a className="text-yellow-400 hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-semibold w-28 text-gray-200">Address</span>
              <span>{site.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold w-28 text-gray-200">Hours</span>
              <span>{site.hours}</span>
            </div>
          </dl>
          <div className="mt-6 flex gap-3">
            <a href={`tel:${site.phone.replace(/[^\d+]/g,'')}`} className="inline-flex items-center rounded-xl bg-yellow-500 px-4 py-2 font-semibold text-black hover:bg-yellow-400">Call Now</a>
            
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-gray-400">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold">Contact</h3>
          <ul className="mt-3 space-y-1">
            <li><a href={`tel:${site.phone.replace(/[^\d+]/g,'')}`} className="hover:text-yellow-400">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-yellow-400">{site.email}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold">Address</h3>
          <address className="not-italic mt-3 text-gray-300">{site.address}</address>
          <div className="mt-2 text-sm">Hours: {site.hours}</div>
        </div>
        <div>
          <h3 className="text-white font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-1">
            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
        <div className="flex items-end">
          <p className="text-sm">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function Homepage() {
    const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
       
        <Contact />
      </main>
      <Footer />
    </div>
  );
}