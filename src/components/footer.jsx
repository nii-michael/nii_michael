import React from "react";
import {
  MailIcon,
  WhatsappIcon,
  LinkedInIcon,
  GithubIcon
} from "./svgs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-section-title">Let's Work Together</h3>
        <p className="footer-section-desc">
          You can reach out to me on these platforms
        </p>
      </div>
      <div className="footer-icons">

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
    </footer>
  );
};

export default Footer;
