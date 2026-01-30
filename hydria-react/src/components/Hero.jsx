const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image with Slow Zoom */}
      <img
        src="/banners/background1.jpg"
        alt="Hydria Natural Mineral Water"
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-heroZoom "
      />

      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-6 max-w-3xl">
          {/* Tagline */}
          <p className="uppercase tracking-[0.35em] text-xs mb-6 opacity-0 animate-fadeUp delay-100">
            Naturally Alkaline • Pure • Timeless
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 opacity-0 animate-fadeUp delay-200">
            Pure Water <br />
            <span className="font-semibold">From The Heart of Aravalli</span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-white/80 mb-10 leading-relaxed opacity-0 animate-fadeUp delay-300">
            Naturally filtered through ancient rock layers, enriched with
            essential minerals, and crafted by nature over centuries.
          </p>

       
        </div>
      </div>
    </section>
  );
};

export default Hero;
