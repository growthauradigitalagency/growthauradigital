import { useState, type ChangeEvent, type FormEvent } from "react";
import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaGraduationCap,
  FaBriefcase,
  FaSpinner,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

// =====================================================================
// EMAILJS CONFIG — REPLACE THESE 3 VALUES WITH YOUR OWN FROM
// https://dashboard.emailjs.com  (Email Services / Email Templates / Account)
// =====================================================================
const EMAILJS_SERVICE_ID = "service_v3kcrru";   // <-- your Service ID
const EMAILJS_TEMPLATE_ID = "template_npkh5ex"; // <-- your Template ID
const EMAILJS_PUBLIC_KEY = "-mnz3E3Y8i3mVoARb";    // <-- your Public Key
// =====================================================================

// All courses from the Courses page
const allCourses = [
  "MERN Stack Development",
  "UI/UX Design",
  "Graphic Design",
  "Web Development",
  "Digital Marketing",
  "Video Editing",
  "AI Engineering",
  "AI Integration Using Python",
  "Python Programming",
  "Business Analyst",
  "Core Java",
  "ETL Testing",
  "Tally / Tally Prime",
  "DevOps Engineering",
  "Database Engineering",
  "Software Testing",
  "Internship Program",
  "Final Year Projects",
];

// All services from the Services page
const allServices = [
  "Web Development",
  "Mobile App Development",
  "Cloud Driven Innovation",
  "Intelligent SaaS Solutions",
  "UI/UX Design",
  "Graphic Design",
  "Digital Marketing",
  "Software Testing",
  "CRM Apps",
  "ERP & HRM Solutions",
  "Custom Apps",
  "Video Editing",
];

const faqs = [
  {
    q: "How do I book a consultation?",
    a: "Fill the consultation booking form below with your preferred date, time, and service requirement. We will contact you to confirm the slot.",
  },
  {
    q: "Can I ask about a course here?",
    a: "Yes. Use the course enquiry form to ask about course details, training mode, or batch information.",
  },
  {
    q: "Do you work with businesses and students?",
    a: "Yes. We handle both agency services and training/course enquiries.",
  },
];

type CourseFormState = {
  fullName: string;
  phoneNumber: string;
  email: string;
  preferredCourse: string;
  learningMode: string;
  experienceLevel: string;
  message: string;
};

type ConsultationFormState = {
  fullName: string;
  businessName: string;
  serviceNeeded: string;
  phoneNumber: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

const initialCourseForm: CourseFormState = {
  fullName: "",
  phoneNumber: "",
  email: "",
  preferredCourse: "",
  learningMode: "Offline",
  experienceLevel: "Beginner",
  message: "",
};

const initialConsultationForm: ConsultationFormState = {
  fullName: "",
  businessName: "",
  serviceNeeded: "",
  phoneNumber: "",
  email: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

function AccordionItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-200 last:border-b-0 dark:border-slate-800">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-heading text-[17px] font-bold text-slate-900 dark:text-slate-100">
          {q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-lg text-[#0F5132] transition-transform duration-300 dark:border-slate-700 dark:text-emerald-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [courseForm, setCourseForm] =
    useState<CourseFormState>(initialCourseForm);
  const [consultationForm, setConsultationForm] =
    useState<ConsultationFormState>(initialConsultationForm);

  const [submittingCourse, setSubmittingCourse] = useState(false);
  const [submittingConsultation, setSubmittingConsultation] = useState(false);

  const handleCourseChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCourseForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleConsultationChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setConsultationForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCourseSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!courseForm.fullName || !courseForm.phoneNumber || !courseForm.preferredCourse) {
      alert("⚠️ Please fill all required fields.");
      return;
    }

    try {
      setSubmittingCourse(true);

      const emailData = {
        to_email: "growthauradigitalagency@gmail.com",
        from_name: courseForm.fullName,
        from_email: courseForm.email || "Not provided",
        phone: courseForm.phoneNumber,
        subject: `Course Enquiry: ${courseForm.preferredCourse}`,
        course: courseForm.preferredCourse,
        business: "N/A",
        learning_mode: courseForm.learningMode,
        experience_level: courseForm.experienceLevel,
        preferred_date: "N/A",
        preferred_time: "N/A",
        message: courseForm.message || "No additional message",
        type: "Course Enquiry",
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailData,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        alert("✅ Course enquiry sent successfully! We'll get back to you soon.");
        setCourseForm(initialCourseForm);
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Course submit error:", error);
      alert("❌ Failed to send course enquiry. Please check your internet connection and try again.");
    } finally {
      setSubmittingCourse(false);
    }
  };

  const handleConsultationSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !consultationForm.fullName ||
      !consultationForm.businessName ||
      !consultationForm.serviceNeeded ||
      !consultationForm.phoneNumber
    ) {
      alert("⚠️ Please fill all required fields.");
      return;
    }

    try {
      setSubmittingConsultation(true);

      const emailData = {
        to_email: "growthauradigitalagency@gmail.com",
        from_name: consultationForm.fullName,
        from_email: consultationForm.email || "Not provided",
        phone: consultationForm.phoneNumber,
        business: consultationForm.businessName,
        subject: `Consultation Booking: ${consultationForm.serviceNeeded}`,
        course: "N/A",
        service: consultationForm.serviceNeeded,
        learning_mode: "N/A",
        experience_level: "N/A",
        preferred_date: consultationForm.preferredDate || "Not specified",
        preferred_time: consultationForm.preferredTime || "Not specified",
        message: consultationForm.message || "No additional message",
        type: "Consultation Booking",
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailData,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        alert("✅ Consultation booked successfully! We'll contact you shortly.");
        setConsultationForm(initialConsultationForm);
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Consultation submit error:", error);
      alert("❌ Failed to book consultation. Please check your internet connection and try again.");
    } finally {
      setSubmittingConsultation(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF4FA] dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,81,50,0.10),transparent_26%),radial-gradient(circle_at_center,rgba(10,38,71,0.06),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_26%),radial-gradient(circle_at_center,rgba(56,189,248,0.05),transparent_34%)]" />
          <div className="absolute left-0 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <div className="absolute right-0 top-28 h-64 w-64 rounded-full bg-[#0F5132]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-white px-4 py-2 text-xs font-semibold tracking-[0.25em] text-[#0A2647] shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                CONTACT GROWTH AURA
              </span>

              <h1 className="font-heading mt-6 text-4xl font-extrabold leading-tight text-[#0A2647] sm:text-5xl lg:text-6xl dark:text-slate-100">
                Let's talk about your
                <span className="block text-[#0F5132] dark:text-emerald-300">
                  next project or course
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Whether you need website development, branding, UI/UX design,
                video editing, or training course details, Growth Aura is ready
                to help you create something premium.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F5132] px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-emerald-900/15 transition-transform duration-300 hover:scale-[1.03]"
                >
                  Book Consultation
                  <FaArrowRight size={12} />
                </a>

                <a
                  href="#course-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0A2647]/15 bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0A2647] shadow-sm transition hover:border-[#D4AF37]/40 hover:text-[#0F5132] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-emerald-400/40 dark:hover:text-emerald-300"
                >
                  Course Enquiry
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK CONTACT INFO */}
        <section className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <a
                href="tel:+91 8124229945"
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm dark:bg-slate-950">
                  <FaPhoneAlt className="text-[#0F5132]" />
                </div>
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  PHONE
                </p>
                <p className="mt-2 text-lg font-bold text-[#0A2647] dark:text-slate-100">
                  +91 8124229945
                </p>
              </a>

              <a
                href="mailto:growthauradigitalagency@gmail.com"
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm dark:bg-slate-950">
                  <FaEnvelope className="text-[#0A2647]" />
                </div>
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  EMAIL
                </p>
                <p className="mt-2 text-lg font-bold text-[#0A2647] dark:text-slate-100">
                  growthauradigital
                  agency@gmail.com
                </p>
              </a>

              <a
                href="https://instagram.com/growthauradigital"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm dark:bg-slate-950">
                  <FaInstagram className="text-[#7F1D1D]" />
                </div>
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  INSTAGRAM
                </p>
                <p className="mt-2 text-lg font-bold text-[#0A2647] dark:text-slate-100">
                  @growthauradigital
                </p>
              </a>

              <a
                href="https://facebook.com/growthaura.digitalagency"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm dark:bg-slate-950">
                  <FaFacebookF className="text-[#0A2647]" />
                </div>
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  FACEBOOK
                </p>
                <p className="mt-2 text-lg font-bold text-[#0A2647] dark:text-slate-100">
                  Growth Aura Digital Agency
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* FORMS SECTION */}
        <section className="border-t border-slate-200 bg-[#F8FAFC] dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* COURSE FORM */}
              <div
                id="course-form"
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F5132]/10">
                    <FaGraduationCap className="text-[#0F5132]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-[0.25em] text-[#0F5132] dark:text-emerald-300">
                      COURSE ENQUIRY
                    </p>
                    <h2 className="font-heading text-2xl font-bold text-[#0A2647] dark:text-slate-100">
                      Ask about our courses
                    </h2>
                  </div>
                </div>

                <form className="grid gap-5" onSubmit={handleCourseSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        name="fullName"
                        type="text"
                        value={courseForm.fullName}
                        onChange={handleCourseChange}
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0F5132] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Phone Number *
                      </label>
                      <input
                        name="phoneNumber"
                        type="tel"
                        value={courseForm.phoneNumber}
                        onChange={handleCourseChange}
                        placeholder="+91 8124229945"
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0F5132] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={courseForm.email}
                        onChange={handleCourseChange}
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0F5132] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Preferred Course *
                      </label>
                      <select
                        name="preferredCourse"
                        value={courseForm.preferredCourse}
                        onChange={handleCourseChange}
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0F5132] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                        required
                      >
                        <option value="">Select a course</option>
                        <optgroup label="Development & Programming">
                          {allCourses
                            .filter(
                              (course) =>
                                course === "MERN Stack Development" ||
                                course === "Web Development" ||
                                course === "Python Programming" ||
                                course === "Core Java" ||
                                course === "Database Engineering"
                            )
                            .map((course) => (
                              <option key={course} value={course}>
                                {course}
                              </option>
                            ))}
                        </optgroup>
                        <optgroup label="Design & Creative">
                          {allCourses
                            .filter(
                              (course) =>
                                course === "UI/UX Design" ||
                                course === "Graphic Design" ||
                                course === "Video Editing"
                            )
                            .map((course) => (
                              <option key={course} value={course}>
                                {course}
                              </option>
                            ))}
                        </optgroup>
                        <optgroup label="AI & Data">
                          {allCourses
                            .filter(
                              (course) =>
                                course === "AI Engineering" ||
                                course === "AI Integration Using Python" ||
                                course === "ETL Testing" ||
                                course === "Business Analyst"
                            )
                            .map((course) => (
                              <option key={course} value={course}>
                                {course}
                              </option>
                            ))}
                        </optgroup>
                        <optgroup label="Business & DevOps">
                          {allCourses
                            .filter(
                              (course) =>
                                course === "Digital Marketing" ||
                                course === "Tally / Tally Prime" ||
                                course === "DevOps Engineering" ||
                                course === "Software Testing"
                            )
                            .map((course) => (
                              <option key={course} value={course}>
                                {course}
                              </option>
                            ))}
                        </optgroup>
                        <optgroup label="Programs">
                          {allCourses
                            .filter(
                              (course) =>
                                course === "Internship Program" ||
                                course === "Final Year Projects"
                            )
                            .map((course) => (
                              <option key={course} value={course}>
                                {course}
                              </option>
                            ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Learning Mode
                      </label>
                      <select
                        name="learningMode"
                        value={courseForm.learningMode}
                        onChange={handleCourseChange}
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0F5132] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      >
                        <option>Offline</option>
                        <option>Online</option>
                        <option>Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Experience Level
                      </label>
                      <select
                        name="experienceLevel"
                        value={courseForm.experienceLevel}
                        onChange={handleCourseChange}
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0F5132] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      >
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={courseForm.message}
                      onChange={handleCourseChange}
                      placeholder="Tell us what you want to learn..."
                      className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0F5132] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submittingCourse}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F5132] px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-900/15 transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submittingCourse ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Course Enquiry
                        <FaArrowRight size={12} />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* CONSULTATION BOOKING */}
              <div
                id="consultation"
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2647]/10">
                    <FaBriefcase className="text-[#0A2647]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-[0.25em] text-[#0A2647] dark:text-sky-300">
                      CONSULTATION BOOKING
                    </p>
                    <h2 className="font-heading text-2xl font-bold text-[#0A2647] dark:text-slate-100">
                      Book a free consultation
                    </h2>
                  </div>
                </div>

                <form className="grid gap-5" onSubmit={handleConsultationSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        name="fullName"
                        type="text"
                        value={consultationForm.fullName}
                        onChange={handleConsultationChange}
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0A2647] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Business / Company *
                      </label>
                      <input
                        name="businessName"
                        type="text"
                        value={consultationForm.businessName}
                        onChange={handleConsultationChange}
                        placeholder="Your business name"
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0A2647] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Service Needed *
                      </label>
                      <select
                        name="serviceNeeded"
                        value={consultationForm.serviceNeeded}
                        onChange={handleConsultationChange}
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0A2647] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                        required
                      >
                        <option value="">Select a service</option>
                        <optgroup label="Development Services">
                          {allServices
                            .filter(
                              (service) =>
                                service === "Web Development" ||
                                service === "Mobile App Development" ||
                                service === "Cloud Driven Innovation" ||
                                service === "Intelligent SaaS Solutions" ||
                                service === "Custom Apps"
                            )
                            .map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                        </optgroup>
                        <optgroup label="Design & Creative">
                          {allServices
                            .filter(
                              (service) =>
                                service === "UI/UX Design" ||
                                service === "Graphic Design" ||
                                service === "Video Editing"
                            )
                            .map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                        </optgroup>
                        <optgroup label="Business & Marketing">
                          {allServices
                            .filter(
                              (service) =>
                                service === "Digital Marketing" ||
                                service === "CRM Apps" ||
                                service === "ERP & HRM Solutions"
                            )
                            .map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                        </optgroup>
                        <optgroup label="Quality & Testing">
                          {allServices
                            .filter(
                              (service) => service === "Software Testing"
                            )
                            .map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                        </optgroup>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Phone Number *
                      </label>
                      <input
                        name="phoneNumber"
                        type="tel"
                        value={consultationForm.phoneNumber}
                        onChange={handleConsultationChange}
                        placeholder="+91 8124229945"
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0A2647] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={consultationForm.email}
                        onChange={handleConsultationChange}
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0A2647] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Preferred Date
                      </label>
                      <input
                        name="preferredDate"
                        type="date"
                        value={consultationForm.preferredDate}
                        onChange={handleConsultationChange}
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0A2647] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Preferred Time
                      </label>
                      <input
                        name="preferredTime"
                        type="time"
                        value={consultationForm.preferredTime}
                        onChange={handleConsultationChange}
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0A2647] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={consultationForm.message}
                      onChange={handleConsultationChange}
                      placeholder="Tell us about your project, goals, and expectations..."
                      className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 outline-none transition focus:border-[#0A2647] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submittingConsultation}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A2647] px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/15 transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-sky-600"
                  >
                    {submittingConsultation ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Booking...
                      </>
                    ) : (
                      <>
                        Book Consultation
                        <FaCalendarAlt size={12} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT METHODS */}
        <section className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <FaWhatsapp className="text-3xl text-[#0F5132]" />
                <h3 className="font-heading mt-4 text-2xl font-bold text-[#0A2647] dark:text-slate-100">
                  Quick WhatsApp Contact
                </h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  Send a quick message for urgent business inquiries, course
                  details, or project discussions.
                </p>
                <a
                  href="https://wa.me/918124229945"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0F5132] dark:text-emerald-300"
                >
                  Chat on WhatsApp
                  <FaArrowRight size={12} />
                </a>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <FaClock className="text-3xl text-[#0A2647]" />
                <h3 className="font-heading mt-4 text-2xl font-bold text-[#0A2647] dark:text-slate-100">
                  Working Hours
                </h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  Monday to Sunday
                  <br />
                  9:00 AM to 7:00 PM
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <FaMapMarkerAlt className="text-3xl text-[#7F1D1D]" />
                <h3 className="font-heading mt-4 text-2xl font-bold text-[#0A2647] dark:text-slate-100">
                  Location
                </h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  Growth Aura Digital Agency
                  <br />
                  Thanjavur, Tamil Nadu, India
                  <br />
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200 bg-[#F8FAFC] dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#0F5132] dark:text-emerald-300">
                FAQ
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold text-[#0A2647] sm:text-4xl dark:text-slate-100">
                Common questions
              </h2>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white px-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              {faqs.map((item, index) => (
                <AccordionItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] bg-gradient-to-r from-[#0A2647] to-[#0F5132] p-8 text-white shadow-lg sm:p-10 lg:p-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm font-semibold tracking-[0.3em] text-white/70">
                    READY TO START
                  </p>
                  <h2 className="font-heading mt-3 text-3xl font-bold sm:text-4xl">
                    Let's create something premium together.
                  </h2>
                  <p className="mt-4 max-w-2xl leading-8 text-white/80">
                    Whether you are looking for agency services or course
                    support, Growth Aura is ready to help you move forward.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                  <a
                    href="#consultation"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3.5 font-semibold text-[#0A2647] transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Book Now
                    <FaArrowRight size={12} />
                  </a>

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
                  >
                    View Services
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

export default Contact;