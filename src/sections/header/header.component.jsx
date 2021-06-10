import React from 'react';
import './header.styles.scss'
import image1 from './images/Logo.png'
import Subnavbar from '../../components/subnavbar/subnavbar.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            subMenu: [
                {   key: '11',
                    menu: "Platform", 
                    menuItems: ["platform1"]},
                {   key: '12',
                    menu: "Solutions", 
                    menuItems: ["solutions1", "solutions2"]},
                {   key: '13',
                    menu: "Company", 
                    menuItems: ["company1", "company2"]},
                {   key: '14',
                    menu: "Resources", 
                    menuItems: ["Resource1", "Resource2"]}
            ]
        };
    }

render () {
    return(
<div>
    <div className="menu-container">
            <div className="logo-container">
                <img alt='NeuraTwin' className="logo-image" src={image1}></img>
            </div>
            
            <div className="menu-items">
                {this.state.subMenu.map(
                    submenu=> ( 
                        <div className= {submenu.menu+" rs-items ind-items"} key={submenu.key}>
                            {submenu.menu}
                            <FontAwesomeIcon className="rs-icon" style={{marginLeft:"10px", fontSize:"0.5vw" }} icon={faChevronDown} />
                            <Subnavbar items={submenu.menuItems} className="menu-overflow" ></Subnavbar>
                        </div>)
                )
                }   
            </div>
            <div className="side-items">
                <div className="button">Book A Demo</div>
                <div className="ind-items">  Sign in</div>
            </div>
            
    </div>
    
</div>
    )
}
}
export default Header;