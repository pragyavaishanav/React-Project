import React from "react";
import "./card5.styles.scss";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";

class Card5 extends React.Component {
  constructor() {
    super();

    this.state = {
      tablist: [
        { tabItem: "Construction Monitoring", classname: "current", index: 0 },
        { tabItem: "Preconstruction Assessment", classname: "", index: 1 },
        { tabItem: "Predictive Assessment", classname: "", index: 2 },
        { tabItem: "Alarms and Alerts", classname: "", index: 3 },
      ],

      tabcontentleft: [
        {
          preHeading: "Geotechnical Instrumentation and Monitoring",
          heading:
            "GRANULAR LEVEL CONTROL OVER INSTRUMENTATION DATA AND ANALYTICS",
          description:
            "Validate construction Design, mitigate risks and validate instrumentation",
          image: img1,
          index: 0,
        },
        {
          preHeading: "MOST ADVANCED PRE-CONSTRUCTION SURVEY APPLICATION",
          heading:
            "SAVE TIME AND MANPOWER IN SURVEYING BUILDINGS AND STRUCTURES",
          description:
            "Produce reusable survey maps and reiterate survey process with confidence. Reduce time in delivering survey results and report. Organize and deliver reports with ease.",
          image: img2,
          index: 1,
        },
        {
          preHeading: "PREDICTIVE FAILURE ASSESSMENT",
          heading: "PREDICT DESIGN DEVIATIONS",
          description:
            "Turn the regular instrumentation data into predictive machine through our predictive algorithms that analyze every aspect of data and provide most up to date information",
          image: img3,
          index: 2,
        },
        {
          preHeading: "NOTIFY STAKEHOLDERS AUTOMATICALLY",
          heading: "",
          description:
            "Create alarms and alerts with predefined constrainsts or through automatically calculated analytics",
          image: img4,
          index: 3,
        },
      ],

      activetab: 0,
    };

    this.handleClick = (a) => this.setState({ activetab: a });
  }

  render() {
    return (
      <div>
        <div className="integration-caraousal-main">
          <div className="card5-container-title">applications</div>
          <ul style={{ textAlign: "left" }} className="tabs">
            {this.state.tablist.map((i) => (
              <li
                onClick={() => this.handleClick(i.index)}
                className={i.index === this.state.activetab ? "current" : ""}
                style={{ color: "white" }}
              >
                {i.tabItem}
              </li>
            ))}
          </ul>
          <div>
            {this.state.tabcontentleft.map((i) => (
              <div
                className={
                  i.index === this.state.activetab
                    ? "tab-content current"
                    : "tab-content"
                }
              >
                <div className="tab-content-left">
                  <div className="tab-content-left animated slideInLeft">
                    <div className="tab-content-left-pre-heading">
                      {" "}
                      {i.preHeading}
                    </div>
                    <div className="tab-content-left-heading">
                      {" "}
                      {i.heading}{" "}
                    </div>
                    <div className="tab-content-left-description">
                      {i.description}
                    </div>
                  </div>
                </div>
                <div className="tab-content-right animated slideInRight">
                  <img
                    style={{ width: "35.09vw", height: "21.15vw" }}
                    src={i.image}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Card5;
