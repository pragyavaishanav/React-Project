import React from 'react';
import PrimaryButton from '../../components/button/button.component';
import '../card2/card2.styles.scss';

const Card2 = () => (
    <div>
        <div className="card2-container">
            <div className="card2-fluid">
                <div className="card2-fixed-container">
                    <div className="card2-fixed-container-row-1">
                        UNLOCK YOUR DIGITAL FACTORY.
                    </div>
                    <div className="card2-fixed-container-row-2">
                        <div className="card2-row2-col-1">
                            <div className="card2-row2-col-1-row">
                                <div className="col-row-img">
                                    <img src="https://www.machinemetrics.com/hubfs/mm20_icon_home_edge.svg" alt="" style={{width:"5.29vw", height:"5.19vw"}} />
                                </div>
                                <div className="col-row-text">
                                    <div className="col-row-text-title">EDGE PLATFORM</div>
                                    <div className="col-row-text-paragrah">
                                        Plug-and-Play universal machine connectivity automatically transforms, standardizes, processes and
                                        analyzes data at the source, providing critical and timely visibility needed to avoid downtime and
                                        production losses.
                                    </div>
                                </div>
                            </div>
                            <div className="card2-row2-col-1-row">
                                <div className="col-row-img">
                                    <img src="https://www.machinemetrics.com/hubfs/mm20_icon_home_edge.svg" alt="" style={{width:"5.29vw", height:"5.19vw"}} />
                                </div>
                                <div className="col-row-text">
                                    <div className="col-row-text-title">EDGE PLATFORM</div>
                                    <div className="col-row-text-paragrah">
                                        Plug-and-Play universal machine connectivity automatically transforms, standardizes, processes and
                                        analyzes data at the source, providing critical and timely visibility needed to avoid downtime and
                                        production losses.
                                    </div>
                                </div>
                            </div>
                            <div className="card2-row2-col-1-row">
                                <div className="col-row-img">
                                    <img src="https://www.machinemetrics.com/hubfs/mm20_icon_home_edge.svg" alt="" style={{width:"5.29vw", height:"5.29vw"}} />
                                </div>
                                <div className="col-row-text">
                                    <div className="col-row-text-title">EDGE PLATFORM</div>
                                    <div className="col-row-text-paragrah">
                                        Plug-and-Play universal machine connectivity automatically transforms, standardizes, processes and
                                        analyzes data at the source, providing critical and timely visibility needed to avoid downtime and
                                        production losses.
                                    </div>
                                </div>
                            </div>
                            <div className="card2-row2-col-1-row" style={{paddingLeft:"110px", paddingTop:"20px"}}>
                                <PrimaryButton color="green">
                                    EXPLORE PLATFORM
                                </PrimaryButton>
                            </div>
                        </div>
                        <div className="card2-row2-col-2">
                            <div className="card2-row2-col-2-img">
                                <img src="https://www.machinemetrics.com/hubfs/mm21_integrations_iso_R1%20Copy%205.svg" alt="" style={{width:"41.66vw", height:"30.98vw"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Card2;