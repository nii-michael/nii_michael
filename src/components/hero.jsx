import React, { useEffect, useState } from "react";
import {

  MailIcon,
  WhatsappIcon,
  LinkedInIcon,
  GithubIcon,

} from "./svgs";
const titles = [
  "Fullstack Web \n Developer",
  "Front-End \n Developer",
  "Back-End \n Developer",

];
function formatTitle(text) {
  return text.split(/\n+/).map((title, index) => <p key={index}>{title}</p>);
}
const Hero = () => {
  const [title, setTitle] = useState(titles[0]);
  const [toggleAnim, setToggleAnim] = useState(false);
  useEffect(() => {
    const insertAnim = setTimeout(() => {
      setToggleAnim(false);
    }, 100);
    const id = setTimeout(() => {
      let currentIndex = titles.indexOf(title);
      if (currentIndex === titles.length - 1) {
        currentIndex = 0;
        setTitle(titles[0]);
      } else {
        setTitle(titles[currentIndex + 1]);
      }
    }, 3000);
    const removeAnim = setTimeout(() => {
      setToggleAnim(true);
    }, 2600);
    return () => {
      clearInterval(id);
      clearInterval(insertAnim);
      clearInterval(removeAnim);
    };
  }, [title]);

  return (
    <div className="hero-section">
      <div className="hero-sub-1">
        <div className="hero-sub-container">
          <h4 className="hero-sub-1-intro">Hi I’m Michael Tetteh, a</h4>
          <div className="hero-sub-1-titles">
            <h1 className={`hero-title ${toggleAnim && "pre-animation"}`}>
              {formatTitle(title)}
            </h1>
          </div>
          <p className="hero-sub-1-desc type5">
            I’m a software developer with over 4 years of experience and I love
            building stuff for the web. Over the years I’ve garnered great
            skills with which I deliver a variety of services ranging from
            Web/UI Design, Front-end/Back-end Development and WordPress
            Themes/Plugins Development.
          </p>
        </div>
        <a
          href="/nii_michael/TETTEH-MICHAEL-CV.pdf"
          className="hero-sub-1-resume"
          download
        >
          Download Resume
        </a>
        <div className="hero-sub-1-icons">

          <a href="https://github.com/nii-michael" target="_blank">
            <GithubIcon />
          </a>
          <a href="mailto:tettehmichael@gmail.com" target="_blank">
            <MailIcon />
          </a>
          <a href="https://wa.me/233545126471" target="_blank">
            <WhatsappIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-tetteh"
            target="_blank"
          >
            <LinkedInIcon />
          </a>

        </div>
      </div>
      <div className="hero-sub-2">
        <img src="/nii_michael/memoji.png" alt="memoji_avatar" />
      </div>
    </div>
  );
};

export default Hero;
