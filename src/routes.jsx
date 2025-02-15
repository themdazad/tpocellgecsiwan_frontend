import { Routes, Route } from "react-router-dom";
// Pages
import Programs from "./pages/programs-page/Programs.jsx";
import Layout, { FAQ } from "./layout";
import ContactPage from "./pages/contact-page/contact.jsx";
// Authentication Pages
import LoginPage from "./pages/authentication/login/login.jsx";
import { Dashboard } from "./pages/authentication/dashboard/admin-dashboard/adminDashboard.jsx";
import Careers from "./pages/careers/careers.jsx";
import { DeveloperCredit } from "./pages/developer-credit.jsx";

const isSignin = false;

export default function Path() {
  return (
    <Routes>
      {/* default home page  */}
      <Route path="/" element={<Layout />} />
      {/* Private Routes */}
      {isSignin && <Route path="/dashboard" element={<Dashboard />} /> }


      {/* Public Page Routes  */}
      <Route path="/programs" element={<Programs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Footer Routes */}
      <Route path="/developer-credit" element={<DeveloperCredit />} />
    </Routes>
  );
}
