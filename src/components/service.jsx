import React from "react";
import { DesignIcon, CodeIcon, DatabaseIcon, ChartIcon, WPIcon } from "./svgs";

const ServiceCard = ({ type, title, desc }) => {
  return (
    <div className="service-card">
      <div className="service-card-icon">
        {type == "design" ? (
          <DesignIcon />
        ) : type == "frontend" ? (
          <CodeIcon />
        ) : type == "backend" ? (
          <DatabaseIcon />
        ) : type == "seo" ? (
          <ChartIcon />
        ) : (
          <WPIcon />
        )}
      </div>
      <h3>{title}</h3>
      <p className="type5">{desc}</p>
    </div>
  );
};
export const ServiceCards = () => {
  return (
    <>
      <ServiceCard
        type="design"
        title="Web Design"
        desc="Modern, visually appealing and responsive website designs for various screen sizes"
      />
      <ServiceCard
        type="frontend"
        title="Front-End Development"
        desc="Build interactive UI from designs while optimizing for performance. Integrate Backend APIs"
      />
      <ServiceCard
        type="backend"
        title="Back-End Development"
        desc="Build high quality APIs, Efficient Database Strategy and a secure Backend."
      />
      <ServiceCard
        type="wp"
        title="Wordpress Development"
        desc="Develop modern WordPress Themes and Plugins. Deploy Wordpress Site"
      />
      <ServiceCard
        type="seo"
        title="SEO Optimizations"
        desc="Applying best SEO practices in code so your website enjoys high search ranking"
      />
    </>
  );
};

export default ServiceCards;
