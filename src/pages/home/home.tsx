import React from "react";
import Experience from "../../components/home/experience/experience";
import Hero from "../../components/home/hero/hero";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <Experience />
    </React.Fragment>
  );
};

export default Home;
