import "../footer/footer.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div>
    <div className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <div className="footer-col-title">Get in Touch With Us</div>
          <p>
            <FontAwesomeIcon
              className="fas fa-phone-volume"
              icon={faPhoneVolume}
            ></FontAwesomeIcon>
            <span style={{ padding: "0 5px" }}>+1-562-346-4952</span>
          </p>
          <p>
            <FontAwesomeIcon
              className="far fa-envelope"
              icon={faEnvelope}
            ></FontAwesomeIcon>
            <span style={{ padding: "0 5px" }}>office@neuratwin.com</span>
          </p>
          <p>
            <FontAwesomeIcon
              className="fas fa-map-marker"
              icon={faMapMarker}
            ></FontAwesomeIcon>
            <span
              style={{
                padding: "0 5px",
                fontWeight: "bold",
                opacity: "1",
                color: "white",
              }}
            >
              Toronto Office
            </span>
          </p>
          <p className="loc-det">Queensway Tornto</p>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Platform</div>
          <p>Geotechnical Instrumentation</p>
          <p>Automated Monitoring</p>
          <p>Structural Surveys</p>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Applications</div>
          <p>Data Management</p>
          <p>Structural Assessment</p>
          <p>Predictive Maintainance</p>
          <p>Customer Retention</p>
          <p>Dams and Bridges</p>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Industry Solutions</div>
          <p>Machine Vision</p>
          <p>Underground Construction</p>
          <p>Heavy Civil</p>
          <p>Strctural Survey</p>
          <p>Tunneling</p>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Resources</div>
          <p>Blog</p>
          <p>Downloads</p>
          <p>Newsroom</p>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Company</div>
          <p>Team</p>
          <p>Careers</p>
          <p>Events</p>
          <p>Partner Program</p>
          <div className="footer-col-title last">Support</div>
          <p>Privacy Policy</p>
          <p>Website Terms</p>
          <p>Contact Us</p>
          <p>Sign in</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-col" style={{ color: "goldenrod" }}>
            NeuraTwin
          </div>
          <div className="footer-col">
            <div className="footer-copyright" style={{ color: "goldenrod" }}>
              All Right Reserved by NeuraTwin @2021
            </div>
          </div>
          <div
            className="footer-col social-media-icons"
            style={{ justifyContent: "space-between", color: "goldenrod" }}
          >
            <FontAwesomeIcon
              className="fab fa-facebook-f"
              icon={faFacebookF}
              size="2x"
              style={{ padding: "0 5px" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="fab fa-linkedin-in"
              icon={faLinkedinIn}
              size="2x"
              style={{ padding: "0 5px" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="fab fa-twitter"
              icon={faTwitter}
              size="2x"
              style={{ padding: "0 5px" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="fab fa-youtube"
              icon={faYoutube}
              size="2x"
              style={{ padding: "0 5px" }}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
