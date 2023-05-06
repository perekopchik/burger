import React from 'react'
import './style.css';
import burgerImage from '../../assets/Groupe1.png';
import {Link} from  'react-scroll';

const Header = () => {
    return (
        <header>
            <div className="container">
                <img src={burgerImage}
                alt="burger-factory"
                className="burger1"/>
                <div className="navbarContainer">
                    <Link to="ingredients" spy={true} smooth={true} offset={-50} duration={500} ><p className="navbarButton">Ingredient
                    </p></Link>
                    <Link to="story" spy={true} smooth={true} offset={50} duration={500} ><p className="navbarButton">Story
                    </p></Link>
                    <Link to="burgers" spy={true} smooth={true} offset={50} duration={500} ><p className="navbarButton">Burgers
                    </p></Link>
                    <Link to="location" spy={true} smooth={true} offset={190} duration={500} ><p className="navbarButton">Location
                    </p></Link>
                </div>
                <button className="buttonOrder" style={{    top: '40px',
                    left: '300px'}}>
                    Order now
                </button>
            </div>
        </header>
    )
}
export default Header
