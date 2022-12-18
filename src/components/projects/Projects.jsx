import React from "react";
import { Project } from "../project/Project";
import "./projects.scss";

export const Projects = () => {
  return (
    <div className="projects">
      <span>PROJECTS</span>
      <Project
        title="Netflix Clone"
        img="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&w=1000&q=80"
        liveUrl=""
        gitHub=""
        description="A booking app for business time management. Set appointments and control your work time more efficienly"
        techOne="React"
        techTwo="Saas"
        techThree="MongoDB"
        techFour="Node.js"
      />
      <Project
        title="Eccommerce Clone"
        img="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&w=1000&q=80"
        liveUrl=""
        gitHub=""
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text
      of the printing and typesetting industry."
        techOne="React"
        techTwo="Saas"
        techThree="MongoDB"
        techFour="Node.js"
      />
    </div>
  );
};
////// /REAT SASS NODE MONGODB
