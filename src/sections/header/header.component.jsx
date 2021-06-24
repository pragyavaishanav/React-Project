import React from "react";
import "./header.styles.scss";
import image1 from "./images/Logo.png";
import Subnavbar from "../../components/subnavbar/subnavbar.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.upstate = this.upstate.bind(this);
    this.state = {
      activeMenu: "none",
      subMenu: [
        {
          key: "11",
          menu: "Platform",
          menuItems: [
            {
              menu: "Geotechnical Instrumentation Monitoring",
              link: "geotechnical-platform",
            },
          ],
          margin: "35vw",
        },
        {
          key: "12",
          menu: "Solutions",
          menuItems: [
            {
              menu: "Geotechnical Instrumentation Installation",
              link: "geotechnical-installation",
            },
            {
              menu: "Crack-Lens Automated Crack Monitoring",
              link: "crack-lens",
            },
            {
              menu: "Long Distance Lora Based Dataloggers",
              link: "lora-devices",
            },
            { menu: "Digital Twin for Construction", link: "digital-twin" },
            { menu: "Construction Surveys", link: "construction-survey" },
          ],
          margin: "40vw",
        },
        {
          key: "13",
          menu: "Company",
          menuItems: [
            { menu: "About Us", link: "/about-us" },
            { menu: "Contact Us", link: "/contact-us" },
            { menu: "Team", link: "#" },
          ],
          margin: "45vw",
        },
        {
          key: "14",
          menu: "Resources",
          menuItems: [
            { menu: "Download", link: "#" },
            { menu: "Brochures", link: "#" },
            { menu: "Free Softwares", link: "#" },
          ],
          margin: "52vw",
        },
      ],
    };
  }

  upstate(Menu) {
    this.setState({ activeMenu: Menu });
  }

  render() {
    return (
      <div className="menu-container">
        <div className="logo-container">
          <Link to="/">
            <img alt="NeuraTwin" className="logo-image" src={image1}></img>
          </Link>
        </div>

        <div className="menu-items">
          {this.state.subMenu.map((submenu) => (
            <div
              className={submenu.menu + " rs-items ind-items"}
              key={submenu.key}
              onMouseEnter={() => this.upstate(submenu.menu)}
              onMouseLeave={() => this.upstate("None")}
            >
              {submenu.menu}
              <FontAwesomeIcon
                className="rs-icon"
                style={{ marginLeft: "10px", fontSize: "0.5vw" }}
                icon={faChevronDown}
              />
              {submenu.menu === this.state.activeMenu && (
                <Subnavbar
                  items={submenu.menuItems}
                  className="menu-overflow"
                ></Subnavbar>
              )}
            </div>
          ))}
        </div>
        <div className="side-items">
          <div className="demoButton">
            <Link to="/contact-us">Book A Demo</Link>
          </div>
          <Link to="/login">
            <div className="ind-items"> Sign in</div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Header;
