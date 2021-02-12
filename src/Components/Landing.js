import React, { Component } from 'react'
import ParticlesBg from "particles-bg";

class Landing extends Component {
    render(){

        return(
            <header id="home">
                <ParticlesBg color="#d400ff" type="cobweb" bg = {true} />
                <nav id="navbar">
                    <a className="mobile-btn" href="#navbar" title="Show Navigation">Show Navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide Navigation">Hide Navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About Me</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#projects">Projects</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact Me</a></li>
                    </ul>
                </nav>


                <div className="landing-text">
                    <h1>Hello, <br/>I'm Arnab Chatterjee.  </h1><br/>
                    <hr/>
                    <h2>
                    <span
                        class="typer"
                        id="main"
                        data-words="Bot Developer., Caffeine Addict., Full Stack Developer."
                        data-delay="100"
                        data-colors="#fff"
                        data-deleteDelay="1000"
                        data-loop="1">
                    </span>
                    <span  class="cursor"  data-owner="main"></span>
                    </h2>
                </div>
            </header>

        );
    }
}

export default Landing;