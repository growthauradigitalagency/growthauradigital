import { useState } from "react";
import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaPalette,
  FaBullhorn,
  FaVideo,
  FaPython,
  FaLaptopCode,
  FaArrowRight,
  FaCheckCircle,
  FaChevronDown,
  FaClock,
  FaLayerGroup,
  FaCertificate,
  FaBriefcase,
  FaFilePdf,
  FaDownload,
  FaSpinner,
} from "react-icons/fa";

// Import PDF files - make sure these files exist in your src/assets/brochures/ folder
// If they don't exist, create placeholder PDFs or use the fallback approach below
import mernBrochure from "../assets/brochures/mern-stack-brochure.pdf";
import uiuxBrochure from "../assets/brochures/ui-ux-brochure.pdf";
import graphicBrochure from "../assets/brochures/graphic-design-brochure.pdf";
import webBrochure from "../assets/brochures/web-dev-brochure.pdf";
import digitalBrochure from "../assets/brochures/digital-marketing-brochure.pdf";
import videoBrochure from "../assets/brochures/video-editing-brochure.pdf";
import aiBrochure from "../assets/brochures/ai-python-brochure.pdf";
import pythonBrochure from "../assets/brochures/ai-python-brochure.pdf";
import testingBrochure from "../assets/brochures/software-testing-brochure.pdf";

type CourseItem = {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  duration: string;
  level: string;
  highlights: string[];
  outcome: string;
  brochurePath?: string;
  hasBrochure?: boolean;
};

const courses: CourseItem[] = [
  {
    title: "MERN Stack Development",
    icon: <FaLaptopCode />,
    color: "text-[#0A2647] dark:text-sky-300",
    description:
      "Build modern full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    duration: "3 Months",
    level: "Beginner to Advanced",
    highlights: [
      "Build REST APIs with Node.js & Express",
      "Database design with MongoDB",
      "Frontend development with React",
      "Authentication, deployment & real projects",
    ],
    outcome:
      "By the end of this course, you'll be able to design, build, and deploy full-stack web applications on your own.",
    brochurePath: mernBrochure,
    hasBrochure: true,
  },
  {
    title: "UI/UX Design",
    icon: <FaPalette />,
    color: "text-[#0F5132] dark:text-emerald-300",
    description:
      "Learn wireframing, user research, prototyping, and modern design systems.",
    duration: "2 Months",
    level: "Beginner Friendly",
    highlights: [
      "User research & persona building",
      "Wireframing & prototyping in Figma",
      "Design systems & component libraries",
      "Usability testing & design handoff",
    ],
    outcome:
      "You'll graduate with a portfolio of polished UI/UX case studies ready to show clients or employers.",
    brochurePath: uiuxBrochure,
    hasBrochure: true,
  },
  {
    title: "Graphic Design",
    icon: <FaPalette />,
    color: "text-[#7F1D1D] dark:text-rose-300",
    description:
      "Master branding, social media design, posters, and professional creative assets.",
    duration: "2 Months",
    level: "Beginner Friendly",
    highlights: [
      "Brand identity & logo design",
      "Social media creatives & ad banners",
      "Typography, color theory & layout",
      "Adobe Photoshop & Illustrator workflows",
    ],
    outcome:
      "You'll be able to design professional brand assets and marketing creatives for real clients.",
    brochurePath: graphicBrochure,
    hasBrochure: true,
  },
  {
    title: "Web Development",
    icon: <FaCode />,
    color: "text-[#D4AF37] dark:text-amber-300",
    description:
      "Learn HTML, CSS, JavaScript, responsive layouts, and modern frontend development.",
    duration: "2.5 Months",
    level: "Beginner to Intermediate",
    highlights: [
      "HTML5, CSS3 & modern layout techniques",
      "JavaScript fundamentals & DOM manipulation",
      "Responsive, mobile-first design",
      "Hands-on website building projects",
    ],
    outcome:
      "You'll be able to build and style fully responsive websites from scratch.",
    brochurePath: webBrochure,
    hasBrochure: true,
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    color: "text-[#0F5132] dark:text-emerald-300",
    description:
      "SEO, social media marketing, content marketing, paid advertising, and branding.",
    duration: "2 Months",
    level: "Beginner Friendly",
    highlights: [
      "SEO fundamentals & keyword research",
      "Social media strategy & content calendars",
      "Paid ads on Meta & Google",
      "Analytics, reporting & campaign optimization",
    ],
    outcome:
      "You'll be ready to plan and run digital marketing campaigns for businesses or freelance clients.",
    brochurePath: digitalBrochure,
    hasBrochure: true,
  },
  {
    title: "Video Editing",
    icon: <FaVideo />,
    color: "text-[#7F1D1D] dark:text-rose-300",
    description:
      "Create professional reels, ads, YouTube videos, and cinematic content.",
    duration: "1.5 Months",
    level: "Beginner Friendly",
    highlights: [
      "Editing fundamentals in Premiere Pro / CapCut",
      "Color grading & sound design",
      "Reels, shorts & ad creatives",
      "Storytelling & pacing for engagement",
    ],
    outcome:
      "You'll be able to edit polished, scroll-stopping videos for social media and YouTube.",
    brochurePath: videoBrochure,
    hasBrochure: true,
  },
  {
    title: "AI Integration Using Python",
    icon: <FaPython />,
    color: "text-[#0A2647] dark:text-sky-300",
    description:
      "Build AI-powered applications using Python, APIs, automation, and AI tools.",
    duration: "1.5 Months",
    level: "Intermediate",
    highlights: [
      "Working with AI APIs (OpenAI, Claude, etc.)",
      "Building chatbots & automation tools",
      "Prompt engineering basics",
      "Integrating AI into real applications",
    ],
    outcome:
      "You'll be able to add AI-powered features to your own apps and projects.",
    brochurePath: aiBrochure,
    hasBrochure: true,
  },
  {
    title: "Python Programming",
    icon: <FaPython />,
    color: "text-[#D4AF37] dark:text-amber-300",
    description:
      "Learn Python fundamentals, OOP, automation, APIs, and real-world projects.",
    duration: "2 Months",
    level: "Beginner Friendly",
    highlights: [
      "Python syntax & core programming concepts",
      "Object-oriented programming",
      "Working with APIs & automation scripts",
      "Mini projects to apply your skills",
    ],
    outcome:
      "You'll build a strong programming foundation and be ready to explore web, data, or AI tracks.",
    brochurePath: pythonBrochure,
    hasBrochure: true,
  },
  {
    title: "Software Testing",
    icon: <FaCheckCircle />,
    color: "text-[#0F5132] dark:text-emerald-300",
    description:
      "Understand manual testing, automation testing, QA processes, and industry practices.",
    duration: "1.5 Months",
    level: "Beginner Friendly",
    highlights: [
      "Manual testing fundamentals & test cases",
      "Bug tracking & QA workflows",
      "Intro to automation testing tools",
      "Real-world QA project practice",
    ],
    outcome:
      "You'll understand professional QA workflows and be ready for entry-level testing roles.",
    brochurePath: testingBrochure,
    hasBrochure: true,
  },
  {
    title: "Internship Program",
    icon: <FaBriefcase />,
    color: "text-[#0A2647] dark:text-sky-300",
    description:
      "Gain practical experience by working on real tasks, guided by mentor support and review.",
    duration: "1 to 3 Months",
    level: "For Students & Beginners",
    highlights: [
      "Work on real-world tasks and assignments",
      "Mentor-guided learning and feedback",
      "Improve communication and teamwork skills",
      "Build confidence for job applications",
    ],
    outcome:
      "You'll complete an industry-style internship experience and gain practical exposure for your portfolio and resume.",
    hasBrochure: false,
  },
  {
    title: "Final Year Projects",
    icon: <FaCertificate />,
    color: "text-[#7F1D1D] dark:text-rose-300",
    description:
      "Get full support to build impressive final year projects with documentation and deployment help.",
    duration: "Project Based",
    level: "College Students",
    highlights: [
      "Project idea selection and planning",
      "Full-stack development support",
      "Report, synopsis, and documentation guidance",
      "Deployment and presentation preparation",
    ],
    outcome:
      "You'll finish with a complete final year project that looks polished, practical, and ready to present.",
    hasBrochure: false,
  },
];

const Courses = () => {
  const [openCourse, setOpenCourse] = useState<string | null>(null);
  const [downloadingCourse, setDownloadingCourse] = useState<string | null>(null);

  const toggleCourse = (title: string) => {
    setOpenCourse((prev) => (prev === title ? null : title));
  };

  const handleDownloadBrochure = async (courseTitle: string, brochurePath?: string) => {
    if (!brochurePath) {
      alert(`Brochure for "${courseTitle}" is not available yet.`);
      return;
    }

    setDownloadingCourse(courseTitle);

    try {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = brochurePath;
      link.download = `${courseTitle.toLowerCase().replace(/ /g, '-')}-brochure.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => {
        setDownloadingCourse(null);
      }, 1000);
    } catch (error) {
      console.error('Error downloading brochure:', error);
      alert(`Unable to download brochure for "${courseTitle}". Please try again later.`);
      setDownloadingCourse(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF4FA] dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,81,50,0.10),transparent_26%),radial-gradient(circle_at_center,rgba(10,38,71,0.06),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_26%),radial-gradient(circle_at_center,rgba(56,189,248,0.05),transparent_34%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-white px-4 py-2 text-xs font-semibold tracking-[0.25em] text-[#0A2647] shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                GROWTH AURA ACADEMY
              </span>

              <h1 className="font-heading mt-6 text-5xl font-extrabold leading-tight text-[#0A2647] lg:text-6xl dark:text-slate-100">
                Learn. Build.
                <span className="block text-[#0F5132] dark:text-emerald-300">
                  Grow.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Industry-focused training programs designed to help students,
                freelancers, and professionals develop high-demand digital
                skills through live projects and hands-on practice.
              </p>
            </div>

            {/* STATS */}
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-slate-200 pt-10 sm:grid-cols-4 dark:border-slate-800">
              {[
                { value: "11+", label: "Professional Courses" },
                { value: "100%", label: "Practical Learning" },
                { value: "Live", label: "Project Training" },
                { value: "Career", label: "Focused Programs" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-extrabold text-[#0A2647] lg:text-4xl dark:text-slate-100">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section className="bg-white py-20 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132] dark:text-emerald-300">
                OUR COURSES
              </p>

              <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647] dark:text-slate-100">
                Explore Our Courses
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Gain practical knowledge through hands-on projects and
                real-world learning experiences, guided by mentors who work in
                the industry.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => {
                const isOpen = openCourse === course.title;
                const isDownloading = downloadingCourse === course.title;

                return (
                  <div
                    key={course.title}
                    className="group rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
                  >
                    <div
                      className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm dark:bg-slate-950 ${course.color}`}
                    >
                      {course.icon}
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {course.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                      {course.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-800 dark:bg-slate-950">
                        <FaClock className="text-[#D4AF37]" />
                        {course.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-800 dark:bg-slate-950">
                        <FaLayerGroup className="text-[#0F5132]" />
                        {course.level}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleCourse(course.title)}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0F5132] transition hover:opacity-80 dark:text-emerald-300"
                    >
                      {isOpen ? "Hide Details" : "Learn More"}
                      <FaChevronDown
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "mt-6 max-h-[700px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-slate-200 pt-5 dark:border-slate-800">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                          What You'll Learn
                        </p>

                        <div className="mt-3 grid gap-2">
                          {course.highlights.map((point) => (
                            <div key={point} className="flex items-start gap-3">
                              <FaCheckCircle className="mt-1 flex-shrink-0 text-[#0F5132] dark:text-emerald-300" />
                              <span className="text-sm text-slate-700 dark:text-slate-300">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>

                        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                          Outcome
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {course.outcome}
                        </p>

                        {course.hasBrochure && (
                          <button
                            onClick={() => handleDownloadBrochure(course.title, course.brochurePath)}
                            disabled={isDownloading}
                            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37] bg-white px-5 py-2.5 text-sm font-semibold text-[#0A2647] transition hover:bg-[#D4AF37]/10 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 dark:border-[#D4AF37]/60 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-[#D4AF37]/20"
                          >
                            {isDownloading ? (
                              <>
                                <FaSpinner className="animate-spin" />
                                Downloading...
                              </>
                            ) : (
                              <>
                                <FaFilePdf className="text-red-500" />
                                Download Brochure
                                <FaDownload size={12} />
                              </>
                            )}
                          </button>
                        )}

                        <Link
                          to="/contact"
                          className={`mt-${course.hasBrochure ? '3' : '4'} inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0A2647] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] dark:bg-sky-600 dark:text-white`}
                        >
                          Enroll for {course.title}
                          <FaArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY LEARN */}
        <section className="border-t border-slate-200 bg-[#F8FAFC] py-20 dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132] dark:text-emerald-300">
                WHY CHOOSE GROWTH AURA ACADEMY
              </p>

              <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647] dark:text-slate-100">
                Built for real learning, not just certificates
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <FaLayerGroup />,
                  title: "Live Projects",
                  description:
                    "Work on real assignments and projects, not just recorded tutorials.",
                },
                {
                  icon: <FaBullhorn />,
                  title: "Industry-Oriented Training",
                  description:
                    "Curriculum shaped around what businesses actually need today.",
                },
                {
                  icon: <FaCertificate />,
                  title: "Career Support",
                  description:
                    "Get project guidance, portfolio improvement, and interview prep support.",
                },
                {
                  icon: <FaBriefcase />,
                  title: "Practical Exposure",
                  description:
                    "Build experience through internships, final year projects, and mentorship.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:shadow-none"
                >
                  <div className="mb-4 text-2xl text-[#0F5132] dark:text-emerald-300">
                    {item.icon}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-r from-[#F8FAFC] to-white p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132] dark:text-emerald-300">
                    START LEARNING TODAY
                  </p>

                  <h2 className="font-heading mt-4 text-4xl font-bold text-[#0A2647] dark:text-slate-100">
                    Start your learning journey today
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                    Build practical skills, work on real projects, and prepare
                    yourself for future career opportunities with mentor-guided
                    training.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F5132] px-7 py-4 font-semibold text-white transition hover:scale-105 dark:bg-emerald-500"
                  >
                    Enroll Now
                    <FaArrowRight size={12} />
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-[#0A2647] transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
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

export default Courses;