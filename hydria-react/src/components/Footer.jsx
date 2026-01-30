import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b3d2e] to-[#06261c] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="transition-all duration-500 hover:-translate-y-1">
          <img
            src="/logo/logo.JPG"
            alt="Hydria"
            className="h-12 mb-6 opacity-90"
          />
          <p className="text-sm text-white/70 leading-relaxed">
            Hydria is naturally alkaline mineral water sourced from the ancient
            Aravalli range, enriched by nature and crafted for purity.
          </p>
        </div>

        {/* Quick Links */}
        <div className="transition-all duration-500 hover:-translate-y-1">
          <h4 className="font-modern tracking-widest text-xs mb-6 text-white/90">
            QUICK LINKS
          </h4>

          <ul className="space-y-3 text-sm text-white/70">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/origin", label: "Origin" },
              { to: "/contact", label: "Contact" },
            ].map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.to}
                  className="group relative inline-block transition-all duration-300 hover:text-white"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-green-400 transition-all duration-500 group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="transition-all duration-500 hover:-translate-y-1">
          <h4 className="font-modern tracking-widest text-xs mb-6 text-white/90">
            CONTACT
          </h4>

          <p className="text-sm text-white/70 leading-relaxed">
            Plot No. 13 & 18, Shiv Aaradhana Industrial Park,<br />
            Kuha, Gujarat, India
          </p>

          <p className="mt-4 text-sm text-white/70 transition-all duration-300 hover:text-white hover:translate-x-1">
            📞 <a href="tel:++918140565524">+91 8140565524</a>
          </p>
          <p className="text-sm text-white/70 transition-all duration-300 hover:text-white hover:translate-x-1">
            ✉️ <a href="mailto:jainamsathwara04@gmail.com">jainamsathwara04@gmail.com</a>
          </p>
        </div>

        {/* Social */}
        <div className="transition-all duration-500 hover:-translate-y-1">
          <h4 className="font-modern tracking-widest text-xs mb-6 text-white/90">
            FOLLOW US
          </h4>

          <div className="flex gap-5 text-xl group">
            {[
              { href: "https://www.facebook.com/hydriapremierwater", icon: "facebook", color: "hover:text-blue-500" },
              { href: "https://www.instagram.com/hydriawater", icon: "instagram", color: "hover:text-pink-500" },
              { href: "https://x.com/waterhydria", icon: "twitter", color: "hover:text-sky-400" },
              { href: "https://www.linkedin.com/company/hydriawater", icon: "linkedin", color: "hover:text-blue-600" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative transition-all duration-300 hover:-translate-y-1 ${item.color}`}
              >
                <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 transition"></span>
                <i className={`fi fi-brands-${item.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Bottom Bar */}
      <div className="text-center py-6 text-xs text-white/60 tracking-wide">
        © {new Date().getFullYear()} Hydria • Energy Beverages Pvt. Ltd. |
        Privacy Policy • Terms
      </div>
    </footer>
  );
};

export default Footer;
