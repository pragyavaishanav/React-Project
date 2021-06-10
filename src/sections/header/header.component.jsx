import React from "react";
import "./header.styles.scss";
import image1 from "./images/Logo.png";
import Subnavbar from "../../components/subnavbar/subnavbar.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
          menuItems: ["Geotechnical Instrumentation Monitoring"],
          margin: "35vw",
        },
        {
          key: "12",
          menu: "Solutions",
          menuItems: [
            "Geotechnical Instrumentation Installation",
            "Crack-Lens Automated Crack Monitoring",
            "Long Distance Lora Based Dataloggers",
            "Digital Twin for Construction",
            "Construction Surveys",
          ],
          margin: "40vw",
        },
        {
          key: "13",
          menu: "Company",
          menuItems: ["About Us", "Team"],
          margin: "45vw",
        },
        {
          key: "14",
          menu: "Resources",
          menuItems: ["Download", "Brochures", "Free Softwares"],
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
          <img alt="NeuraTwin" className="logo-image" src={image1}></img>
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
                  margin={submenu.margin}
                  items={submenu.menuItems}
                  className={`menu-overflow`}
                ></Subnavbar>
              )}
            </div>
          ))}
        </div>
        <div className="side-items">
          <div className="demoButton">Book A Demo</div>
          <div className="ind-items"> Sign in</div>
        </div>
      </div>
    );
  }
}
export default Header;
