import React, { Component } from 'react'
import react from '../images/logos/react.png'
import materialize from '../images/logos/materialize.png'
import node from '../images/logos/node.png'

class Resume extends Component {
    render() {
        return(
            <section id="resume">
                <h1>Resume</h1>
                <div className="row">
                    <div className="column">
                        <h2>Education</h2>
                    </div>

                    <div className="triple-column">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/KIIT_logo.svg/1200px-KIIT_logo.svg.png"/>
                    </div>

                    <div className="double-column">
                        <h3>Kalinga Institute of Industrial Technology, Bhubaneshwar</h3>
                        <h4>B. Tech. in Computer Science and System Engineering (Expected 2023)</h4>
                        <h4>CGPA: 9.32</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                    </div>

                    <div className="triple-column">
                        <img src="http://www.sjsshaktinagar.com/images/sjslogo.png"/>
                    </div>

                    <div className="double-column">
                        <h3>St. Joseph's School, Shaktinagar</h3>
                        <h4>All India Senior Secondary Examination (CBSE)</h4>
                        <h4>Percentage: 87.8%</h4>
                    </div>


                </div>

                <br/>

                <div className="row">
                    <div className="column">
                        <h2>Work Experience</h2>
                    </div>

                    <div className="triple-column">
                        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png"/>
                    </div>

                    <div className="double-column">
                        <h3>GeeksForGeeks KIIT</h3>
                        <h4>Frontend Web Developer</h4>
                        <h4>Dec 2020 - Present</h4>
                    </div>
                    
                </div>

                <div className="row">
                    <div className="column">
                    </div>

                    <div className="triple-column">
                        <img src="https://avatars.githubusercontent.com/u/79008924?s=400&v=4"/>
                    </div>

                    <div className="double-column">
                        <h3>Microsoft Student Activity Centre</h3>
                        <h4>Frontend Web Developer</h4>
                        <h4>Jan 2021 - Present</h4>
                    </div>
                    
                </div>

                <br/>

                <div className="tech">
                <h1>Tech I can work with</h1>

                    <p>I love to work on frontend using &nbsp;
                    <span >
                        <img className="icon-img" src={react}/>
                    </span>
                    <span style={{color: "#61dafb"}}>ReactJS</span>&nbsp;
                     and &nbsp;
                     <span className="icon-img">
                        <img className="icon-img" src={materialize}/>
                    </span>
                    <span style={{color: "#e57373"}}>Materialize CSS.</span>
                    <br/>
                    <span className="icon-img">
                        <img className="icon-img" src={node}/>
                    </span>
                    <span style={{color: "#3c873a"}}>NodeJS</span>
                    &nbsp; is my favorite tool to develop backends, other than 
                    <span className="icon-img">
                        <img className="icon-img" src="https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png"/>
                    </span>
                    <span style={{color: "#ffa611"}}>Firebase.</span>
                    <br/>
                    For database, I use 
                    <span className="icon-img">
                        <img className="icon-img" src="https://img.icons8.com/color/452/mongodb.png"/>
                    </span>
                    <span style={{color: "#3fa037"}}>MongoDB</span>  (NoSQL) and &nbsp;
                    <span className="icon-img">
                        <img className="icon-img" src="http://pngimg.com/uploads/mysql/mysql_PNG23.png"/>
                    </span>
                    <span style={{color: "#00758f"}}>MySQL</span>  (SQL).
                    <br/>
                    For hosting and CI/CD, I use 
                    <span className="icon-img">
                        <img className="icon-img" src="https://emoji.gg/assets/emoji/5394_heroku_logo.png"/>
                    </span>
                    <span style={{color: "#6762a6"}}>Heroku</span>&nbsp;
                    as it gives smooth integration with 
                    <span className="icon-img">
                        <img className="icon-img" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"/>
                    </span>
                    <span style={{color: "#f34f29"}}>Git</span> version control tool.
                    <br/>

                    </p>
                </div>

            </section>
        );
    }
}

export default Resume;