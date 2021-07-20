import React, { Component } from 'react'
import ParticlesBg from "particles-bg";
import videoplayback from '../images/videoplayback.mp4'

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


class Landing extends Component {
    render(){

        return(
            <header id="home">
                {/* <ParticlesBg color="#d400ff" type="cobweb" bg = {true} /> */}
                <div className="fuller"></div>
                <video src={videoplayback} autoPlay loop playsinline muted className="myVideo"></video>
                

                <nav className="navbar">

                    <ul id="nav" className="main-nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">EXP</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>


                <div className="landing-text" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-sine">
                    <h1>Hello, I'm<br/> Arnab Chatterjee.  </h1><br/>
                    <hr/>
                    <h3>Frontend | Android | React</h3>
                    <span  className="cursor"  data-owner="main"></span>
                </div>

                <script async src="https://unpkg.com/typer-dot-js@0.1.0/typer.js"></script>
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