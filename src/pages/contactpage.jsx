import React from "react";
import Header from "../sections/header/header.component";
import ContactForm from "../components/contactUsForm/contact.component";
import Footer from "../sections/footer/footer.component";

export default function ContactPage() {
  return (
    <section>
      <div>
        <Header></Header>
      </div>
      <div style={{ width: "60%", margin: "auto", padding: "10vw" }}>
        <ContactForm />
      </div>
      <Footer></Footer>
    </section>
  );
}
