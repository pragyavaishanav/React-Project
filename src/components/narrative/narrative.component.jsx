import React from "react";
import "./narrative.styles.scss";

function Narrative(props) {
  const data = props.narrationData;
  return (
    <div>
      <div className="cell-column-2">
        <div id="large-text">{data.heading}</div>
        <div className="text">
          {data.paragraphs.map((para) => (
            <div className="paragraph">{para}</div>
          ))}
          <ul className="list">
            {data.list.map((listItem) => (
              <li>{listItem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Narrative;
