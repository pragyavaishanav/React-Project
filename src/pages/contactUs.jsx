import React from 'react';
import ContactUsForm from '../components/contact-us-form/contact-us-form.component';
import Header from '../sections/header/header.component';
import Footer from '../sections/footer/footer.component';

const ContactUs = () => (
    <div>
        <Header></Header>
        <div style={{
            backgroundColor: "white",
            padding: "285px 100px 150px 100px",
            color: "black",
            fontFamily: "sans-serif, Helvetica",
            fontSize: "126px",
            letterSpacing: "-5.02px",
            lineHeight: "96px",
            textTransform: "uppercase",
            fontWeight: "bold"
        }}>Contact us</div>
        <ContactUsForm></ContactUsForm>
        <Footer></Footer>
    </div>
)

export default ContactUs;