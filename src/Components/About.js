import React, { Component} from 'react'
import ParticlesBg from "particles-bg";

class About extends Component {
    render() {

        return(
            <section id="about">
                <h1>About Me</h1>
                <div className="row">

                    <div className="double-column">
                        <p>I'm a 19 y/o Student and a Full Stack Web Developer currently working with GeeksForGeeks KIIT as a frontend and backend developer. As a Web Developer, I mostly work with React and NodeJS, and multiple other JavaScript frameworks which aid in making highly responsive web pages. I'm also a bot developer, having developed bots for Discord, Twitter and Chatbots.</p><br/>
                        <p className="button-p">
                            <a href="https://drive.google.com/file/d/1KEneviCg2I6aijEuwHUc6hyFlCNKEWbV/view?usp=sharing"  className="button">Get my Resume</a>
                        </p>
                    </div>

                    <div className="column">
                        <img className="profilepic" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;