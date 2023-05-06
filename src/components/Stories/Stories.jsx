import React from 'react'
import storyBurger from '../../assets/Rectangle 10.png'
import './style.css'

const Stories = () => {
    return (
        <div id="story" style={{display:'flex',flexDirection:"row",width: '1352px',
            height: '441px',position: 'relative',left: '284px',paddingTop: '180px'}}>
            <div style={{paddingRight:'30px'}}>
                <h1 className="ingredientsH1" style={{textAlign: 'left'}}>The story</h1>
                <p className="ingredientsH3" style={{textAlign: 'left',width: '668px',
                    height: '68px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis id arcu vel maximus.</p>
                <p className="pStories">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget consequat lorem. Ut nec placerat purus. Fusce vitae faucibus augue, non commodo elit. Integer risus orci, ultricies ac dapibus sed, dignissim interdum quam. Proin quis dignissim diam. Donec id magna placerat, fringilla odio et, efficitur lacus. Vivamus eu ultricies erat, eu lobortis nunc. Sed nec dignissim libero. Integer cursus leo nunc. Nulla mattis interdum nunc, sed semper turpis. Cras elit lorem, mollis ut feugiat ac, ultricies eu dolor.</p>
            </div>
            <img src={storyBurger} alt="storyBurger"/>
        </div>
    )
}
export default Stories
