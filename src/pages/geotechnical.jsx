import React from "react";
import Header from "../sections/header/header.component";
import PageSections from "../sections/info-section/info.component";
import Footer from "../sections/footer/footer.component";
import GeotechPageData, {
  GeotechInstallData,
  CrackLens,
  LoraDevices,
  DigitalTwin,
  ConstructionSurvey,
} from "./static/Data/GeotechData";

const GeotechDescription = () => (
  <div>
    <Header />
    <PageSections data={GeotechPageData} />
    <Footer />
  </div>
);

export const GeotechInstallPage = () => (
  <div>
    <Header />
    <PageSections data={GeotechInstallData} />
    <Footer />
  </div>
);

export const CrackLensPage = () => (
  <div>
    <Header />
    <PageSections data={CrackLens} />
    <Footer />
  </div>
);
export const LoraDevicesPage = () => (
  <div>
    <Header />
    <PageSections data={LoraDevices} />
    <Footer />
  </div>
);
export const DigitalTwinPage = () => (
  <div>
    <Header />
    <PageSections data={DigitalTwin} />
    <Footer />
  </div>
);
export const ConstructionSurveyPage = () => (
  <div>
    <Header />
    <PageSections data={ConstructionSurvey} />
    <Footer />
  </div>
);

export default GeotechDescription;
