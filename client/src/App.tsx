import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const PlaceholderPage = ({ title }: { title: string }) => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="font-heading text-3xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mt-3 max-w-2xl text-base text-slate-600">
          This page will be built next.
        </p>
      </div>
    </main>
  );
};

function SiteLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<PlaceholderPage title="Admin Login" />} />
      </Route>
    </Routes>
  );
}

export default App;