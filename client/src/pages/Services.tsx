import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaPalette,
  FaVideo,
  FaDesktop,
  FaMobileAlt,
  FaSearch,
  FaBullhorn,
  FaQuoteLeft,
  FaShieldAlt,
  FaClock,
  FaSyncAlt,
  FaComments,
  FaFileContract,
  FaLock,
  FaCookie,
  FaShareAlt,
  FaDatabase,
  FaChevronDown,
  FaChevronUp,
  FaCloud,
  FaRobot,
  FaUsersCog,
  FaChartLine,
  FaBug,
  FaCogs,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-3xl text-[#0A2647] dark:text-[#D4AF37]" />,
    title: "Web Development",
    description:
      "Custom business websites designed to build trust, improve visibility, and generate leads.",
    features: [
      "Responsive Design",
      "SEO Friendly Structure",
      "Fast Loading Pages",
      "Modern UI",
    ],
  },
  {
    icon: <FaMobileAlt className="text-3xl text-[#0F5132] dark:text-[#6FCF97]" />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
    features: [
      "iOS & Android Apps",
      "Cross-Platform Solutions",
      "App Store Optimization",
      "Push Notifications",
    ],
  },
  {
    icon: <FaCloud className="text-3xl text-[#7F1D1D] dark:text-[#F28B82]" />,
    title: "Cloud Driven Innovation",
    description:
      "Scalable cloud solutions that modernize your infrastructure and accelerate digital transformation.",
    features: [
      "Cloud Migration",
      "AWS/Azure/GCP",
      "Serverless Architecture",
      "DevOps Automation",
    ],
  },
  {
    icon: <FaRobot className="text-3xl text-[#D4AF37] dark:text-[#FFD700]" />,
    title: "Intelligent SaaS Solutions",
    description:
      "AI-powered software as a service platforms that streamline operations and deliver data-driven insights.",
    features: [
      "AI Integration",
      "Analytics Dashboards",
      "Subscription Management",
      "API-First Design",
    ],
  },
  {
    icon: <FaDesktop className="text-3xl text-[#0A2647] dark:text-[#D4AF37]" />,
    title: "UI/UX Design",
    description:
      "Professional user experiences that feel intuitive, premium, and conversion-focused.",
    features: [
      "Wireframes",
      "User Flow Design",
      "Landing Pages",
      "Mobile UI Design",
    ],
  },
  {
    icon: <FaPalette className="text-3xl text-[#0F5132] dark:text-[#6FCF97]" />,
    title: "Graphic Design",
    description:
      "Creative visuals that strengthen your brand identity and improve audience engagement.",
    features: [
      "Social Media Creatives",
      "Posters & Banners",
      "Brand Assets",
      "Marketing Designs",
    ],
  },
  {
    icon: <FaBullhorn className="text-3xl text-[#7F1D1D] dark:text-[#F28B82]" />,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that increase visibility, engagement, and conversions.",
    features: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Marketing",
      "Email Campaigns",
    ],
  },
  {
    icon: <FaBug className="text-3xl text-[#D4AF37] dark:text-[#FFD700]" />,
    title: "Software Testing",
    description:
      "Comprehensive quality assurance and testing services to ensure your applications are reliable and bug-free.",
    features: [
      "Manual Testing",
      "Automated Testing",
      "Performance Testing",
      "Security Testing",
    ],
  },
  {
    icon: <FaUsersCog className="text-3xl text-[#0A2647] dark:text-[#D4AF37]" />,
    title: "CRM Apps",
    description:
      "Custom CRM solutions that help you manage relationships, track leads, and drive sales growth.",
    features: [
      "Lead Management",
      "Sales Pipeline",
      "Customer Analytics",
      "Integration Ready",
    ],
  },
  {
    icon: <FaCogs className="text-3xl text-[#0F5132] dark:text-[#6FCF97]" />,
    title: "ERP & HRM Solutions",
    description:
      "Enterprise resource planning and human resource management systems built for operational excellence.",
    features: [
      "Resource Planning",
      "Employee Management",
      "Payroll Integration",
      "Performance Tracking",
    ],
  },
  {
    icon: <FaChartLine className="text-3xl text-[#7F1D1D] dark:text-[#F28B82]" />,
    title: "Custom Apps",
    description:
      "Tailor-made applications designed to solve your unique business challenges and workflows.",
    features: [
      "Custom Workflows",
      "Scalable Architecture",
      "Secure Data Handling",
      "Ongoing Support",
    ],
  },
  {
    icon: <FaVideo className="text-3xl text-[#D4AF37] dark:text-[#FFD700]" />,
    title: "Video Editing",
    description:
      "High-quality video content designed to improve engagement and brand presence.",
    features: [
      "Reels Editing",
      "Promotional Videos",
      "YouTube Content",
      "Ad Creatives",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business goals, audience, and project requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We create a clear strategy and structure before starting the project.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Our team designs and develops a polished solution tailored to your brand.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deliver, optimize, and help you establish a stronger digital presence.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const clientLogos = [
  "Krishnan Textiles",
  "Bloom & Co.",
  "Faisal Logistics",
  "Vista Realty",
  "Coral Cafe",
  "NovaTech Labs",
];

const testimonials = [
  {
    quote:
      "Growth Aura redesigned our website from scratch and the difference in how customers perceive us has been night and day. The team was responsive, professional, and genuinely cared about our business goals.",
    name: "Arvind Krishnan",
    role: "Founder, Krishnan Textiles",
  },
  {
    quote:
      "We came to them for social media creatives and ended up redoing our entire brand identity. Every asset feels premium and consistent now. Highly recommend for any business serious about its image.",
    name: "Priya Ramesh",
    role: "Marketing Lead, Bloom & Co.",
  },
  {
    quote:
      "The UI/UX work they did on our app completely changed how users interact with it. Drop-off rates went down and we started getting compliments on the design within days of launch.",
    name: "Mohammed Faisal",
    role: "Co-founder, Faisal Logistics",
  },
];

const guarantees = [
  {
    icon: <FaShieldAlt />,
    title: "Transparent Pricing",
    description:
      "No hidden costs. You know exactly what you're paying for before we begin.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    description:
      "We agree on a timeline upfront and stick to it, with regular progress updates.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Revisions Included",
    description:
      "Every project includes rounds of revisions so the final result truly fits your vision.",
  },
  {
    icon: <FaComments />,
    title: "Direct Communication",
    description:
      "Work directly with the people building your project, not a faceless support queue.",
  },
];

const TermsSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev: number[]) =>
      prev.includes(index)
        ? prev.filter((i: number) => i !== index)
        : [...prev, index]
    );
  };

  const termsData = [
    {
      title: "Payment Terms",
      items: [
        "A minimum advance payment of 50% is required before the commencement of any project.",
        "The remaining balance must be paid upon project completion and before the final delivery, deployment, or transfer of files.",
        "Any additional work or revisions beyond the agreed scope will be charged separately and require client approval.",
        "All payments made are non-refundable once the project has commenced.",
      ],
    },
    {
      title: "Client Responsibilities",
      items: [
        "The client is responsible for providing all required content, images, credentials, and approvals on time to avoid project delays.",
        "Project timelines are estimates and may be affected by delays in client feedback, approvals, or content submission.",
        "Website maintenance, hosting, domain renewal, advertising spend, and third-party software subscriptions are not included unless specifically mentioned in the proposal.",
      ],
    },
    {
      title: "Project & Delivery",
      items: [
        "Growth Aura Digital reserves the right to pause or reschedule projects if payments are delayed.",
        "Ownership of final deliverables will be transferred to the client only after full payment has been received.",
        "Growth Aura Digital reserves the right to showcase completed work in its portfolio, website, and marketing materials unless otherwise agreed in writing.",
      ],
    },
    {
      title: "Disclaimer & Liability",
      items: [
        "Digital marketing results may vary depending on market conditions, competition, audience behavior, and advertising budgets. Specific results cannot be guaranteed.",
        "Growth Aura Digital shall not be liable for any indirect, incidental, or consequential losses arising from the use of delivered services.",
        "By making payment and approving the proposal, the client agrees to these terms and conditions.",
      ],
    },
  ];

  return (
    <div className="space-y-4">
      {termsData.map((section, idx: number) => (
        <div
          key={idx}
          className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggleItem(idx)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
          >
            <h3 className="font-heading text-lg font-bold text-[#0A2647] dark:text-white">
              {section.title}
            </h3>
            {openItems.includes(idx) ? (
              <FaChevronUp className="text-[#0F5132] dark:text-[#6FCF97]" />
            ) : (
              <FaChevronDown className="text-[#0F5132] dark:text-[#6FCF97]" />
            )}
          </button>
          {openItems.includes(idx) && (
            <div className="px-6 pb-6 space-y-3">
              {section.items.map((item: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 flex-shrink-0 text-[#0F5132] dark:text-[#6FCF97] text-sm" />
                  <p className="text-slate-700 dark:text-slate-300 leading-6">{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const PrivacySection = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prev: number[]) =>
      prev.includes(index)
        ? prev.filter((i: number) => i !== index)
        : [...prev, index]
    );
  };

  const privacyData = [
    {
      title: "Information We Collect",
      icon: <FaDatabase />,
      items: [
        "Name",
        "Email Address",
        "Phone Number",
        "Business Information",
        "Project Requirements",
        "Payment Information",
        "Website Usage Data",
      ],
    },
    {
      title: "How We Use Your Information",
      icon: <FaShareAlt />,
      items: [
        "Provide and manage our services",
        "Communicate regarding projects and inquiries",
        "Process payments and invoices",
        "Improve our website and services",
        "Send important updates and notifications",
      ],
    },
    {
      title: "Information Sharing & Data Security",
      icon: <FaLock />,
      items: [
        "Growth Aura Digital does not sell, rent, or trade personal information to third parties.",
        "Information may only be shared with trusted service providers when necessary to deliver our services.",
        "We implement reasonable security measures to protect client and user information from unauthorized access, disclosure, or misuse.",
      ],
    },
    {
      title: "Cookies & Third-Party Services",
      icon: <FaCookie />,
      items: [
        "Our website may use cookies and similar technologies to improve user experience and analyze website performance.",
        "Our services may involve third-party platforms such as hosting providers, payment gateways, analytics tools, advertising platforms, and social media networks.",
        "We are not responsible for the privacy practices of these third parties.",
      ],
    },
    {
      title: "Client Confidentiality & Your Rights",
      icon: <FaDatabase />,
      items: [
        "All project-related information, business data, and materials shared with Growth Aura Digital will be treated as confidential and used solely for project purposes.",
        "You may request access to, correction of, or deletion of your personal information by contacting us.",
      ],
    },
  ];

  return (
    <div className="space-y-4">
      {privacyData.map((section, idx: number) => (
        <div
          key={idx}
          className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggleSection(idx)}
            className="w-full px-6 py-4 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
          >
            <span className="text-2xl text-[#0F5132] dark:text-[#6FCF97]">{section.icon}</span>
            <span className="flex-1 text-left font-heading text-lg font-bold text-[#0A2647] dark:text-white">
              {section.title}
            </span>
            {openSections.includes(idx) ? (
              <FaChevronUp className="text-[#0F5132] dark:text-[#6FCF97]" />
            ) : (
              <FaChevronDown className="text-[#0F5132] dark:text-[#6FCF97]" />
            )}
          </button>
          {openSections.includes(idx) && (
            <div className="px-6 pb-6 space-y-2">
              {section.items.map((item: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 flex-shrink-0 text-[#0F5132] dark:text-[#6FCF97] text-sm" />
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">("terms");

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-900">
      <Navbar />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF4FA] dark:from-slate-800 dark:via-slate-800 dark:to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,81,50,0.10),transparent_26%),radial-gradient(circle_at_center,rgba(10,38,71,0.06),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,81,50,0.06),transparent_26%),radial-gradient(circle_at_center,rgba(10,38,71,0.04),transparent_34%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-[#D4AF37]/30 dark:border-[#D4AF37]/20 bg-white dark:bg-slate-800 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-[#0A2647] dark:text-[#D4AF37] shadow-sm">
                OUR SERVICES
              </span>

              <h1 className="font-heading mt-6 text-5xl font-extrabold leading-tight text-[#0A2647] dark:text-white lg:text-6xl">
                Digital solutions built
                <span className="block text-[#0F5132] dark:text-[#6FCF97]">
                  for modern businesses
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                We help businesses create stronger digital experiences through
                premium websites, creative design, modern UI/UX, and engaging
                content that builds trust and drives growth.
              </p>
            </div>

            {/* TRUST STATS */}
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-slate-200 dark:border-slate-700 pt-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-extrabold text-[#0A2647] dark:text-white lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUSTED BY */}
        <section className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold tracking-[0.3em] text-slate-500 dark:text-slate-400">
              TRUSTED BY GROWING BUSINESSES
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {clientLogos.map((name) => (
                <span
                  key={name}
                  className="text-base font-bold text-[#0A2647]/40 dark:text-white/40"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="bg-white dark:bg-slate-800 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-[#F8FAFC] dark:bg-slate-800/50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-slate-700/30"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-slate-700 shadow-sm">
                    {service.icon}
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-slate-600 dark:text-slate-300 leading-8">
                    {service.description}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <FaCheckCircle className="text-[#0F5132] dark:text-[#6FCF97]" />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="border-t border-slate-200 dark:border-slate-700 bg-[#F8FAFC] dark:bg-slate-900 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132] dark:text-[#6FCF97]">
                WHY CHOOSE GROWTH AURA
              </p>

              <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647] dark:text-white">
                Built for businesses that want a stronger digital presence
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <FaMobileAlt />,
                  title: "Responsive Design",
                },
                {
                  icon: <FaSearch />,
                  title: "SEO Ready Structure",
                },
                {
                  icon: <FaBullhorn />,
                  title: "Brand Visibility",
                },
                {
                  icon: <FaCode />,
                  title: "Modern Development",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm"
                >
                  <div className="mb-4 text-2xl text-[#0F5132] dark:text-[#6FCF97]">
                    {item.icon}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white dark:bg-slate-800 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132] dark:text-[#6FCF97]">
                OUR PROCESS
              </p>

              <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647] dark:text-white">
                From idea to execution
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-[#F8FAFC] dark:bg-slate-800/50 p-6"
                >
                  <span className="text-lg font-bold text-[#D4AF37] dark:text-[#FFD700]">
                    {item.number}
                  </span>

                  <h3 className="font-heading mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="border-t border-slate-200 dark:border-slate-700 bg-[#F8FAFC] dark:bg-slate-900 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132] dark:text-[#6FCF97]">
                CLIENT STORIES
              </p>

              <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647] dark:text-white">
                What clients say about working with us
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-7 shadow-sm"
                >
                  <div>
                    <FaQuoteLeft className="text-2xl text-[#D4AF37]/40 dark:text-[#FFD700]/30" />
                    <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
                      {t.quote}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-slate-200 dark:border-slate-700 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2647]/10 dark:bg-slate-600 font-heading font-bold text-[#0A2647] dark:text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GUARANTEES */}
        <section className="bg-white dark:bg-slate-800 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132] dark:text-[#6FCF97]">
                OUR PROMISE
              </p>

              <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647] dark:text-white">
                Working with us is simple and predictable
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {guarantees.map((g) => (
                <div
                  key={g.title}
                  className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-[#F8FAFC] dark:bg-slate-800/50 p-6"
                >
                  <div className="mb-4 text-2xl text-[#0F5132] dark:text-[#6FCF97]">{g.icon}</div>

                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                    {g.title}
                  </h3>

                  <p className="mt-3 text-slate-600 dark:text-slate-300 leading-7">
                    {g.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEGAL DOCUMENTS - Terms & Privacy with Tabs */}
        <section className="border-t border-slate-200 dark:border-slate-700 bg-[#F8FAFC] dark:bg-slate-900 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <FaFileContract className="text-3xl text-[#0F5132] dark:text-[#6FCF97]" />
                <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132] dark:text-[#6FCF97]">
                  LEGAL
                </p>
              </div>

              <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647] dark:text-white">
                Terms & Privacy
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-8">
                Our commitment to transparency and protecting your rights.
                Choose a section below to learn more.
              </p>
            </div>

            {/* Tabs */}
            <div className="mt-8 flex flex-wrap gap-3 border-b border-slate-200 dark:border-slate-700 pb-0">
              <button
                onClick={() => setActiveTab("terms")}
                className={`px-6 py-3 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                  activeTab === "terms"
                    ? "bg-[#0F5132] dark:bg-[#0F5132] text-white shadow-lg"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                <span className="flex items-center gap-2">
                  <FaFileContract />
                  Terms & Conditions
                </span>
              </button>
              <button
                onClick={() => setActiveTab("privacy")}
                className={`px-6 py-3 font-semibold text-sm transition-all duration-200 rounded-t-lg ${
                  activeTab === "privacy"
                    ? "bg-[#0F5132] dark:bg-[#0F5132] text-white shadow-lg"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                <span className="flex items-center gap-2">
                  <FaLock />
                  Privacy Policy
                </span>
              </button>
            </div>

            {/* Content */}
            <div className="mt-8">
              {activeTab === "terms" ? <TermsSection /> : <PrivacySection />}
            </div>

            {/* Effective Date */}
            <div className="mt-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
              <p className="text-center text-sm text-slate-600 dark:text-slate-300">
                <span className="font-semibold">Effective Date:</span> January 1,
                2025 • Growth Aura Digital reserves the right to update these
                documents at any time. Changes will be posted on our website.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 dark:border-slate-700 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-slate-800 dark:to-slate-900 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-10 shadow-sm lg:p-14">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132] dark:text-[#6FCF97]">
                    LET'S WORK TOGETHER
                  </p>

                  <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647] dark:text-white">
                    Ready to elevate your brand?
                  </h2>

                  <p className="mt-4 text-slate-600 dark:text-slate-300 leading-8">
                    Whether you need a website, branding, design support, or
                    digital content, Growth Aura can help you create a stronger
                    online presence.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F5132] dark:bg-[#0F5132] px-7 py-4 text-white font-semibold transition hover:scale-105"
                  >
                    Start Your Project
                    <FaArrowRight size={12} />
                  </Link>

                  <Link
                    to="/portfolio"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-7 py-4 font-semibold text-[#0A2647] dark:text-white"
                  >
                    View Portfolio
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

export default Services;