import React, { Component } from 'react'
import ParticlesBg from "particles-bg";

class Landing extends Component {
    render(){

        return(
            <header id="home">
                <ParticlesBg color="#d400ff" type="cobweb" bg = {true} />
                //~~~~~~~~~~~code for navbar~~~~~~~~~~~
                <div className="landing-text">
                    <h1>Hello, <br/>I'm Arnab Chatterjee  </h1><br/>
                    <h2>
                    It was <span
                        class="typer"
                        id="some-id"
                        data-words="dark.,stormy.,night."
                        data-delay="200"
                        data-colors="#fff, #d400ff">
                    </span>
                    <span  class="cursor"  data-owner="some-id"></span>
                    </h2>
                </div>
            </header>

        );
    }
}

export default Landing;