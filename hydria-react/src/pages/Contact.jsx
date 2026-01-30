import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We’ll contact you shortly.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      state: "",
    });
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-b from-[#041f17] to-[#0b3d2e]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_65%)]"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="uppercase tracking-[0.4em] text-xs mb-4 opacity-80">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-6xl font-light">
              Contact <span className="font-semibold">Hydria</span>
            </h1>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* FORM */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-10">
            Talk To Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {[
              {
                name: "name",
                label: "Your Name *",
                type: "text",
                required: true,
              },
              { name: "phone", label: "Phone Number", type: "text" },
              {
                name: "email",
                label: "Email Address *",
                type: "email",
                required: true,
              },
              { name: "city", label: "City", type: "text" },
              { name: "state", label: "State", type: "text" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className="peer w-full border-b border-gray-300 bg-transparent py-3 text-gray-900 focus:outline-none focus:border-green-700"
                />

                <label
                  htmlFor={field.name}
                  className="
                    absolute left-0 top-3 text-gray-400 text-sm
                    transition-all duration-300
                    peer-focus:-top-3 peer-focus:text-xs peer-focus:text-green-700
                    peer-valid:-top-3 peer-valid:text-xs peer-valid:text-green-700
                  "
                >
                  {field.label}
                </label>
              </div>
            ))}

            {/* BUTTON */}
            <button
              type="submit"
              className="
                relative inline-flex items-center justify-center
                px-12 py-4 mt-6
                border border-green-700 text-green-700
                text-sm tracking-widest overflow-hidden
                transition-colors duration-500
                hover:text-white
              "
            >
              <span className="absolute inset-0 bg-green-700 translate-y-full transition-transform duration-500 hover:translate-y-0"></span>
              <span className="relative z-10">SEND MESSAGE</span>
            </button>
          </form>
        </div>

        {/* SIDE IMAGE */}
        <div className="space-y-6">
          <img
            src="/banners/Right.jpg"
            alt="Hydria Facility"
            className="rounded-2xl shadow-xl transition duration-500 hover:scale-[1.02]"
          />
          <p className="text-gray-600 leading-relaxed">
            Hydria is committed to purity, transparency, and long-term trust.
            Whether you are a distributor or a wellness-focused customer, we are
            here to help.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
