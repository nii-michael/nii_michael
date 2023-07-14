import { useState } from "react";
import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import SectionDivider from "./components/section-divider";
import ServiceCards from "./components/service";
import ProjectCards from "./components/projects";
import Stacks from "./components/stacks";
import Clients from "./components/clients";
import Footer from "./components/footer";
import "./App.scss";
import "@fontsource/saira-semi-condensed/400.css";
import "@fontsource/saira-semi-condensed/600.css";
import "@fontsource/saira/600.css";
import ModeContext from "./components/contexts";
import { useContext } from "react";

function App() {
  const { mode } = useContext(ModeContext);
  const [sCardCounter, setSCardCounter] = useState(1);
  const [pCardCounter, setPCardCounter] = useState(1);

  function sCounterHandler(e) {
    const width = e.target.scrollWidth - e.target.clientWidth;
    const position = e.target.scrollLeft;
    const percentage = Math.floor((position / width) * 5 + 1);
    setTimeout(() => {
      if (percentage > 5) {
        setSCardCounter(5);
      } else {
        setSCardCounter(percentage);
      }
    }, 300);
  }
  function pCounterHandler(e) {
    const width = e.target.scrollWidth - e.target.clientWidth;
    const position = e.target.scrollLeft;
    const percentage = Math.floor((position / width) * 14);
    setTimeout(() => {
      if (percentage > 13) {
        setPCardCounter(14);
      } else {
        setPCardCounter(percentage+1);
      }
    }, 300);
  }
  return (
    <div className={`app ${mode ? "light-mode" : "dark-mode"}`}>
      <Header />
      <div className="main">
        {/* hero section */}
        <Hero />
        {/* services */}
        <div className="section service-section">
          <SectionDivider title="Services" desc="Various services I offer" />
          <div className="service-container">
            <div className="card-counter">
              <p>{sCardCounter}/5</p>
            </div>
            <div className="service-card-container" onScroll={sCounterHandler}>
              <ServiceCards />
            </div>
          </div>
        </div>
        {/* projects */}
        <div className="section project-section">
          <SectionDivider
            title="Projects"
            desc="Some of the projects I’ve worked on"
          />
          <div className="project-container">
            <div className="card-counter">
              <p>{pCardCounter}/14</p>
            </div>
            <div className="project-card-container" onScroll={pCounterHandler}>
              <ProjectCards />
            </div>
          </div>
        </div>
        {/* clients */}
        <div className="section stack-section">
          <SectionDivider
            title="Clients"
            desc="Companies and clients I've worked with"
          />
          <Clients />
        </div>
        {/* tech stacks */}
        <div className="section stack-section">
          <SectionDivider
            title="Tech Stacks"
            desc="Tools, Frameworks and Languages I work with"
          />
          <Stacks />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
