import React, { Component } from 'react'
import ParticlesBg from "particles-bg";

class Landing extends Component {
    render(){

        return(
            <header id="home">
                <ParticlesBg color="#d400ff" type="cobweb" bg = {true} />

                {/* <nav className="navbar">

                    <ul id="nav" className="main-nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav> */}


                <div className="landing-text">
                    <h1>Hello, <br/>I'm Arnab Chatterjee.  </h1><br/>
                    <hr/>
                    <h2>
                    <span
                        className="typer"
                        id="main"
                        data-words="UI / UX, Mobile First, Frontend Developer."
                        data-delay="100"
                        data-colors="#fff"
                        data-loop="1">
                    </span>
                    <span  className="cursor"  data-owner="main"></span>
                    </h2>
                </div>
                <div>
                    <span className="scroll-btn">
                        <a href="#about">
                            <span className="mouse">
                            <span>
                            </span>
                            </span>
                        </a>
                    </span>
                </div>
            </header>

        );
    }
}

export default Landing;