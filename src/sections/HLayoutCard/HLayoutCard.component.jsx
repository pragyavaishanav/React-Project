import React from "react";
import "./HLayout.styles.scss";
import Grid from "../../components/grid/grid.component";
import {
  GlobeIcon,
  EyeIcon,
  BookOpenIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/solid";

class Card10 extends React.Component {
  constructor() {
    super();

    this.state = {
      topRow: [
        {
          index: 0,
          bigTitle: "GEOTECHNICAL",
          title:
            "GEOTECHNICAL SITE INVESTIGATION, GEOTECHNICAL INSTRUMENTATION",
          text: "Our Geotechnical Experts have worked extensively in the field on large metro projects and gained the insights into the working of the projects",
        },
        {
          index: 1,
          bigTitle: "MACHINE VISION",
          title: "OPEN CV, STRUCTURAL MONITORING",
          text: "With experts in open CV and other machine vision libraries, we are working hard to develop innovative applications focused on modern vision based applications.",
        },
        {
          index: 2,
          bigTitle: "MACHINE LEARNING",
          title: "MODERN FRAMEWORKS FOR RAPID DEVELOPMENT AND DELIVERY",
          text: "Our Machine Learning experts are combining the applications from Geotechnical Engineers and Machine Vision Expert to create new and innovative solutions and moving forward the field of Geotechnical Engineering.",
        },
        {
          index: 3,
          bigTitle: "ANALYTICS",
          title: "TRADITIONAL EMPIRICAL METHODS",
          text: "On top of all of the modern approaches we have not forgot the basic engineering priciples and we are combining the traditionally empirical algorithm to deliver next level of application",
        },
      ],
      bottomRow: [
        {
          index: 0,
          image: () => <GlobeIcon></GlobeIcon>,
          title: "Geotechnical",
          text: "Advancing the field of Geotechnical Instrumentation by innovating sensor design and software UI",
        },
        {
          index: 1,
          image: () => <EyeIcon></EyeIcon>,
          title: "Machine Vision",
          text: "Using machine learning and iot based devices to replace the traditional sensors for structural monitoring. Thereby creating value and benefits for the clients.",
        },
        {
          index: 2,
          image: () => <BookOpenIcon></BookOpenIcon>,
          title: "Machine Learning",
          text: "Using the data from the distributed Geotechnical Sensors and Machine Vision to develop intelligent solutions that can detect anamolies and alert the stakeholder way before a catastrophe is stuck",
        },
        {
          index: 3,
          image: () => <PresentationChartBarIcon></PresentationChartBarIcon>,
          title: "Analytics",
          text: "Using traditional empirical methods such as finite element methods and empirical calculations to validate the models and double check machine learning applications",
        },
      ],

      activeTab: 0,
    };

    this.handleClick = (a) => this.setState({ activeTab: a });
  }

  render() {
    return (
      <div className="card10-container">
        {this.state.topRow.map((i) => (
          <div>
            <div
              className={
                i.index === this.state.activeTab
                  ? "csfmc-item-top active"
                  : "csfmc-item-top"
              }
            >
              <div className="csfmc-it-cont">
                <div className="csfmc-it-left">
                  <div style={{ height: "97px" }}></div>
                  <div className="text-white text-6xl font-bold ">
                    {i.bigTitle}
                  </div>
                </div>
                <div className="csfmc-it-right">
                  <div className="csfmc-excerpt animated slideInDown">
                    <strong
                      style={{
                        color: "white",
                        letterSpacing: "0px",
                        lineHeight: "28px",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                    >
                      {i.title}
                    </strong>
                    <p>{i.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Grid
          handleClick={this.handleClick}
          activeTab={this.state.activeTab}
          bottomRow={this.state.bottomRow}
        ></Grid>
      </div>
    );
  }
}

export default Card10;
