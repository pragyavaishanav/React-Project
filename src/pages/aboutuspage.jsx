import React from "react";
import Header from "../sections/header/header.component";
import Footer from "../sections/footer/footer.component";
import EnumCard from "../sections/EnumCard/EnumCard.component";
import HLayoutCard from "../sections/HLayoutCard/HLayoutCard.component";

export default function AboutUsPage() {
  return (
    <section>
      <div>
        <Header></Header>
      </div>
      <HLayoutCard></HLayoutCard>
      <EnumCard></EnumCard>
      <Footer></Footer>
    </section>
  );
}
