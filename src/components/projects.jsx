import React from "react";

const ProjectCard = ({
  image,
  type,
  title,
  desc,
  tags = ["HTML", "CSS"],
  demoUrl,
  codeUrl,
}) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        {image}
      </div>
      <div className="project-card-intro">
        <h4>{title}</h4>
        <p className="type5">{desc}</p>
      </div>
      <div className="project-card-tags">
        {tags.map((tag) => (
          <span className="project-card-tag type6" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="project-card-links type6">
        <a href={demoUrl} target="_blank">
          Demo
        </a>
        <a href={codeUrl} target="_blank">
          &#60;Code&#47;&#62;
        </a>
      </div>
    </div>
  );
};
import {
  WRImg,
  NGImg,
  MOImg,
  EStoreImg,
  BlogImg,
  TweeterImg,
  WindBnBImg,
  SOImg,
  ECImg,
  POImg,
  CRImg,
  COImg,

} from "./images";

export const ProjectCards = () => {
  const projects = [
    {
      image: <MOImg />,
      type: "MOImg",
      title: "Mt. Olivet Methodist Society,Dansoman Official Website",
      desc: "Design & Development of the official website for Mt. Olivet Methodist Church",
      tags: ["Wordpress", "PHP"],
      demoUrl: "https://mtolivetmethdc.org/",
      codeUrl: "#",
    },
    {
      image: <CRImg />,
      type: "Car-Rental",
      title: "Car Rental Services",
      desc: "Design & Development of an online car rent portal for ",
      tags: ["Typescript", "NextJS", "TailwindCSS"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      image: <NGImg />,
      type: "NEXTGEN",
      title: "NEXTGEN Website Redesign",
      desc: "Website redesign for NEXTGEN",
      tags: ["HTML", "Javascript", "CSS"],
      demoUrl: "https://www.nextgenghana.com/",
      codeUrl: "#",
    },
    {
      image: <WRImg />,
      type: "Weekly-Report",
      title: "Weekly Report Dashboard",
      desc: "Weekly Report Dashboard",
      tags: ["HTML","JavaScript", "CSS", "PHP"],
      demoUrl: "http://legendary-parakeet-five.vercel.app/",
      codeUrl: "https://github.com/nii-michael/legendary-parakeet",
    },
    {
      image: <EStoreImg />,
      type: "estore-pay",
      title: "Crown Mart (Demo)",
      desc: "A mini online store front",
      tags: ["React", "Firebase"],
      demoUrl: "https://voluble-tarsier-52a7ee.netlify.app/",
      codeUrl: "#",
    },
    {
      image: <SOImg />,
      type: "e-c",
      title: "E-commerce website",
      desc: "E-commerce website",
      tags: ["MERN"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      image: <BlogImg />,
      type: "blog",
      title: "Swiss Blog (Demo)",
      desc: "A personal/corporate blog",
      tags: ["PHP", "HTML", "CSS"],
      demoUrl: "http://mytestwp1.byethost6.com/webcapz-capstone-project/blog",
      codeUrl: "#",
    },
    {
      image: <COImg />,
      type: "Construction",
      title: "Construction Website",
      desc: "Construction Website",
      tags: ["PHP", "HTML", "CSS"],
      demoUrl: "https://construct-run.vercel.app/",
      codeUrl: "#",
    },

    {
      image: <TweeterImg />,
      type: "tweeter",
      title: "Tweeter (Demo)",
      desc: "A simple version of twitter built with React and Django",
      tags: ["Django", "React", "Cloudinary"],
      demoUrl: "https://tweeter-react-django.onrender.com/login",
      codeUrl: "#",
    },
    {
      image: <POImg />,
      type: "portfolio",
      title: "Portfolio Website",
      desc: "A portfolio website",
      tags: ["React"],
      demoUrl: "#",
      codeUrl: "https://github.com/",
    },
    {
      image: <WindBnBImg />,
      type: "windbnb",
      title: "WindBnB (Demo)",
      desc: "An AirBnB inspired website demo.",
      tags: ["React"],
      demoUrl: "https://csb-jgr6d1.netlify.app/",
      codeUrl: "#",
    },
    {
      image: <ECImg />,
      type: "E-commerce",
      title: "E-commerce website",
      desc: "E-commerce website",
      tags: ["React"],
      demoUrl: "#",
      codeUrl: "#",
    }
  ]
  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          type={project.type}
          title={project.title}
          desc={project.desc}
          tags={project.tags}
          demoUrl={project.demoUrl}
          codeUrl={project.codeUrl}
        />
      ))}

    </>
  );
};

export default ProjectCards;
