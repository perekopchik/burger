import React from 'react'
import banner from '../../assets/Tracé 1.svg';
import burger from '../../assets/Groupe 2.png'
import './style.css'
import {Link} from "react-scroll";

const Banner = () => {
    return (
        <div className="bannerContainer">
            <img src={banner}/>
            <div className="bannerText">
                <div>
                    <h1 className="h1">Burger Factory</h1>
                    <p className="p">Your dreamed burger close to your locations!</p>
                    <Link to="ingredients" spy={true} smooth={true} offset={-50} duration={500} ><button className="discoverButton"><span className="buttonText">Discover the ingredients</span></button></Link>
                </div>
                <img className="burger" src={burger}/>
            </div>
        </div>
    )
}
export default Banner
