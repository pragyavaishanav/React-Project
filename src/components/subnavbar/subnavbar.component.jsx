import React from 'react';
import './subnavbar.styles.scss'

<<<<<<< HEAD
const Subnavbar = (props) => (
    <div className = {props.className +" menu-overflow"}> 
    <ul>
        <li>Industy 1.0</li>
        <li> Industry 2.0</li>
    </ul>
=======
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
>>>>>>> rahul/contactPage
    </div>

);

export default Subnavbar;