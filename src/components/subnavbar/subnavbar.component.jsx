import React from "react";
import "./subnavbar.styles.scss";
import { Link } from "react-router-dom";

const Subnavbar = (props) => {
  return (
    <div className={props.className + " menu-overflow pl-8 text-white text-xs"}>
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
            <Link
              className="text-xs pl-8 hover:text-red-500"
              style={{ textDecoration: "none" }}
              to={item.link}
            >
              {item.menu}
            </Link>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subnavbar;
