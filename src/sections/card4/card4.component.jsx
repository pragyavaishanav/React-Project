import React from "react";
import "./card4.styles.scss";
import PrimaryButton from "../../components/button/button.component";
import Column from "../../components/column/column.component";
import {
  PresentationChartLineIcon,
  CubeTransparentIcon,
  ChipIcon,
} from "@heroicons/react/solid";
import undrawChart from "./undraw.svg";

class Card4 extends React.Component {
  constructor() {
    super();

    this.state = {
      coloum: [
        {
          title: "Inclinometers",
          description:
            "Get advance analytics from Inclinometer Data. Create Charts Graphics and much more with out of the box solutions",
          image: () => (
            <PresentationChartLineIcon className="h-10 w-10 text-red-500" />
          ),
        },
        {
          title: "MultiPoint Borehole Extensometers",
          description:
            "Measure sub-surface settlement over tunnel envelope or in mining using our integrated MPBX solutions. Our Solution comes fully integrated with different manufacturers.",
          image: () => (
            <CubeTransparentIcon className="h-10 w-10 text-red-500" />
          ),
        },
        {
          title: "Piezometers",
          description:
            "Measure water pressure for applications in tunneling, dams and construction using our piezometer solutions",
          image: () => <ChipIcon className="h-10 w-10 text-red-500" />,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="flex p-8 text-white">
          <div className="card4-fluid">
            <div className="card4-fixed-container">
              <div className="card4-fixed-container-row-1">
                Integrated Geotechnical Instrumentation
              </div>
              <div className="card4-fixed-container-row-2">
                <div className="card4-row2-col-1">
                  <Column column={this.state.coloum}></Column>
                  <div
                    className="card4-row2-col-1-row"
                    style={{ paddingLeft: "110px", paddingTop: "20px" }}
                  >
                    <PrimaryButton color="brown">
                      EXPLORE INSTRUMENTS
                    </PrimaryButton>
                  </div>
                </div>
                <div className="card4-row2-col-2">
                  <div className="card4-row2-col-2-img">
                    <img
                      src={undrawChart}
                      alt=""
                      style={{ width: "41.66vw", height: "30.98vw" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card4;
