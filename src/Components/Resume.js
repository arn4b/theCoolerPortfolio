import React, { Component } from 'react'
import react from '../images/logos/react.png'
import materialize from '../images/logos/materialize.png'
import rbs from '../images/r-bs.png'
import node from '../images/logos/node.png'

class Resume extends Component {
    render() {
        return(
            <section id="resume">
                <div className="tech">
                <h1>Tech I can work with</h1>
                    <div data-aos="fade-up" data-aos-duration="1200">
                        <p>For making my web apps, I use <br/>
                        <span >
                            <img className="icon-img" src={react}/>
                        </span>
                        <span style={{color: "#61dafb"}}>React</span>&nbsp;
                            and&nbsp;
                        <span>
                            <img className="icon-img" src="https://cdn.worldvectorlogo.com/logos/next-js.svg"/>
                        </span>&nbsp;
                        <span style={{color: "#000000"}}>Next.JS.</span><br/>
                        To transform my designs from figment to 
                        <span>
                            <img className="icon-img" src="https://brandeps.com/logo-download/F/Figma-logo-vector-01.svg"/>
                        </span>
                        <span style={{color: "#f24e1e"}}>Figma, </span>
                        &nbsp;
                        and to transform the designs to code, I use 
                        <span>
                            <img className="icon-img" src="https://material-ui.com/static/logo.png"/>
                        </span>
                        <span style={{color: "#0284ca"}}>Material UI, </span>
                        &nbsp;
                        <span>
                            <img className="icon-img" src={rbs}/>
                        </span>
                        <span style={{color: "#3bd8f5"}}>React-Bootstrap, </span>
                        <br/>
                        <span>
                            <img className="icon-img" src="https://images.ctfassets.net/qcrphhesuv4n/6cZj9wicrfq7gQwyYy7RcI/9ec870532475e09f72bb1c7143a4564b/1_p1TndLk3UsGPBsM7qHPZIw.png?w=294&h=175&q=50&fm=png"/>
                        </span>
                        <span style={{color: "#cf6daa"}}>Styled Components</span>&nbsp;
                        and&nbsp;
                        <span>
                            <img className="icon-img" src="https://symbols.getvecta.com/stencil_97/3_tailwind-css-icon.43c02f69bf.png"/>
                        </span>
                        <span style={{color: "#00758f"}}>Tailwind CSS</span>
                        &nbsp;
                        as per the project.
                        <br/>
                        <span>
                            <img className="icon-img" src="https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png"/>
                        </span>
                        <span style={{color: "#764abc"}}>Redux Toolkit</span>
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
                        as they give smooth integration with &nbsp;
                        <span>
                            <img className="icon-img" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"/>
                        </span>
                        <span style={{color: "#f34f29"}}>Git</span> .

                        </p>
                    </div>
                </div>

            </section>
        );
    }
}

export default Resume;