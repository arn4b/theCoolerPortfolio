import React, { Component} from 'react'
import profilepic from '../images/profilepic.jpeg'

class About extends Component {
    render() {

        return(
            <section id="about">
                <h1>About Me</h1>
                <div className="row">

                    <div className="double-column">
                        <p>I'm a Junior at Kalinga Institute of Industrial Technology, Bhubaneshwar, majoring in Computer Science and System Engineering.<br/><br/>
                            I have over 1 and a half years of experience in developing mobile-first fully responsive frontend sites using ReactJS, and multiple frontend 
                            frameworks like Bootstrap, MaterialUI, etc. as well as developing mobile apps for both Android and iOS using React Native. I have worked on multiple projects using React, 
                            NodeJS, Firebase and multiple other JS frameworks. <br/><br/>Currently, I'm working as a Web Developer at 
                            GFG KIIT Chapter, Microsoft Student Ambassador Community, Hackclub and Mozilla BBSR. I am open to work and collaborate on 
                            Frontend projects, Native mobile apps and UI designing.</p><br/>
                    </div>

                    <div className="column">
                        <img className="profilepic" src={profilepic}/>
                        <p className="button-p">
                            <a href="https://drive.google.com/file/d/1vrIq3-ZjOXmfHcn9i91R8wj7vBhJNY2I/view?usp=sharing"   target="_blank" className="button"><i class="fas fa-download"></i> Get my Resume</a>
                        </p>
                    </div>
                </div>

                <h1 style={{paddingTop: 0, marginTop: 0}}>Socials</h1>

                <div className="row skill-btns">
                    <div className="double-column skill">
                        <h3>
                            Check out my repos at
                        </h3>
                        <p className="button-p1">
                            <a href="https://github.com/arn4b" target="_blank"  className="button1"><i className="fab fa-github"></i> &nbsp;GitHub</a>
                        </p>
                    </div>

                    <div className="double-column skill">
                        <h3>
                            Connect with me on
                        </h3>
                        <p className="button-p1">
                            <a href="https://www.linkedin.com/in/arnab-chatterjee-3944341a0/"  target="_blank"  className="button1"><i className="fab fa-linkedin-in"></i>&nbsp; LinkedIn</a>
                        </p>
                    </div>

                    <div className="double-column skill">
                        <h3>
                            Follow me on
                        </h3>
                        <p className="button-p1">
                            <a href="https://instagram.com/_arn4b_"  target="_blank"  className="button1"><i className="fab fa-instagram"></i>&nbsp; Instagram</a>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;