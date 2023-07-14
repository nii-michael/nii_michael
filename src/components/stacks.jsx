import React from "react";
import {
  HTMLIcon,
  CSSIcon,
  JSIcon,
  NodeJsIcon,
  ReactIcon,
  PHPIcon,
  WPIcon,
  DjangoIcon,
} from "./svgs";

const stackArray = [
  "HTML",
  "CSS",
  "Tailwindcss",
  "Javascript",
  "NodeJS",
  "Typescript",
  "NextJS",
  "ReactJS",
  "PHP",
  "Wordpress",
  "Django",
];
const Stack = ({ type }) => {
  return (
    <div className="stack-pill">
      {type == "HTML" ? (
        <HTMLIcon />
      ) : type == "CSS" ? (
        <CSSIcon />
      ) : type == "Javascript" ? (
        <JSIcon />
      ) : type == "NodeJS" ? (
        <NodeJsIcon />
      ) 
      : type == "ReactJS" ? (
        <ReactIcon />
      ) 
      : type == "NextJS" ? (
        <img src="next-js-icon.png" height="24px" width="24px" style={{width:'24px',height:'24px'}} />
      ) 
      : type == "Typescript" ? (
        <img src="typescript-icon.png" height="24px" width="24px" style={{width:'24px',height:'24px'}} />
      ) 
      : type == "Tailwindcss" ? (
        <img src="tailwind-icon.svg" height="24px" width="24px" style={{width:'24px',height:'24px'}} />
      ) 
      : type == "PHP" ? (
        <PHPIcon />
      ) 
      : type == "Wordpress" ? (
        <WPIcon />
      ) : (
        <DjangoIcon />
      )}
      <span className="stack-title">{type}</span>
    </div>
  );
};

const Stacks = () => (
  <div className="stacks-container">
    {stackArray.map((stack) => (
      <Stack type={stack} key={stack} />
    ))}
  </div>
);
export default Stacks;
