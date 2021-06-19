import React from 'react';
import './column.styles.scss';

const Column = (props) => (
    <div>
        {props.column.map(i => (
            <div className="card2-row2-col-1-row">
                <div className="col-row-img">
                    <img src={i.image} alt="" style={{width:"5.29vw", height:"5.19vw"}} />
                </div>
                <div className="col-row-text">
                    <div className="col-row-text-title">{i.title}</div>
                    <div className="col-row-text-paragrah">{i.description}</div>
                </div>
            </div>
        ))}
    </div>
);

export default Column;