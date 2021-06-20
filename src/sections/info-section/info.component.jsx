import React from "react";
import "./info.styles.scss";
import constImage from "./static/images/construction.jpg";
import Heading from "../../components/heading/heading.component";
import InfoImage from "../../components/infoImage/infoImage.component";
import Narrative from "../../components/narrative/narrative.component";

const GeotechPageData = {
  heading: "GEOTECHNICAL INSTRUMENTATION",
  imageData: {
    src: constImage,
    imageTitle: "MINIMIZE RISK AND SAVE COST",
    imageTag: "Get useful insights and track progress",
  },
  narrative: {
    heading:
      "The importance of a right Geotechnical Instrumentation Data platform can not be overstated with so much on stake on the accurate collection, transmission and interpretation of the data.",

    paragraphs: [
      "Our data platform is built from scratch specifically for Geotechnical Instrumentation Data. The data storage queries are desined to store and retrieve data from multiple instruments such as Inclinometers, shape arrays with ease.",
      "We support almost all Geotechnical Instruments out of the box. All Vibrating Wire, Analog and Digital Data points can be automatically integrated. We also support the data formats from wireless datalogger manufacturers such as Loadsensing and Ackio. The charts and trend algorithm are specifically desined for interpreting Geotechnical and Tunnel Telemetry Data.",
      "With the scalability of microsoft azure you can be sure that we will be able to meet even most complex of the storage requirement with ease.",
    ],
    list: [
      "Complex Charts and Graphs",
      "Out of the Box Support for Inclinometer and SAAXs",
      "Alarms and User Management",
      "Instrumentation Health Metrics",
      "Automated Reporting",
    ],
  },
};

const PageSections = () => (
  <div className="page-holder">
    <Heading>GEOTECHNICAL INSTRUMENTATION</Heading>

    <div className="content-container">
      <div className="cells">
        <InfoImage imageData={GeotechPageData.imageData}></InfoImage>
        <Narrative narrationData={GeotechPageData.narrative}></Narrative>
      </div>
    </div>
  </div>
);

export default PageSections;
