import React from 'react'
import burger from '../../assets/Design-3.png';
import cheese from '../../assets/Design-1.png'
import salad from '../../assets/19.png'
import tomato from '../../assets/tomato.png'
import meat from '../../assets/Design-2.png'
import './style.css'
import Scrollable from "../../Scrollable";


const Ingredients = () => {


    return (
        <div className="containerIng" id="ingredients">
            <div className="flexIng">
                <h1 className="ingredientsH1">Ingredients</h1>
                <h3 className="ingredientsH3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Fusce mollis
                    id arcu vel maximus.</h3>
                <div className="sliderIng">
                    <Scrollable _class="items">
                        <div className="slider">
                            <img src={burger} alt="buns" className="sliderImg"/>
                            <p className="pImage" style={{position: 'relative', top: '20px'}}>Buns</p>
                        </div>
                        <div className="slider">
                            <img src={salad} alt="salad" className="sliderImg"/>
                            <p className="pImage" style={{position: 'relative', top: '28px'}}>Salad</p>
                        </div>
                        <div className="slider">
                            <img src={cheese} alt="cheese" className="sliderImg"/>
                            <p className="pImage" style={{position: 'relative', top: '40px'}}>Cheese</p>
                        </div>
                        <div className="slider">
                            <img src={tomato} alt="tomato" className="sliderImg"/>
                            <p className="pImage" style={{position: 'relative', top: '31px'}}>Tomato</p>
                        </div>
                        <div className="slider">
                            <img src={meat} alt="meat" className="sliderImg"/>
                            <p className="pImage" style={{position: 'relative', top: '34px'}}>Meat</p>
                        </div>
                    </Scrollable>
                </div>
                <p className="ingredientsP" style={{position: 'relative', top: '34px'}}>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Mauris eget consequat lorem. Ut nec placerat purus. Fusce vitae
                    faucibus augue, non commodo elit. Integer risus orci, ultricies ac dapibus sed, dignissim interdum
                    quam. Proin quis dignissim diam. Donec id magna placerat, fringilla odio et, efficitur lacus.
                    Vivamus eu ultricies erat, eu lobortis nunc. Sed nec dignissim libero. Integer cursus leo nunc.
                    Nulla mattis interdum nunc, sed semper turpis. Cras elit lorem, mollis ut feugiat ac, ultricies eu
                    dolor.</p>
            </div>
        </div>
    )
}
export default Ingredients
