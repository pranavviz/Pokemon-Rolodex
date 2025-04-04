import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/pranav.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi, I am Pranav </h1>
      <h2 className="profile-text">
        Have fun exploring this Pokemon Rolodex<span>&#33;</span>
      </h2>
      <h4 className="profile-text">Connect with me</h4>
      <div className="profile-links">
        <a
          href="https://github.com/pranavviz?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/pranav-viswanath-mern-developer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
