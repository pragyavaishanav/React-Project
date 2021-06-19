import React from "react";
import "./subnavbar.styles.scss";

const Subnavbar = (props) => {
  return (
    <div className={props.className + " menu-overflow"}>
      {/* <div
        style={{
          backgroundColor: "rgb(0,0,0)",
          height: " 0.5vw",
          boxShadow: "0px 2px grey",
          paddingTop: "0.2vw",
        }}
      ></div> */}
      <ul style={{ marginLeft: props.margin }}>
        {props.items.map((item) => (
          <li key={item.menu}>
            <br />
            <a
              style={{ color: "inherit", textDecoration: "none" }}
              href={item.link}
            >
              {item.menu}
            </a>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subnavbar;
