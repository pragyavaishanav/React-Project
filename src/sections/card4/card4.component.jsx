import React from 'react';
import './card4.styles.scss';
import PrimaryButton from '../../components/button/button.component';
import Column from '../../components/column/column.component';

class Card4 extends React.Component{
    constructor() {
        super();

        this.state = {
            coloum: [
                {title: "EDGE PLATFORM",
                 description: "Plug-and-Play universal machine connectivity automatically transforms, standardizes, processes and analyzes data at the source, providing critical and timely visibility needed to avoid downtime and production losses.",
                 image: "https://www.machinemetrics.com/hubfs/mm20_icon_home_edge.svg",},
                {title: "DATA PLATFORM",
                 description: "Multi-tenant cloud platform enables instant analytics and insights from anywhere, including machine performance and condition monitoring, reporting via APIs, and BI-tool integrations.",
                 image: "https://www.machinemetrics.com/hubfs/mm20_icon_home_platform.svg",},
                {title: "PPLICATIONS & INTEGRATIONS",
                 description: "Leverage out-of-the-box apps, build your own apps, or integrate with your current factory systems to drive use cases that deliver immediate actionability and continuous value for factory workers and across the enterprise. ",
                 image: "https://www.machinemetrics.com/hubfs/mm20_icon_home_apps.svg",},
            ]
        }
    }

    render() {
        return(
            <div>
                <div className="card4-container">
                    <div className="card4-fluid">
                        <div className="card4-fixed-container">
                            <div className="card4-fixed-container-row-1">
                                UNLOCK YOUR DIGITAL FACTORY.
                            </div>
                            <div className="card4-fixed-container-row-2">
                                <div className="card4-row2-col-1">
                                    <Column column={this.state.coloum}></Column>
                                    <div className="card4-row2-col-1-row" style={{paddingLeft:"110px", paddingTop:"20px"}}>
                                        <PrimaryButton color="green">
                                            EXPLORE PLATFORM
                                        </PrimaryButton>
                                    </div>
                                </div>
                                <div className="card4-row2-col-2">
                                    <div className="card4-row2-col-2-img">
                                        <img src="https://www.machinemetrics.com/hubfs/mm21_integrations_iso_R1%20Copy%205.svg" alt="" style={{width:"41.66vw", height:"30.98vw"}} />
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

export default Card4;