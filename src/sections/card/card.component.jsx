import React from 'react';
import image1 from '../header/images/Logo.png';
import '../card/card.styles.scss';

class Card extends React.Component{
    constructor(){
        super();
        this.state = {
            imageSrc: "https://www.machinemetrics.com/hubfs/website_work_model.435-retouch_dropshadow.png",
        }
    }

    changeImg1 = () => {
        this.setState({
            imageSrc: 'https://www.machinemetrics.com/hubfs/website_work_model.435-retouch_dropshadow.png',
        })
    }

    changeImg2 = () => {
        this.setState({
            imageSrc: 'https://www.machinemetrics.com/hubfs/machinemetrics-downtime-report.png',
        })
    }

    changeImg3 = () => {
        this.setState({
            imageSrc: 'https://www.machinemetrics.com/hubfs/LabelFailures-NewFrame-2.gif',
        })
    }
    
    render() {
        return(
        <div>
            <div className="card-container">
                <div className="card-fluid">
                    <div className="card-fixed-container">
                        <div className="application-feater-main-container">
                            <div className="application-top-section">
                                <div className="image-slider-section" >
                                    <div style={{paddingRight:"60px"}}>
                                        <img src={this.state.imageSrc} style={{width:"37.5vw", height:"25vw"}} alt="" />
                                    </div>
                                </div>
                                <div className="text-section" style={{float:"left"}}>
                                    <div className="copy">
                                        <div className="copy-title">INCREASE THROUGHPUT. MAXIMIZE PROFITABILITY</div>
                                        <div className="copy-text">
                                            <p>
                                                For manufacturers, it’s never been more important to deliver the best product faster than ever. 
                                                Continuous improvement in manufacturing starts with capturing insights from your operations- 
                                                specifically your machine assets and people. MachineMetrics’ Industrial IoT Platform has automated 
                                                machine data collection and production analytics to deliver data-driven insights in a matter of
                                                minutes. Jumpstart your digital factory and take action that improves your bottom line.
                                            </p>
                                        </div>
                                        <div className="link-with-green-arrow">
                                            <a href="/production-monitoring" className="custom-link" rel="noopener">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="application-bottom-section">
                                <div className="active-image-btn" id="1" onClick={this.changeImg1}>
                                    <div className="bottom-item-icon">
                                        <img src="https://www.machinemetrics.com/hubfs/mm20_icon_home_connect_any_mach_3.svg" style={{width:"4vw", height:"4vw"}} alt="" />
                                    </div>
                                    <div className="bottom-item-copy" >
                                        <strong className="div-btn-title" style={{marginTop:"10px"}}>CONNECT</strong>
                                        <p className="div-btn-paragraph" style={{color:"green"}}>connect, collect and visualize  data from any piece of equipment on the shop floor</p>
                                    </div>
                                </div>
                                <div className="active-image-btn" id="2" onClick={this.changeImg2}>
                                    <div className="bottom-item-icon">
                                        <img src="https://www.machinemetrics.com/hubfs/mm20_icon_home_connect_any_mach_3.svg" style={{width:"4vw", height:"4vw"}} alt="" />
                                    </div>
                                    <div className="bottom-item-copy">
                                        <strong className="div-btn-title" style={{marginTop:"10px"}}>ANALYZE</strong>
                                        <p className="div-btn-paragraph" style={{color:"green"}}>Uncover data-driven insights to diagnose and predict problems in real-time.</p>
                                    </div>
                                </div>
                                <div className="active-image-btn" id="3" onClick={this.changeImg3}>
                                    <div className="bottom-item-icon">
                                        <img src="https://www.machinemetrics.com/hubfs/mm20_icon_home_connect_any_mach_3.svg" style={{width:"4vw", height:"4vw"}} alt="" />
                                    </div>
                                    <div className="bottom-item-copy">
                                        <strong className="div-btn-title" style={{marginTop:"10px"}}>TAKE ACTION</strong>
                                        <p className="div-btn-paragraph" style={{color:"green"}}>Optimize processes by delivering notifications to the right person at the right time.</p>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Card;