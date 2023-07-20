import React from "react";
import links from "./links"

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio  && <p>{props.bio.name}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <links linkedin={props.linkedin} github={props.github}/>
    </div>
  );
}

export default About;
