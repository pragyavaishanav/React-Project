import React from "react";
import "./heading.styles.scss";

function Heading(props) {
  return (
    <div className="container">
      <div className="download">
        <div className="download-text">{props.children}</div>
      </div>
    </div>
  );
}

export default Heading;
