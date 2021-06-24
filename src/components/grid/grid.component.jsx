import React from "react";
import "./grid.styles.scss";

const Grid = (props) => (
  <div className="csfmc-bottom-section">
    {props.bottomRow.map((i) => (
      <div
        onClick={() => props.handleClick(i.index)}
        className={
          i.index === props.activeTab
            ? "csfmc-item-bottom active"
            : "csfmc-item-bottom"
        }
      >
        <div className="csfmc-ib-img w-10" style={{ color: "brown" }}>
          {i.image()}
        </div>
        <div className="csfmc-ib-title">{i.title}</div>
        <div className="csfmc-ib-text">{i.text}</div>
      </div>
    ))}
  </div>
);

export default Grid;
