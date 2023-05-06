import React from 'react'
import './style.css'
import location from '../../assets/Image 1.png'
import burger from '../../assets/Design.png'

const Locations = () => {
    return (
        <div id="location" style={{
            display: 'flex', flexDirection: "column", width: '860px',
            height: '665px', position: 'relative', left: '530px', paddingTop: '180px'
        }}>
            <h1 className="ingredientsH1">Location</h1>
            <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',margin: '30px'}}>
                <p className="locationPBold">Burger Factory</p>
                <p className="locationPNormal">Pl. de la Riponne 10</p>
                <p className="locationPNormal">1005 Lausanne</p>
                <p className="locationPNormal">021 800 00 00</p>
            </div>
            <div>
                <img src={location} alt="location"/>
                <div style={{position: 'absolute',background: '#FFFFFF 0% 0% no-repeat padding-box',
                    boxShadow: '0px 3px 6px #00000029',bottom: '250px',left: '325px',width: '50px',
                    height: '50px',borderRadius: '25px'}} >
                    <img src={burger} alt="burger" style={{display: 'block',
                        margin: '0 auto', position: 'relative', top: '8px'
                        }}/>
                </div>
            </div>
        </div>
    )
}
export default Locations
