import React, { Component } from 'react'
import ParticlesBg from "particles-bg";

class Landing extends Component {
    render(){

        return(
            <header id="home">
                <ParticlesBg color="#d400ff" type="cobweb" bg = {true} />
                
            </header>

        );
    }
}

export default Landing;