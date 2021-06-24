import React from "react";
import "../card/card.styles.scss";
import crackgageIm from "./crackgage.jpg";
import dataplatIm from "./dataplat.jpg";
import tunnelIm from "./tunnel.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faSatelliteDish,
  faChartLine,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      imageSrc: crackgageIm,
    };
  }

  changeImg1 = () => {
    this.setState({
      imageSrc: crackgageIm,
    });
  };

  changeImg2 = () => {
    this.setState({
      imageSrc: dataplatIm,
    });
  };

  changeImg3 = () => {
    this.setState({
      imageSrc: tunnelIm,
    });
  };

  render() {
    return (
      <div>
        <div className="card-container">
          <div className="card-fluid">
            <div className="card-fixed-container">
              <div className="application-feater-main-container">
                <div className="application-top-section ">
                  <div className="image-slider-section w-screen ">
                    <div>
                      <img src={this.state.imageSrc} alt="" />
                    </div>
                  </div>
                  <div className="text-section" style={{ float: "left" }}>
                    <div className="card1-container">
                      <div className="copy-title">
                        MITIGATE RISKS, TAKE INFORMED DECISION
                      </div>
                      <div className="copy-text">
                        <p>
                          During construction of civil projects, monitoring has
                          become an essential part of the design. Monitoring
                          Programs provides and construction managers access to
                          real-time data to understand and assess design
                          changes, quantify risk. general protect all
                          stakeholders from failures and litigation. It is of
                          utmost importance that a right platform is chosen
                        </p>
                      </div>
                      <div className="link-with-green-arrow">
                        <a
                          href="/production-monitoring"
                          className="custom-link"
                          rel="noopener"
                        >
                          Learn More
                          <FontAwesomeIcon
                            style={{ paddingLeft: "10px", paddingTop: "15px" }}
                            className="fas fa-arrow-right"
                            icon={faArrowCircleRight}
                            size="2x"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="application-bottom-section">
                  <div
                    className="active-image-btn"
                    id="1"
                    onClick={this.changeImg1}
                  >
                    <div className="bottom-item-icon">
                      <FontAwesomeIcon
                        className="fab fa-connectdevelop fa-2x"
                        icon={faSatelliteDish}
                        size="2x"
                      />
                    </div>
                    <div className="bottom-item-copy">
                      <strong
                        className="div-btn-title"
                        style={{ marginTop: "10px" }}
                      >
                        CONNECT
                      </strong>
                      <p
                        className="div-btn-paragraph"
                        style={{ color: "white" }}
                      >
                        Connect instruments with multiple data protocols and
                        transmission methods directly into our platform
                      </p>
                    </div>
                  </div>
                  <div
                    className="active-image-btn"
                    id="2"
                    onClick={this.changeImg2}
                  >
                    <div className="bottom-item-icon">
                      <FontAwesomeIcon
                        className="fas fa-chart-area fa-2x"
                        icon={faChartLine}
                        size="2x"
                      />
                    </div>
                    <div className="bottom-item-copy">
                      <strong
                        className="div-btn-title"
                        style={{ marginTop: "10px" }}
                      >
                        ANALYZE
                      </strong>
                      <p
                        className="div-btn-paragraph"
                        style={{ color: "white" }}
                      >
                        Analyse the trends and quantify the risk. See hidden
                        trends and mitigate the risks. risk
                      </p>
                    </div>
                  </div>
                  <div
                    className="active-image-btn"
                    id="3"
                    onClick={this.changeImg3}
                  >
                    <div className="bottom-item-icon">
                      <FontAwesomeIcon
                        className="fas fa-plane-departure fa-2x"
                        icon={faPlaneDeparture}
                        size="2x"
                      />
                    </div>
                    <div className="bottom-item-copy">
                      <strong
                        className="div-btn-title"
                        style={{ marginTop: "10px" }}
                      >
                        TAKE ACTION
                      </strong>
                      <p
                        className="div-btn-paragraph"
                        style={{ color: "white" }}
                      >
                        Be informed before the risk materialize and take
                        informed decision to eliminate the risk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
