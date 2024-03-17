import React from "react";
import About from "./About";
import EventPage from "./EventPage";
import EventFooter from "../../components/user/EventFooter";
import Home from "../../components/shared/Home";

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <EventPage length={3} />
      <EventFooter />
    </>
  );
};

export default HomePage;
