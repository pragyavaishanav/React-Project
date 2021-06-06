import react from 'react';

import '../footer/footer.styles.scss';

const Footer = () => (
    <div>
        <div className="footer">

<div className="footer-top">

    <div className="footer-col">
        <div className="footer-col-title">Get in Touch With Us</div>
        <p style={{marginBottom: '15px'}}>Edge Platform</p>
        <p><i className="fas fa-phone-volume"></i><span style={{padding: '0 5px'}}>1234567890</span></p>
        <p><i className="far fa-envelope"></i><span style={{padding: '0 5px'}}>@gmail.com</span></p>
        <p><i className="fas fa-map-marker"></i><span style={{padding: '0 5px', fontWeight:'bold', opacity: '1', color: 'white'}} >Northampton Office</span></p>
        <p className="loc-det">47 Pleasant St, Suite 2-S, Northampton, MA 01060</p>
    </div>

    <div className="footer-col">
        <div className="footer-col-title">Platform</div>
        <p>Edge Platform</p>
        <p>Cloud Platform</p>
        <p>APIs & Applications</p>
    </div>

    <div className="footer-col">
        <div className="footer-col-title">Applications</div>
        <p>Production Monitoring</p>
        <p>Condition Monitoring</p>
        <p>Predictive Maintainance</p>
        <p>Process Optimization</p>
        <p>For Machine Builders and Distributors</p>
        <p>For Deevelopers</p>
    </div>

    <div className="footer-col">
        <div className="footer-col-title">Industry Solutions</div>
        <p>Aerospace & Defence</p>
        <p>Automotive</p>
        <p>Contract Manufacturers</p>
        <p>Heavy Machinery</p>
        <p>Medical devices</p>
        <p>Oil & Gas</p>
        <p className="footer-divider"></p>
        <p>Machine Monitoring</p>
        <p>Precision Metalworking</p>
        <p>Swiss CNC</p>
        <p>ERP Integration</p>
        <p>Metal Stamping & Fabrication</p>
        <p>Tool, Die & Mold CNC</p>
    </div>

    <div className="footer-col">
        <div className="footer-col-title">Resources</div>
        <p>Blog</p>
        <p>ROI Calculator</p>
        <p>Waste Calculator</p>
        <p>Downloads</p>
        <p>Newsroom</p>
        <p>Sitemap</p>
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
        <div className="footer-col">Company Title</div>
        <div className="footer-col">
            <div className="footer-copyright">All Right Reserved by MachineMetrics @2020</div>
        </div>
        <div className="footer-col social-media-icons" style={{justifyContent:'space-between'}}>
            <i className="fab fa-facebook-f" style={{padding:'0 5px'}}></i>
            <i className="fab fa-linkedin-in" style={{padding:'0 5px'}}></i>
            <i className="fab fa-twitter" style={{padding:'0 5px'}}></i>
            <i className="fab fa-youtube" style={{padding:'0 5px'}}></i>
        </div>    
    </div>
</div>
</div>
    </div>
);

export default Footer;