import digitaltwin from "./images/DigitalTwin.svg";
import Geotech from "./images/GeotechnicalData.svg";
import customer from "./images/customer.svg";
import structuralmonitoring from "./images/healthmonitoring.svg";
import review from "./images/review.svg";
import threedmodel from "./images/3dmodel.svg";
import alarm from "./images/Alarms-2.svg";

const CarouselData = [
  {
    imageUrl: digitaltwin,
    index: 0,
    message: "Digital Twin",
  },
  {
    imageUrl: Geotech,
    index: 1,
    message: "Instrumentation Data Management Platform",
  },
  {
    imageUrl: customer,
    index: 3,
    message: "Custom Software Solutions and Automated Reporting",
  },
  {
    imageUrl: structuralmonitoring,
    index: 4,
    message: "Structural Monitoring",
  },
  {
    imageUrl: review,
    index: 5,
    message: "Customer Relationship Solutions",
  },
  {
    imageUrl: threedmodel,
    index: 6,
    message: "3D Modeling",
  },
  {
    imageUrl: alarm,
    index: 7,
    message: "Predictive Risk Analysis and Alarms Management",
  },
];

export default CarouselData;
