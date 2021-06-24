import React from "react";
import "./card11.styles.scss";
import PrimaryButton from "../../components/button/button.component";
import { Link } from "react-router-dom";

const Card11 = () => (
  <div>
    <div className="card11-container">
      <div className="card11-content">
        <div className="card11-content-title">
          ready to adopt next generation of Instrumentation Solutions
        </div>
        <div className="card11-content-text">
          Get started with today and see the difference
        </div>
        <div style={{ display: "flex" }}>
          <Link to="/contact-us">
            <PrimaryButton color="brown">BOOK A DEMO</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Card11;
