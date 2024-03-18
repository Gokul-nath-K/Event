import React, { Suspense, lazy } from "react";
import WebLayout from "./layout/common/WebLayout";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Others/Loading";
import Faq from "./Pages/user/Faq";
import LandingPage from "./Pages/user/Landing";
import Gallery from "./Pages/user/Gallery";

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
            <Route path="/services" element={<EventPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/term&condition" element={<Termconditions />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
