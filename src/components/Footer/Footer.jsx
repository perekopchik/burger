import React from 'react'
import burgerImage from '../../assets/Groupe1.png';
import './style.css';
const Footer = () => {
    return (
        <footer className="footer">
            <img className="burger1" src={burgerImage} alt="burger-factory"/>
            <div style={{position:'relative',left: '1000px',margin:'30px',textAlign:'right'}}>
                <p className="footerPBold">Burger Factory</p>
                <div className="footerPNormal">
                    <p>Pl. de la Riponne 10</p>
                    <p>1005 Lausanne</p>
                    <p>021 800 00 00</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
