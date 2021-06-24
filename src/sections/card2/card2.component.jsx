import React from "react";
import PrimaryButton from "../../components/button/button.component";
import "../card2/card2.styles.scss";
import iotImage from "./IOT.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCheckCircle,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const Card2 = () => (
  <div>
    <div className="card2-container">
      <div className="card2-fluid">
        <div className="card2-fixed-container">
          <div className="card2-fixed-container-row-1">
            SEE CONSTRUCTION THROUGH OUR LENS
          </div>
          <div className="card2-fixed-container-row-2 flex ">
            <div className="w-6/12 card2-row2-col-1">
              <div className="card2-row2-col-1-row">
                <div className="col-row-img">
                  <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
                </div>
                <div className="col-row-text">
                  <div className="col-row-text-title">
                    Geotechnical Instrumentation Data
                  </div>
                  <div className="col-row-text-paragrah">
                    Plug-and-Play system to connect all Geotechnical
                    Instrumentation with multiple protocols. Collect and store
                    data security with multiple backups. Generate trends,
                    analysis, reports with just a click. Do meaningful
                    engineering analysis of the design and calculate the effects
                    of change of design parameters.
                  </div>
                </div>
              </div>
              <div className="card2-row2-col-1-row">
                <div className="col-row-img">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <div className="col-row-text">
                  <div className="col-row-text-title">Construction Surveys</div>
                  <div className="col-row-text-paragrah">
                    Collect 2-D and 3-D data from regular photos, photogrammetry
                    and Lidar. Repeat the surveys with precision and accuracy.
                    Compare the data sets to calculate structural deformations.
                  </div>
                </div>
              </div>
              <div className="card2-row2-col-1-row">
                <div className="col-row-img">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <div className="col-row-text">
                  <div className="col-row-text-title">
                    Environmental Monitoring
                  </div>
                  <div className="col-row-text-paragrah">
                    Monitor the effects of construction on surroundings using by
                    tracking Noise, Vibration, Air Quality and Dust Emission.
                  </div>
                </div>
              </div>
              <div
                className="card2-row2-col-1-row card2-row2-col-1-row-button"
                style={{ paddingTop: "20px" }}
              >
                <PrimaryButton color="brown">EXPLORE PLATFORM</PrimaryButton>
              </div>
            </div>
            <div className="w-6/12 card2-row2-col-2">
              <div>
                <img
                  src={iotImage}
                  alt=""
                  style={{
                    width: "42vw",
                    height: "31vw",
                    marginLeft: "50px",
                    boxShadow: "4px 4px 4px 3px black",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card2;
