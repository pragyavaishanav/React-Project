import React from "react";
import Header from "../sections/header/header.component";
import ContactForm from "../components/contactUsForm/contact.component";

function TestPage() {
  return (
    <section>
      <div>
        <Header></Header>
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: "-1",
          backgroundColor: "#353131",
          // border: "1px solid white",
          marginLeft: "14%",
        }}
        className="container"
      >
        <div className="col-md-6 offset-md-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default TestPage;
