import React from 'react';
import './subnavbar.styles.scss'

const Subnavbar = (props) => (
    <div className = {props.className +" menu-overflow"}> 
        <ul>
            {
                props.items.map( item=>(
                    <li key={item}>{item}</li>
                )
                )
            }
        </ul>
    </div>

);

export default Subnavbar;