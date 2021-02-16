import React, { Component} from 'react'
import ParticlesBg from "particles-bg";

class About extends Component {
    render() {

        return(
            <section id="about">
                <div className="aboutme">
                    <h1>About Me</h1>
                    <h3>I'm a 19 y/o Student and a Full Stack Web Developer currently working with GeeksForGeeks KIIT as a frontend and backend developer. As a Web Developer, I mostly work with React and NodeJS, and multiple other JavaScript frameworks which aid in making highly responsive web pages. I'm also a bot developer, having developed bots for Discord, Twitter and Chatbots.</h3>
                    <p className="button-p">
                        <a href="https://drive.google.com/file/d/1KEneviCg2I6aijEuwHUc6hyFlCNKEWbV/view?usp=sharing"  className="button">Get my Resume</a>
                    </p>
                </div>
            </section>
        );
    }
}

export default About;