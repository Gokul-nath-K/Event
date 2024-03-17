import React, { Suspense, lazy } from "react";
import WebLayout from "./layout/common/WebLayout";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Others/Loading";

const HomePage = lazy(() => import("./Pages/user/HomePage"));
const Contact = lazy(() => import("./Pages/user/Contact"));
const EventPage = lazy(() => import("./Pages/user/EventPage"));
const About = lazy(() => import("./Pages/user/About"));
const LoginPage = lazy(() => import("./Pages/shared/Auth/LoginPage"));
const SignupPage = lazy(() => import("./Pages/shared/Auth/SignupPage"));
const Termconditions = lazy(() => import("./Pages/user/TermConditions"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading size={100} />}>
        <Routes>
          <Route path="/" element={<WebLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/term&condition" element={<Termconditions />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
