import React from "react";

const SectionDivider = ({ title, desc }) => {
  return (
    <div className="section-divider">
      <h2 className="section-divider-title">{title}</h2>
      <p className="section-divider-desc">{desc}</p>
    </div>
  );
};

export default SectionDivider;
