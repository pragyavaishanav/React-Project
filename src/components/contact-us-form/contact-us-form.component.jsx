import React from "react";
import emailjs from "emailjs-com";
import './contact-us-form.styles.scss'

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  messageError: "",
  classname: "hide-error"
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = e => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox
        ? e.target.checked
        : e.target.value
    });
    this.setState({classname: "hide-error"})
  };

  validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let messageError = "";

    if (!this.state.firstName) {
      firstNameError = "Please complete this required field";
    }

    if (!this.state.lastName) {
      lastNameError = "Please complete this required field";
    }

    if (!this.state.message) {
      messageError = "Please complete this required field";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email address";
    }
    
    if (emailError || firstNameError || lastNameError || messageError) {
      this.setState({ emailError, firstNameError , lastNameError, messageError});
      this.setState({classname: "errormsg"})
      return false;
    }

    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
        emailjs.sendForm('service_6se4ao7', 'template_gnhvh88', e.target, 'user_UvAGTO1QXyVLDBxrjlJmo')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert("form submitted");
        this.setState(initialState);
    }
    else{
      console.log(this.state);
      alert("Please enter correct details.");
    }
  };

  render() {
    return (
        <div className="contact-us-form-container">
            <div className="contact-us-form-title">How can we help you?</div>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label className="forms-style" >First Name*</label>
                        <input
                            name="firstName"
                            placeholder="First Name"
                            className="input"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        <div className={this.state.classname} >
                            <label className="error-label" >{this.state.firstNameError}</label>
                        </div>
                    </div>
                    <div>
                        <label className="forms-style" >Last Name*</label>
                        <input
                            name="lastName"
                            placeholder="Last Name"
                            className="input"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                        <div className={this.state.classname} >
                            <label className="error-label" >{this.state.lastNameError}</label>
                        </div>
                    </div>
                    <div>
                        <label className="forms-style" >Email Address*</label>
                        <input
                            name="email"
                            placeholder="e.g user@gmail.com"
                            className="input"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <div className={this.state.classname} >
                            <label className="error-label" >{this.state.emailError}</label>
                        </div>
                    </div>
                    <div>
                        <label className="forms-style" >Message*</label>
                        <textarea
                            rows="1"
                            name="message"
                            placeholder="Please type your message"
                            className="input"
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                        <div className={this.state.classname} >
                            <label className="error-label" >{this.state.messageError}</label>
                        </div>
                    </div>
                    <input className="input-submit-btn" type="submit" />
                </form>
            </div>
        </div>
    );
  }
}
