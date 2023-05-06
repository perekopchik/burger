import React from 'react'
import burger from '../../assets/Design-4.png'
import './style.css'
import {useState} from "react";


const Burgers = () => {

    const [expanded, setExpanded] = useState({});

    function handleClick(id) {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id],
        }));
    }

    return (
        <div id="burgers" style={{
            display: 'flex', flexDirection: "column", width: '1372px',
            height: '637px', position: 'relative', left: '284px', paddingTop: '180px',marginBottom: '30px'
        }}>
            <h1 className="ingredientsH1">Burgers</h1>
            <div style={{
                display: 'flex', flexDirection: "row", justifyContent: 'center'
            }}>
                    <div className={`burger2${expanded["burger1"] ? " expanded" : ""}`}>
                        <p className="pBurger">1/4 Pound Cheese</p>
                        <img className="imgBurger" src={burger} alt="burger"/>
                        {expanded["burger1"] ?
                            (
                                <div style={{position: "relative",top: '180px',left: '30px'}}>
                                    <p className='footerPBold'>Ingredient</p>
                                    <div className="footerPNormal">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum</p>
                                    </div>
                                </div>
                            ) : (<></>)
                        }
                        <p className={`pDetails ${expanded["burger1"] ? " reduceButton" : ""}`} onClick={() => handleClick("burger1")}>{expanded["burger1"] ? 'Reduce' : 'Details'}</p>
                    </div>
                    <div className={`burger2${expanded["burger2"] ? " expanded" : ""}`}>
                        <p className="pBurger">Big Burger</p>
                        <img className="imgBurger" src={burger} alt="burger"/>
                        {expanded["burger2"] ?
                            (
                                <div style={{position: "relative",top: '180px',left: '30px'}}>
                                    <p className='footerPBold'>Ingredient</p>
                                    <div className="footerPNormal">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum</p>
                                    </div>
                                </div>
                            ) : (<></>)
                        }
                        <p className={`pDetails ${expanded["burger2"] ? " reduceButton" : ""}`} onClick={() => handleClick("burger2")}>{expanded["burger2"] ? 'Reduce' : 'Details'}</p>
                    </div>
                    <div className={`burger2${expanded["burger3"] ? " expanded" : ""}`}>
                        <p className="pBurger">Pure Bacon</p>
                        <img className="imgBurger" src={burger} alt="burger"/>
                        {expanded["burger3"] ?
                            (
                                <div style={{position: "relative",top: '180px',left: '30px'}}>
                                    <p className='footerPBold'>Ingredient</p>
                                    <div className="footerPNormal">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum</p>
                                    </div>
                                </div>
                            ) : (<></>)
                        }
                        <p className={`pDetails ${expanded["burger3"] ? " reduceButton" : ""}`} onClick={() => handleClick("burger3")}>{expanded["burger3"] ? 'Reduce' : 'Details'}</p>
                    </div>
            </div>
            {expanded["burger2"] ? (
                <></>
            ): (<button className="buttonOrder" style={{left: '600px', marginTop: '25px',position: 'absolute',top: '760px'}}>Order now</button>)}
        </div>
    )
}
export default Burgers
