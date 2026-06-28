import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import logo from "../assets/logo.png";
import {
  FaArrowRight,
  FaBullhorn,
  
  FaCheckCircle,
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaPalette,
  FaRocket,
  FaShieldAlt,
  FaVideo,
} from "react-icons/fa";

const featureCards = [
  {
    title: "Web Development",
    desc: "Fast, modern, responsive websites built to convert visitors into clients.",
    icon: <FaCode className="text-xl text-[#0A2647]" />,
  },
  {
    title: "Creative Design",
    desc: "Brand visuals, posters, and social media creatives with a premium look.",
    icon: <FaPalette className="text-xl text-[#0F5132]" />,
  },
  {
    title: "Digital Marketing",
    desc: "Campaign-ready marketing assets designed to grow visibility and leads.",
    icon: <FaBullhorn className="text-xl text-[#7F1D1D]" />,
  },
  {
    title: "Video Editing",
    desc: "Reels, promos, and ad content that keep your audience engaged.",
    icon: <FaVideo className="text-xl text-[#D4AF37]" />,
  },
];

const rotatingPills = [
  {
    label: "Trusted Delivery",
    title: "We build with clarity, speed, and strategy.",
    desc: "Every project is designed to look premium and perform well across devices.",
    icon: <FaShieldAlt className="text-2xl text-[#0F5132]" />,
  },
  {
    label: "Brand Experience",
    title: "A polished look that feels custom-made.",
    desc: "We shape websites and creatives that reflect your brand identity properly.",
    icon: <FaGlobe className="text-2xl text-[#0A2647]" />,
  },
  {
    label: "Growth Focus",
    title: "More than design — built for business results.",
    desc: "From structure to visuals, every part is made to support growth.",
    icon: <FaRocket className="text-2xl text-[#7F1D1D]" />,
  },
  {
    label: "Mobile Ready",
    title: "Designed beautifully on every screen.",
    desc: "Your website will feel smooth, clean, and responsive on mobile and desktop.",
    icon: <FaMobileAlt className="text-2xl text-[#D4AF37]" />,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "We understand your brand, audience, goals, and content needs.",
  },
  {
    step: "02",
    title: "Design",
    desc: "We create a strong visual direction with modern and premium style.",
  },
  {
    step: "03",
    title: "Build",
    desc: "We turn the design into a clean, responsive, high-performance website.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "We finalize, test, and prepare your brand for a strong online presence.",
  },
];

const Home = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % rotatingPills.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const current = rotatingPills[active];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <Navbar />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF4FA]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,81,50,0.12),transparent_26%),radial-gradient(circle_at_center,rgba(10,38,71,0.06),transparent_34%)]" />
          <div className="absolute left-0 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <div className="absolute right-0 top-36 h-64 w-64 rounded-full bg-[#0F5132]/10 blur-3xl" />

          <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-white px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[#0A2647] shadow-sm">
                GROWTH AURA DIGITAL AGENCY
              </span>

              <h1 className="font-heading mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-[#0A2647] sm:text-5xl lg:text-6xl">
                Your brand deserves
                <span className="block text-[#0F5132]">a premium digital presence</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Growth Aura helps businesses stand out with modern websites, creative visuals,
                UI/UX design, digital marketing assets, video editing, and AI-powered solutions
                that feel professional from the first glance.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F5132] px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-emerald-900/15 transition-transform duration-300 hover:scale-[1.03]"
                >
                  Start Your Project
                  <FaArrowRight size={12} />
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0A2647]/15 bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0A2647] shadow-sm transition hover:border-[#D4AF37]/40 hover:text-[#0F5132]"
                >
                  View Portfolio
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-2xl font-bold text-[#0A2647]">01</p>
                  <p className="mt-1 text-sm text-slate-600">Premium Brand Direction</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-2xl font-bold text-[#0F5132]">24/7</p>
                  <p className="mt-1 text-sm text-slate-600">24/7 Support</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-2xl font-bold text-[#7F1D1D]">100%</p>
                  <p className="mt-1 text-sm text-slate-600">Customer Satisfaction</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Website Development",
                  "Graphic Design",
                  "UI/UX Design",
                  "Video Editing",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE PREMIUM CARD */}
            <div className="relative">
              <div className="absolute -left-6 top-12 h-24 w-24 rounded-full bg-[#D4AF37]/15 blur-3xl" />
              <div className="absolute -right-6 bottom-8 h-28 w-28 rounded-full bg-[#0F5132]/15 blur-3xl" />

              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                <div className="rounded-[1.75rem] bg-gradient-to-br from-white to-[#F5F8FC] p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={logo}
                      alt="Growth Aura Digital Agency"
                      className="h-20 w-20 rounded-full object-cover ring-2 ring-[#D4AF37]/40 shadow-md"
                    />

                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.3em] text-slate-500">
                        GROWTH AURA
                      </p>
                      <h2 className="font-heading mt-2 text-2xl font-bold text-[#0A2647] sm:text-3xl">
                        Build. Elevate. Grow.
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50">
                        {current.icon}
                      </div>

                      <div>
                        <p className="text-xs font-semibold tracking-[0.26em] text-slate-500">
                          {current.label}
                        </p>
                        <h3 className="font-heading mt-2 text-2xl font-bold text-slate-900">
                          {current.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {current.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {featureCards.map((service) => (
                      <div
                        key={service.title}
                        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-50">
                          {service.icon}
                        </div>
                        <h3 className="font-heading text-[17px] font-bold text-slate-900">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {service.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-2">
                    {rotatingPills.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActive(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          active === index
                            ? "w-8 bg-[#0F5132]"
                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132]">
                OUR PROCESS
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold text-[#0A2647] sm:text-4xl">
                A simple workflow with a premium result
              </h2>
              <p className="mt-4 text-slate-600">
                We keep the process clear, fast, and client-friendly so your brand stays in focus.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-sm font-semibold tracking-[0.25em] text-[#D4AF37]">
                    {item.step}
                  </p>
                  <h3 className="font-heading mt-3 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 bg-gradient-to-b from-[#F8FAFC] to-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132]">
                    READY TO GROW
                  </p>
                  <h2 className="font-heading mt-3 text-3xl font-bold text-[#0A2647] sm:text-4xl">
                    Let’s create a brand that feels premium and trusted.
                  </h2>
                  <p className="mt-4 max-w-2xl text-slate-600">
                    From websites to visuals, Growth Aura gives your business a clean identity,
                    modern presentation, and a strong online impression.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F5132] px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-emerald-900/15 transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Book a Consultation
                    <FaArrowRight size={12} />
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0A2647]/15 bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0A2647] shadow-sm transition hover:border-[#D4AF37]/40 hover:text-[#0F5132]"
                  >
                    See Services
                  </Link>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 text-[15px] font-medium text-slate-700">
                  <FaCheckCircle className="mr-2 inline text-[#0F5132]" />
                  Premium website structure
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 text-[15px] font-medium text-slate-700">
                  <FaCheckCircle className="mr-2 inline text-[#0F5132]" />
                  Strong visual branding
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 text-[15px] font-medium text-slate-700">
                  <FaCheckCircle className="mr-2 inline text-[#0F5132]" />
                  Responsive and modern UI
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;