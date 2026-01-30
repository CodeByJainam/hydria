import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { NavLink } from "react-router-dom";

const products = [
  {
    image: "/bottles/Hydria 200 ml Pet bottle.jpg",
    title: "Hydria 200 ml",
    pack: "Pack of 48 Bottles",
    link: "https://wa.me/919909659966",
  },
  {
    image: "/bottles/Hydria 500 ml Pet bottle.jpg",
    title: "Hydria 500 ml",
    pack: "Pack of 24 Bottles",
    link: "https://wa.me/919909659966",
  },
  {
    image: "/bottles/Hydria 1000 ml Pet bottle.jpg",
    title: "Hydria 1 Litre",
    pack: "Pack of 12 Bottles",
    link: "https://wa.me/919909659966",
  },
  {
    image: "/bottles/Hydria 2L Pet bottle.jpg",
    title: "Hydria 2 Litre",
    pack: "Pack of 9 Bottles",
    link: "https://wa.me/919909659966",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <Hero />

      {/* PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="font-luxury text-3xl md:text-4xl text-gray-900 mb-3">
            Our Signature Collection
          </h2>
          <p className="font-modern text-sm text-gray-500 tracking-wide">
            Naturally Alkaline • Pure • Timeless
          </p>
        </div>

        {/* 4 PRODUCT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* 🔽 VIEW ALL PRODUCTS BUTTON (PUT HERE) */}
        <div className="mt-20 text-center">
          <NavLink
            to="/products"
            className="group relative inline-flex items-center justify-center px-14 py-4 overflow-hidden rounded-full border border-gray-300 font-modern text-sm tracking-[0.35em] text-gray-900 transition-all duration-500 hover:border-green-700"
          >
            {/* Fill animation */}
            <span className="absolute inset-0 bg-green-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

            {/* Text */}
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              VIEW ALL PRODUCTS
            </span>
          </NavLink>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
