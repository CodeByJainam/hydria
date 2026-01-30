import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const baseLink =
    "relative text-sm tracking-wide transition-colors duration-300 text-gray-700 hover:text-green-700";

  const activeLink =
    "text-green-700 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-green-700 after:transition-all";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/logo/logo.JPG"
            alt="Hydria"
            className="h-12 transition-opacity duration-300 hover:opacity-90"
          />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          {[
            { path: "/", label: "HOME" },
            { path: "/about", label: "ABOUT" },
            { path: "/products", label: "PRODUCTS" },
            { path: "/origin", label: "ORIGIN" },
            { path: "/contact", label: "CONTACT" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Logo */}
        <img
          src="/logo/ruby-logo.jpg"
          alt="Ruby"
          className="h-10 hidden md:block opacity-90"
        />

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl text-gray-700"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-white">
          {[
            { path: "/", label: "HOME" },
            { path: "/about", label: "ABOUT" },
            { path: "/products", label: "PRODUCTS" },
            { path: "/origin", label: "ORIGIN" },
            { path: "/contact", label: "CONTACT" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-wide ${
                  isActive ? "text-green-700" : "text-gray-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
