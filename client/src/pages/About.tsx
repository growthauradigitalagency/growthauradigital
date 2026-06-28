import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import logo from "../assets/logo.png";
import {
  FaArrowRight,
  FaBullseye,
  FaCheckCircle,
  FaCode,
  FaLightbulb,
  FaPalette,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    desc: "Clean, responsive, and conversion-focused websites built for modern businesses.",
    icon: <FaCode className="text-xl text-[#0A2647]" />,
  },
  {
    title: "Graphic Design",
    desc: "Premium visuals, branding assets, posters, and social media creatives.",
    icon: <FaPalette className="text-xl text-[#0F5132]" />,
  },
  {
    title: "UI/UX Design",
    desc: "User-friendly layouts and experiences that feel smooth, clear, and professional.",
    icon: <FaLightbulb className="text-xl text-[#7F1D1D]" />,
  },
  {
    title: "Video Editing",
    desc: "Reels, promos, and digital content that keep your brand active and engaging.",
    icon: <FaVideo className="text-xl text-[#D4AF37]" />,
  },
];

const values = [
  {
    title: "Clarity",
    desc: "Every design decision is made to make the brand message easier to understand.",
    icon: <FaBullseye className="text-xl text-[#0A2647]" />,
  },
  {
    title: "Trust",
    desc: "We focus on clean structure, strong branding, and a premium professional feel.",
    icon: <FaShieldAlt className="text-xl text-[#0F5132]" />,
  },
  {
    title: "Growth",
    desc: "Our work is built to support long-term visibility, engagement, and business growth.",
    icon: <FaRocket className="text-xl text-[#7F1D1D]" />,
  },
  {
    title: "People First",
    desc: "We design for the people who will interact with your brand, not just for looks.",
    icon: <FaUsers className="text-xl text-[#D4AF37]" />,
  },
];

const timeline = [
  {
    step: "01",
    title: "Discover",
    desc: "We understand your business, audience, goals, and the image your brand should project.",
  },
  {
    step: "02",
    title: "Plan",
    desc: "We create a visual and content direction that aligns with your agency identity.",
  },
  {
    step: "03",
    title: "Create",
    desc: "We design and build a polished digital experience that feels premium and responsive.",
  },
  {
    step: "04",
    title: "Deliver",
    desc: "We refine the final output so your brand is ready to present with confidence.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <Navbar />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF4FA]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,81,50,0.10),transparent_26%),radial-gradient(circle_at_center,rgba(10,38,71,0.06),transparent_34%)]" />
          <div className="absolute left-0 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <div className="absolute right-0 top-28 h-64 w-64 rounded-full bg-[#0F5132]/10 blur-3xl" />

          <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-white px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[#0A2647] shadow-sm">
                ABOUT GROWTH AURA
              </span>

              <h1 className="font-heading mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-[#0A2647] sm:text-5xl lg:text-6xl">
                Creating digital experiences
                <span className="block text-[#0F5132]">that inspire growth</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Growth Aura Digital Agency helps businesses build a strong online presence through
                modern websites, creative design, smart branding, and digital solutions that feel
                professional from the first impression.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F5132] px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-emerald-900/15 transition-transform duration-300 hover:scale-[1.03]"
                >
                  Start a Project
                  <FaArrowRight size={12} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0A2647]/15 bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0A2647] shadow-sm transition hover:border-[#D4AF37]/40 hover:text-[#0F5132]"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-[#D4AF37]/15 blur-3xl" />
              <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-[#0F5132]/15 blur-3xl" />

              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                <div className="rounded-[1.75rem] bg-gradient-to-br from-white to-[#F5F8FC] p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <img
                      src={logo}
                      alt="Growth Aura Digital Agency"
                      className="h-24 w-24 rounded-full object-cover ring-2 ring-[#D4AF37]/40 shadow-md"
                    />

                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.3em] text-slate-500">
                        GROWTH AURA
                      </p>
                      <h2 className="font-heading mt-2 text-2xl font-bold text-[#0A2647] sm:text-3xl">
                        Built to feel premium
                      </h2>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                        We combine strategy, design, and development to create an experience that
                        looks refined and communicates trust.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[
                      "Strong brand identity",
                      "Modern responsive design",
                      "Clear digital presentation",
                      "Creative agency feel",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                      >
                        <FaCheckCircle className="mr-2 inline text-[#0F5132]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132]">
                  WHO WE ARE
                </p>
                <h2 className="font-heading mt-3 text-3xl font-bold text-[#0A2647] sm:text-4xl">
                  A digital agency focused on real brand presence
                </h2>
                <p className="mt-5 text-slate-600 leading-8">
                  Growth Aura is built for businesses that want more than a basic online presence.
                  We help brands look credible, modern, and visually consistent across every digital
                  touchpoint. Our approach brings together creative design, technical execution, and
                  strategic thinking so your audience sees a brand they can trust.
                </p>
                <p className="mt-4 text-slate-600 leading-8">
                  Our goal is simple: create an aura of success for every business we work with.
                  That means cleaner layouts, stronger messaging, better user experiences, and a
                  premium finish that stands out.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {values.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MISSION / VISION */}
        <section className="border-t border-slate-200 bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132]">
                  MISSION
                </p>
                <h3 className="font-heading mt-3 text-2xl font-bold text-[#0A2647]">
                  To help businesses grow through impactful digital experiences.
                </h3>
                <p className="mt-4 text-slate-600 leading-8">
                  We create websites, visuals, and brand experiences that help businesses communicate
                  more clearly, look more professional, and build lasting trust with their audience.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132]">
                  VISION
                </p>
                <h3 className="font-heading mt-3 text-2xl font-bold text-[#0A2647]">
                  To become a trusted creative partner for premium digital growth.
                </h3>
                <p className="mt-4 text-slate-600 leading-8">
                  We want Growth Aura to be known for clean design, strong identity, and
                  future-ready digital solutions that support business growth for years to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132]">
                WHAT WE DO
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold text-[#0A2647] sm:text-4xl">
                Services designed to strengthen your brand
              </h2>
              <p className="mt-4 text-slate-600 leading-8">
                We offer core creative and digital services that help your business look polished
                and perform better online.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="border-t border-slate-200 bg-gradient-to-b from-[#F8FAFC] to-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132]">
                OUR APPROACH
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold text-[#0A2647] sm:text-4xl">
                A simple process built around quality
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {timeline.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-sm font-semibold tracking-[0.25em] text-[#D4AF37]">
                    {item.step}
                  </p>
                  <h3 className="font-heading mt-3 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132]">
                    READY TO GROW
                  </p>
                  <h2 className="font-heading mt-3 text-3xl font-bold text-[#0A2647] sm:text-4xl">
                    Ready to build a stronger digital identity?
                  </h2>
                  <p className="mt-4 max-w-2xl text-slate-600 leading-8">
                    Let’s create a website and brand experience that feels clear, modern, and
                    premium from the very first click.
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;