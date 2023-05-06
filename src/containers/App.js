import {Banner, Burgers, Footer, Header, Ingredients, Stories, Locations} from "../components";
import React from "react";


function App() {

    return (
            <div>
                    <Header/>
                    <Banner/>
                    <Ingredients/>
                    <Stories/>
                    <Burgers/>
                    <Locations/>
                    <Footer/>
            </div>
    );
}

export default App;
