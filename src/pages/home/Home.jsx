import React from "react";
import { Intro } from "../../components/intro/Intro";
import { Navbar } from "../../components/navbar/Navbar";
import { Projects } from "../../components/projects/Projects";
import { Skills } from "../../components/skills/Skills";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
};
