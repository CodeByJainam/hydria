import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WaterTexture from "../components/WaterTexture";
const About = () => {
  return (
    <>
      <Navbar />

      <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-br from-[#0b3d2e] via-[#0f5c43] to-[#06261c]">
        {/* SVG Water Texture */}
        <WaterTexture />

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white px-6 max-w-3xl animate-fadeUp">
            <p className="uppercase tracking-[0.4em] text-xs mb-5 opacity-80">
              Our Story • Our Purpose
            </p>

            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
              Crafted by Nature <br />
              <span className="font-semibold">Driven by Legacy</span>
            </h1>

            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              From the ancient Aravalli range to your everyday wellness.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto animate-fadeUp">
          <h2 className="font-luxury text-3xl md:text-4xl text-gray-900 mb-6">
            About Hydria
          </h2>
          <p className="font-modern text-gray-600 leading-relaxed">
            With a heritage spanning more than 37 years, the RUBYRUCY Group
            represents innovation, responsibility, and excellence across
            industries. Hydria is a natural extension of this legacy —
            delivering purity, wellness, and trust in every drop.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="font-luxury text-xl mb-4 text-green-700">
              Our Legacy
            </h3>
            <p className="font-modern text-gray-600 leading-relaxed">
              RUBYRUCY Group has been a pioneer in industrial manufacturing,
              serving global markets across three countries with precision,
              reliability, and innovation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="font-luxury text-xl mb-4 text-green-700">
              Nature’s Process
            </h3>
            <p className="font-modern text-gray-600 leading-relaxed">
              Hydria water is naturally filtered through ancient layers of silt,
              clay, and rock, absorbing essential minerals like calcium,
              magnesium, and bicarbonates — without any artificial addition.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="font-luxury text-xl mb-4 text-green-700">
              Unmatched Quality
            </h3>
            <p className="font-modern text-gray-600 leading-relaxed">
              After testing over 500 brands, Hydria emerged as one of the finest
              natural mineral waters, trusted across hospitality, aviation,
              catering, railways, and modern trade.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-5xl mx-auto space-y-6 text-gray-600 leading-relaxed animate-fadeUp delay-300">
          <p>
            The idea behind Hydria was born from a simple truth — millions of
            people still lack access to clean, safe drinking water. We saw an
            opportunity not just to bottle water, but to deliver wellness.
          </p>

          <p>
            Deep within the ancient Aravalli range, water takes over 20 years to
            naturally filter and mineralize before reaching our underground
            aquifers. This slow, natural journey gives Hydria its alkaline
            nature and unmatched purity.
          </p>

          <p>
            Hydria is more than water. It is a commitment to health,
            sustainability, and trust — shaped by nature and perfected by
            science.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
