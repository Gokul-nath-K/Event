import React, { Suspense, lazy } from "react";
import WebLayout from "./layout/common/WebLayout";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Others/Loading";
import Faq from "./Pages/user/Faq";
import LandingPage from "./Pages/user/Landing";
import Gallery from "./Pages/user/Gallery";
import Wedding from "./Pages/Events/weddingdecoration";
import Music from "./Pages/Events/Music";
import Anniversary from "./Pages/Events/Anniversary";
import Farewell from "./Pages/Events/Farewell";
import Bachelor from "./Pages/Events/Bachelor";
import Birthday from "./Pages/Events/Birthday";
import WeddingDecorationPage from "./Pages/Events/weddingdecoration";
import PremiumPackageMarriage from "./Pages/Events/WeddingPremium";
import GoldenPackageMarriage from "./Pages/Events/WeddingGold";
import WeddingRegistrationForm from "./Pages/Events/Wedding";
import Dashboard from "./Pages/Admin/Dashboard";
import Sidebar from "./components/Others/Sidebar";
import SettingsPage from "./Pages/shared/Others/SettingsPage";
import AdminLayout from "./layout/Admin/AdminLayout";
import Unauthorized from "./Pages/shared/Others/Unauthorized";
import ConfigPage from "./Pages/Admin/ConfigPage";
import EventDashboard from "./Pages/Admin/EventDashboard";
import ProfilePage from "./Pages/user/ProfilePage";

const HomePage = lazy(() => import("./Pages/user/HomePage"));
const Contact = lazy(() => import("./Pages/user/Contact"));
const EventPage = lazy(() => import("./Pages/user/EventPage"));
const About = lazy(() => import("./Pages/user/About"));
const LoginPage = lazy(() => import("./Pages/shared/Auth/LoginPage"));
const SignupPage = lazy(() => import("./Pages/shared/Auth/SignupPage"));
const Termconditions = lazy(() => import("./Pages/user/TermConditions"));
const PrivacyPolicy = lazy(() => import("./Pages/user/PrivacyPolicy"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading size={100} />}>
        <Routes>
          <Route path="/" element={<WebLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/events" element={<About />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/services" element={<EventPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/term&condition" element={<Termconditions />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            {/* <Route path="/music" element={<Music/>} />
            <Route path="/birthday" element={<Birthday/>} />
            <Route path="/anniversary" element={<Anniversary />} />
            <Route path="/farewell" element={<Farewell />} />
            <Route path="/bachelor" element={<Bachelor />} />  */}

            {/* <Route path="/wedding" element={<Wedding />} /> */}
            {/* <Route path="/weddingregistered" element={</>} /> */}
            <Route
              path="/goldenpackage/marriage"
              element={<GoldenPackageMarriage />}
            />
            <Route
              path="/premiumpackage/marriage"
              element={<PremiumPackageMarriage />}
            />
            <Route
              path="/weddingdecoration"
              element={<WeddingDecorationPage />}
            />
            <Route path="/weddingform" element={<WeddingRegistrationForm />} />
            {/* <Route path="/weddingform" element={<Layout><WeddingRegistrationForm /></Layout>} /> */}
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="config" element={<ConfigPage />} />
            <Route path="event-data" element={<EventDashboard />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<Unauthorized />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
