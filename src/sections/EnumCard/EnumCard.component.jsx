import React from "react";
import "./EnumCard.styles.scss";
import {
  LightningBoltIcon,
  SwitchHorizontalIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
} from "@heroicons/react/solid";
class EnumCard extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          title: "RAPIDLY INTEGRATE SYSTEM",
          subtitle:
            "Create simple plug and play sensors that can be rapidly integrated into project",
          image: () => <LightningBoltIcon></LightningBoltIcon>,
        },
        {
          title: "AUTO IMPORT PROJECT INFORMATION",
          subtitle: "Easily integrate existing and new projects",
          image: () => <SwitchHorizontalIcon></SwitchHorizontalIcon>,
        },
        {
          title: "SAVE COST",
          subtitle:
            "Save cost on manpower and unnecessary software integrations",
          image: () => <CurrencyDollarIcon></CurrencyDollarIcon>,
        },
        {
          title: "FOCUS ON WHAT MATTERS",
          subtitle:
            "Create focus on main business model without worrying about data",
          image: () => <BriefcaseIcon></BriefcaseIcon>,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="p-8 bg-gray-100 flex justify-center">
          <div className="card9-cell-title-row">
            WE VISION IS TO ADVANCE THE FIELD OF GEOTECHNICAL ENGINEERING BY
            INNOVATION AND CREATIVE APPLICATIONS OF MODERN TECHNOLOGY
          </div>
          <div>
            {this.state.data.map((i) => (
              <div className="image-text">
                <div style={{ color: "brown", width: "3vw" }}>{i.image()}</div>
                <div className="card9-cell-text">
                  <div className="card9-cell-row-text">{i.title}</div>
                  <div className="card9-cell-text-paragraph">{i.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default EnumCard;
