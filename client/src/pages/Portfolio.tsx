import { useState, type JSX } from "react";
import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGlobe,
  FaPalette,
  FaVideo,
  FaDesktop,
  FaChevronDown,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";

interface PortfolioDetails {
  brief: string;
  highlights: string[];
  result: string;
}

interface PortfolioItem {
  title: string;
  category: string;
  icon: JSX.Element;
  description: string;
  details: PortfolioDetails;
}

interface Stat {
  value: string;
  label: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Corporate Business Website",
    category: "Website Development",
    icon: <FaGlobe />,
    description:
      "Modern business website focused on credibility, lead generation, and responsive design.",
    details: {
      brief:
        "The client needed a professional online presence that could build trust with new visitors and turn that trust into enquiries.",
      highlights: [
        "Custom homepage built around the brand's services",
        "Mobile-first responsive layout",
        "SEO-friendly structure for better visibility",
        "Clear contact and enquiry flow",
      ],
      result:
        "A faster, modern website that gives visitors a strong first impression and makes it easy to get in touch.",
    },
  },
  {
    title: "Restaurant Brand Identity",
    category: "Graphic Design",
    icon: <FaPalette />,
    description:
      "Complete branding package including logo, social media creatives, and marketing materials.",
    details: {
      brief:
        "The brand needed a consistent visual identity across its menu, social media, and in-store materials.",
      highlights: [
        "Logo design and brand color palette",
        "Social media post and story templates",
        "Menu and signage design",
        "Brand guideline document for consistency",
      ],
      result:
        "A cohesive look across every touchpoint, making the brand feel established and trustworthy.",
    },
  },
  {
    title: "SaaS Dashboard UI",
    category: "UI/UX Design",
    icon: <FaDesktop />,
    description:
      "Premium dashboard interface with modern user experience and clean navigation.",
    details: {
      brief:
        "The product team needed a dashboard that felt simple to use despite showing a lot of data.",
      highlights: [
        "Information architecture and navigation design",
        "Clean data visualization layouts",
        "Reusable component design system",
        "Interactive prototype for stakeholder review",
      ],
      result:
        "A dashboard design that's easy to navigate, with a clear visual hierarchy for quick decision-making.",
    },
  },
  {
    title: "Social Media Reel Campaign",
    category: "Video Editing",
    icon: <FaVideo />,
    description:
      "High-engagement short-form video content designed for social media growth.",
    details: {
      brief:
        "The goal was to create short, scroll-stopping videos that reflect the brand's voice and energy.",
      highlights: [
        "Concept planning and storyboarding",
        "Editing with motion graphics and captions",
        "Sound design and pacing for retention",
        "Optimized formats for Reels, Shorts, and Stories",
      ],
      result:
        "A set of polished short-form videos ready to publish across platforms.",
    },
  },
  {
    title: "Educational Platform Website",
    category: "Website Development",
    icon: <FaGlobe />,
    description:
      "Responsive learning platform designed for scalability and student engagement.",
    details: {
      brief:
        "The platform needed a clean, easy-to-navigate structure for course listings and student information.",
      highlights: [
        "Course listing and detail page templates",
        "Responsive layout for mobile learners",
        "Simple navigation for students and visitors",
        "Built with scalability for future course additions",
      ],
      result:
        "A website structure that's ready to grow as new courses and content are added.",
    },
  },
  {
    title: "Luxury Brand Campaign",
    category: "Graphic Design",
    icon: <FaPalette />,
    description:
      "Premium marketing visuals designed to strengthen brand positioning.",
    details: {
      brief:
        "The brand wanted marketing visuals that felt premium and aligned with a luxury positioning.",
      highlights: [
        "Concept design for campaign visuals",
        "Premium typography and color treatment",
        "Print and digital ad layouts",
        "Consistent visual language across formats",
      ],
      result:
        "A visual campaign that reflects a premium brand identity across both digital and print.",
    },
  },
];

const stats: Stat[] = [
  { value: "6+", label: "Sample Projects Showcased" },
  { value: "4", label: "Service Categories Covered" },
  { value: "100%", label: "Custom Design Approach" },
  { value: "1:1", label: "Direct Client Collaboration" },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "We were impressed by how clearly the team explained their process before starting. The final website looked exactly like what we had discussed, with no surprises.",
    name: "Arvind Krishnan",
    role: "Founder",
  },
  {
    quote:
      "The branding work felt premium and well thought out. Every asset, from the logo to the social posts, felt consistent and professional.",
    name: "Priya Ramesh",
    role: "Startup Founder",
  },
  {
    quote:
      "What stood out was the attention to detail in the UI design. The dashboard felt intuitive even with a lot of information on screen.",
    name: "Mohammed Faisal",
    role: "Product Manager",
  },
];

const Portfolio: React.FC = () => {
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggleProject = (title: string): void => {
    setOpenProject((prev) => (prev === title ? null : title));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF4FA]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,81,50,0.10),transparent_26%),radial-gradient(circle_at_center,rgba(10,38,71,0.06),transparent_34%)]" />

          <div className="relative mx-auto max-w-7x1 px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-white px-4 py-2 text-xs font-semibold tracking-[0.25em] text-[#0A2647] shadow-sm">
                OUR PORTFOLIO
              </span>

              <h1 className="font-heading mt-6 text-5xl font-extrabold leading-tight text-[#0A2647] lg:text-6xl">
                Work that speaks
                <span className="block text-[#0F5132]">for itself</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                A collection of digital experiences, creative designs, and
                brand solutions crafted to help businesses stand out and
                grow.
              </p>
            </div>

            {/* STATS */}
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-slate-200 pt-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-extrabold text-[#0A2647] lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-10 lg:p-14">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132]">
                FEATURED PROJECT
              </p>

              <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647] lg:text-5xl">
                Premium Business Website
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Designed and developed a modern business website focused on
                building trust, generating leads, and creating a strong
                first impression from the moment a visitor lands on the
                page.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {["Responsive Design", "SEO Optimized", "High Performance"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <FaCheckCircle className="text-[#0F5132]" />
                      <span className="font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="border-t border-slate-200 bg-[#F8FAFC] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132]">
                SELECTED PROJECTS
              </p>

              <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647]">
                Showcasing creative and technical excellence
              </h2>

              <p className="mt-4 text-slate-600 leading-8">
                A look at the kind of work we do across web development,
                design, and content creation. Click on any project to see
                more details.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {portfolioItems.map((project) => {
                const isOpen = openProject === project.title;

                return (
                  <div
                    key={project.title}
                    className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                  >
                    <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[#0A2647] to-[#0F5132] text-5xl text-white">
                      {project.icon}
                    </div>

                    <div className="p-8">
                      <span className="text-sm font-semibold text-[#0F5132]">
                        {project.category}
                      </span>

                      <h3 className="font-heading mt-3 text-2xl font-bold text-slate-900">
                        {project.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {project.description}
                      </p>

                      <button
                        onClick={() => toggleProject(project.title)}
                        className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0F5132]"
                      >
                        {isOpen ? "Hide Details" : "View Details"}
                        <FaChevronDown
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen
                            ? "mt-6 max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="border-t border-slate-200 pt-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            The Brief
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {project.details.brief}
                          </p>

                          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            What We Did
                          </p>
                          <div className="mt-3 grid gap-2">
                            {project.details.highlights.map((point) => (
                              <div
                                key={point}
                                className="flex items-start gap-3"
                              >
                                <FaCheckCircle className="mt-1 flex-shrink-0 text-[#0F5132]" />
                                <span className="text-sm text-slate-700">
                                  {point}
                                </span>
                              </div>
                            ))}
                          </div>

                          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            The Result
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {project.details.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132]">
                CLIENT STORIES
              </p>

              <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647]">
                What people say about working with us
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7 shadow-sm"
                >
                  <div>
                    <FaQuoteLeft className="text-2xl text-[#D4AF37]/40" />
                    <p className="mt-4 text-slate-600 leading-7">
                      {t.quote}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2647]/10 font-heading font-bold text-[#0A2647]">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold text-slate-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-t border-slate-200 bg-[#F8FAFC] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132]">
                OUR PROCESS
              </p>

              <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647]">
                How we approach every project
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Discover",
                  description:
                    "We learn about your business goals, audience, and project requirements.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description:
                    "We create a clear strategy and structure before starting the project.",
                },
                {
                  step: "03",
                  title: "Design",
                  description:
                    "Our team designs and develops a polished solution tailored to your brand.",
                },
                {
                  step: "04",
                  title: "Launch",
                  description:
                    "We deliver, optimize, and help you establish a stronger digital presence.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
                >
                  <span className="text-lg font-bold text-[#D4AF37]">
                    {item.step}
                  </span>

                  <h3 className="font-heading mt-3 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-b from-[#F8FAFC] to-white p-10 shadow-sm lg:p-14">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132]">
                    LET'S CREATE TOGETHER
                  </p>

                  <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647]">
                    Let's create your next project
                  </h2>

                  <p className="mt-4 text-slate-600 leading-8">
                    Whether you're launching a new brand or upgrading an
                    existing one, we're ready to help build something
                    remarkable.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F5132] px-7 py-4 text-white font-semibold transition hover:scale-105"
                  >
                    Start Your Project
                    <FaArrowRight size={12} />
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-[#0A2647]"
                  >
                    Explore Services
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

export default Portfolio;