import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const products = [
  {
    image: "/bottles/Hydria 200 ml Pet bottle.jpg",
    title: "Hydria 200 ml Pet Bottle",
    pack: "Pack of 48 Bottles",
    link: "https://wa.me/+919909659966",
  },
  {
    image: "/bottles/Hydria 500 ml Pet bottle.jpg",
    title: "Hydria 500 ml Pet Bottle",
    pack: "Pack of 24 Bottles",
    link: "https://wa.me/+919909659966",
  },
  {
    image: "/bottles/Hydria 1000 ml Pet bottle.jpg",
    title: "Hydria 1 Litre Pet Bottle",
    pack: "Pack of 12 Bottles",
    link: "https://wa.me/+919909659966",
  },
  {
    image: "/bottles/Hydria 2L Pet bottle.jpg",
    title: "Hydria 2 Litre Pet Bottle",
    pack: "Pack of 9 Bottles",
    link: "https://wa.me/+919909659966",
  },
  {
    image: "/bottles/Hydria 5L Pet bottle.jpg",
    title: "Hydria 5 Litre Pet Bottle",
    pack: "Pack of 1 Bottle",
    link: "https://wa.me/+919909659966",
  },
  {
    image: "/bottles/Hydria 300 ml Glass bottle.jpg",
    title: "Hydria 300 ml Glass Bottle",
    pack: "Pack of 12 Bottles",
    link: "https://wa.me/+919909659966",
  },
  {
    image: "/bottles/Hydria 500 ml Glass bottle.jpg",
    title: "Hydria 500 ml Glass Bottle",
    pack: "Pack of 8 Bottles",
    link: "https://wa.me/+919909659966",
  },
  {
    image: "/bottles/Hydria 750 ml Glass bottle.jpg",
    title: "Hydria 750 ml Glass Bottle",
    pack: "Pack of 8 Bottles",
    link: "https://wa.me/+919909659966",
  },
  {
    image: "/bottles/Hydria 20L Pet jar.jpg",
    title: "Hydria 20L Pet Jar",
    pack: "Single Jar",
    link: "https://wa.me/+919909659966",
  },
];

const Products = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION – Image Background */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="/banners/3 our products banner.jpg"
          alt="Hydria Products"
          className="absolute inset-0 w-full h-full object-cover  "
        />

        {/* Dark Overlay (Luxury Contrast) */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white px-6 animate-fadeUp">
            <p className="uppercase tracking-[0.4em] text-xs mb-5 opacity-80">
              Our Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-4">
              Naturally Alkaline <br />
              <span className="font-semibold">Mineral Water</span>
            </h1>

            <p className="text-sm md:text-base text-white/80">
              Sourced from the ancient Aravalli Hills
            </p>
          </div>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center animate-fadeUp">
        <h2 className="font-luxury text-3xl md:text-4xl text-gray-900 mb-4">
          Our Signature Range
        </h2>
        <p className="font-modern text-gray-600 leading-relaxed">
          From compact daily hydration to large-volume solutions, Hydria offers
          naturally alkaline mineral water in thoughtfully designed packaging 
          crafted for purity, wellness, and elegance.
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="animate-fadeUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center ">
          <div className="transition-all duration-500 hover:-translate-y-1">
            <h3 className="font-luxury text-xl mb-2 text-green-700 ">
              100% Natural
            </h3>
            <p className="text-sm text-gray-600">
              Naturally filtered through ancient rock layers with no additives.
            </p>
          </div>

          <div className="transition-all duration-500 hover:-translate-y-1">
            <h3 className="font-luxury text-xl mb-2 text-green-700">
              Tested & Certified
            </h3>
            <p className="text-sm text-gray-600">
              Tested against 500+ brands and certified for purity & safety.
            </p>
          </div>

          <div className="transition-all duration-500 hover:-translate-y-1 ">
            <h3 className="font-luxury text-xl mb-2 text-green-700">
              Trusted Nationwide
            </h3>
            <p className="text-sm text-gray-600">
              Preferred across hospitality, aviation, railways, and modern
              trade.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products;
