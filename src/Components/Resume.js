import React, { Component } from 'react'
import react from '../images/logos/react.png'
import materialize from '../images/logos/materialize.png'
import node from '../images/logos/node.png'

class Resume extends Component {
    render() {
        return(
            <section id="resume">
                <div className="tech">
                <h1>Tech I can work with</h1>
                    <div data-aos="fade-up" data-aos-duration="1200">
                        <p>I love to work on frontend using &nbsp;
                        <span >
                            <img className="icon-img" src={react}/>
                        </span>
                        <span style={{color: "#61dafb"}}>ReactJS</span>&nbsp;
                            and
                        <span>
                            <img className="icon-img" src="https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png"/>
                        </span>
                        <span style={{color: "#553c7b"}}>Bootstrap</span> .
                        <br/>
                        <span>
                            <img className="icon-img" src="https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png"/>
                        </span>
                        <span style={{color: "#764abc"}}>Redux</span>
                        &nbsp; is my goto tool for state management.
                        <br/>
                        For developing backends, I use 
                        <span>
                            <img className="icon-img" src={node}/>
                        </span>
                        <span style={{color: "#3c873a"}}>NodeJS</span>
                        &nbsp; or 
                        <span>
                            <img className="icon-img" src="https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png"/>
                        </span>
                        <span style={{color: "#ffa611"}}>Firebase.</span>
                        <br/>
                        For database, I use 
                        <span>
                            <img className="icon-img" src="https://img.icons8.com/color/452/mongodb.png"/>
                        </span>
                        <span style={{color: "#3fa037"}}>MongoDB</span>  (NoSQL) and &nbsp;
                        <span>
                            <img className="icon-img" src="http://pngimg.com/uploads/mysql/mysql_PNG23.png"/>
                        </span>
                        <span style={{color: "#00758f"}}>MySQL</span>  (SQL).
                        <br/>
                        I host my web apps on 
                        <span>
                            <img className="icon-img" src="https://emoji.gg/assets/emoji/5394_heroku_logo.png"/>
                        </span>
                        <span style={{color: "#6762a6"}}>Heroku (NodeJS Apps)</span>&nbsp; &amp; &nbsp;
                        <span>
                            <img className="icon-img" src="https://www.cloudflare.com/img/cf-facebook-card.png"/>
                        </span>
                        <span style={{color: "#f48120"}}>Cloudflare Pages (Static)</span>&nbsp;
                        as they give smooth integration and CI/CD with &nbsp;
                        <span>
                            <img className="icon-img" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"/>
                        </span>
                        <span style={{color: "#f34f29"}}>Git</span> .
                        <br/>

                        </p>
                    </div>
                </div>

            </section>
        );
    }
}

export default Resume;