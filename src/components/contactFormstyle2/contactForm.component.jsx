import React from "react";
import "./contactForm.styles.scss";

function contactForm() {
  return (
    <div>
      <form action="">
        <label htmlFor="fName" className="form-label">
          First Name
        </label>
        <input type="text" id="fName" name="fName" className="form-input" />
        <br />
        <label htmlFor="lName" className="form-label">
          Last Name
        </label>
        <input type="text" id="lName" name="lName" className="form-input" />
        <br />
        <label htmlFor="Email" className="form-label">
          Email
        </label>
        <input type="text" id="email" name="email" className="form-input" />
        <br />
        <label htmlFor="companyName" className="form-label">
          company
        </label>
        <input
          type="text"
          id="nCompany"
          name="nCompany"
          className="form-input"
        />
        <br />
        <input type="submit" value="submit" className="submit-btn" />
        <br />
      </form>
    </div>
  );
}

export default contactForm;
