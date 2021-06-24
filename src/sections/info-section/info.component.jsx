import React from "react";
import "./info.styles.scss";
import Heading from "../../components/heading/heading.component";
import InfoImage from "../../components/infoImage/infoImage.component";
import Narrative from "../../components/narrative/narrative.component";

const PageSections = (props) => {
  const data = props.data;
  return (
    <div className="page-holder">
      <Heading>{data.heading}</Heading>

      <div className="content-container">
        <div className="cells">
          <InfoImage imageData={data.imageData}></InfoImage>
          <Narrative narrationData={data.narrative}></Narrative>
        </div>
      </div>
    </div>
  );
};

export default PageSections;
