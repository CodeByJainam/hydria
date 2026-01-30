import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoGrid from "../components/VideoGrid";

const Origin = () => {
  const videos = [
    "public/videos/video-1.mp4",
    "public/videos/video-2.mp4",
    "public/videos/video-3.mp4",
    "public/videos/video-4.mp4",
    "public/videos/video-5.mp4",
    "public/videos/video-6.mp4",
  ];

  return (
    <>
      <Navbar />

      {/* HERO – EMOTIONAL INTRO */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-b from-[#041f17] to-[#0b3d2e]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_65%)]"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl animate-fadeUp">
            <p className="uppercase tracking-[0.5em] text-xs mb-6 opacity-70">
              A Drop’s Journey
            </p>

            <h1 className="text-4xl md:text-7xl font-light leading-tight mb-8">
              Before It Reached <br />
              <span className="font-semibold">Your Bottle</span>
            </h1>

            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              Hydria begins its life deep beneath the Earth shaped slowly,
              silently, and naturally over millions of years.
            </p>
          </div>
        </div>
      </section>

      {/* STORY SECTION 1 */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="animate-fadeUp">
          <h2 className="font-luxury text-3xl md:text-4xl mb-6 text-gray-900">
            Where Time Moves Slowly
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Long before cities, industries, and modern life existed, rainwater
            gently fell upon the ancient Aravalli range one of the oldest
            mountain systems on Earth.
          </p>

          <p className="text-gray-600 leading-relaxed">
            What followed was not a rush, but patience. Drop by drop, year by
            year, the water began a journey measured not in days but in
            centuries.
          </p>
        </div>

        <div className="relative group animate-fadeUp">
          <video
            src={videos[0]}
            controls
            className="h-[50vh] w-full rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </section>

      {/* STORY SECTION 2 – DARK */}
      <section className="bg-[#061f18] text-white py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative group animate-fadeUp">
            <video
              src={videos[1]}
              controls
              className="h-[50vh] w-full rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <div className="order-1 md:order-2 animate-fadeUp">
            <h2 className="font-luxury text-3xl md:text-4xl mb-6">
              Nature’s Filtration System
            </h2>

            <p className="text-white/80 leading-relaxed mb-4">
              As the water slowly traveled underground, it passed through
              natural layers of clay, silt, and rock absorbing minerals like
              calcium, magnesium, silica, and bicarbonates.
            </p>

            <p className="text-white/80 leading-relaxed">
              No machines. No shortcuts. Just nature doing what it has perfected
              over millions of years.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO MOSAIC */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-center font-luxury text-3xl md:text-4xl mb-16 text-gray-900 animate-fadeUp">
          The Source, Unfiltered
        </h2>

        <div className="animate-fadeUp">
          <video
            src={videos[2]}
            controls
            className="h-[50vh] w-full rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-[1.02]"
          />
          {/* <VideoGrid videos={videos.slice(2)} /> */}
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fadeUp">
          <h2 className="font-luxury text-3xl md:text-4xl mb-6 text-gray-900">
            Purity Is Not Created. It Is Preserved.
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            In a world where shortcuts are common, Hydria chooses patience.
            Bottled at the source, certified under IS 13428, and untouched by
            artificial processes.
          </p>

          <p className="text-gray-600 leading-relaxed">
            You don’t have to trust us blindly test our water yourself. Nature
            has already done the hard work.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Origin;
