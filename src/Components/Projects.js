import React, {Component} from 'react'
import insta from '../images/instaclone.jpg'
import firechat from '../images/firechat.jpg'
import discord from '../images/discordbot.jpg'
import firepost from '../images/firepost.jpg'
import gfg from '../images/GFGKIITWebsitePoster.0c3aae94.jpg'
import cit from '../images/cit.jpg'
import auto from '../images/auto.jpg'
import electron from '../images/electron.jpg'
import tksmedia from '../images/tksmedia.png'
import msac from '../images/msac.png'
class Projects extends Component {
    render() {
        return(
            <section id="projects">
                <h1>My Work</h1>
                <div className="row">
                    <div className="double-column skill" data-aos="fade-right" data-aos-duration="600">
                        <div className="container zoom">
                            <a href="https://github.com/arn4b/instagram-clone" target="_blank">
                                <img src={insta} className="pimg" />
                                <div className="middle">
                                
                                <div className="text">Full Stack Instagram Clone</div>
                                <div className="text"><i class="fab fa-github"></i></div>
                                
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="double-column skill" data-aos="fade-left" data-aos-duration="600">
                        <div className="container zoom">
                            <a href="https://github.com/arn4b/superchat">
                                <img src={firechat} className="pimg" />
                                <div className="middle">
                                
                                <div className="text">Firebase based Chatroom</div>
                                <div className="text"><i class="fab fa-github"></i></div>
                                
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div className="double-column skill" data-aos="fade-right" data-aos-duration="600">
                        <div className="container zoom">
                            <a href="https://github.com/arn4b/discord-bot-gen1">
                                <img src={discord} className="pimg" />
                                <div className="middle">
                                
                                <div className="text">Discord User and Content Moderation Bot</div>
                                <div className="text"><i class="fab fa-github"></i></div>
                                
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="double-column skill" data-aos="fade-left" data-aos-duration="600">
                        <div className="container zoom">
                        <a href="https://github.com/arn4b/firepost">
                                <img src={firepost} className="pimg" />
                                <div className="middle">
                                
                                <div className="text">FirePost <br/> Social Media app w/ ReactJS &amp; Firebase.</div>
                                <div className="text"><i class="fab fa-github"></i></div>
                                
                                </div>
                            </a>
                        </div>
                    </div>

                    
                    <div className="double-column skill" data-aos="fade-right" data-aos-duration="600">
                        <div className="container zoom">
                            <a href="https://github.com/arn4b/autocomplete">
                                <img src={electron} className="pimg" />
                                <div className="middle">
                                
                                <div className="text">File Explorer for WIndows/MacOS/Linux using ElectronJS &amp; ReactJS</div>
                                <div className="text"><i class="fab fa-github"></i></div>
                                
                                </div>
                            </a>
                        </div>
                    </div>


                    <div className="double-column skill" data-aos="fade-left" data-aos-duration="600">
                        <div className="container zoom">
                            <a href="https://github.com/arn4b/autocomplete">
                                <img src={auto} className="pimg" />
                                <div className="middle">
                                
                                <div className="text">AutoComplete Textfield w/ ReactJS</div>
                                <div className="text"><i class="fab fa-github"></i></div>
                                
                                </div>
                            </a>
                        </div>
                    </div>


                    <div className="double-column skill" data-aos="fade-up" data-aos-duration="600">
                        <div className="container zoom">
                            <a href="https://tksmediaagency.pages.dev">
                                <img src={tksmedia} className="pimg" />
                                <div className="middle">
                                
                                <div className="text">Website for The Knowledge Store</div>
                                <div className="text"><i class="fas fa-external-link-alt"></i></div>
                                
                                </div>
                            </a>
                        </div>
                    </div>
                    

                </div>

                <h1>Projects I've collaborated on</h1>

                <div className="row">
                    <div className="double-column skill" data-aos="fade-right" data-aos-duration="600">
                        <div className="container zoom">
                            <a href="https://gfgkiit.co">
                                <img src={gfg} className="pimg" />
                                <div className="middle">
                                
                                <div className="text">GFG KIIT Chapter Official Website</div>
                                <div className="text"><i class="fas fa-external-link-alt"></i></div>
                                
                                </div>
                            </a>
                        </div>
                    </div>


                    <div className="double-column skill" data-aos="fade-left" data-aos-duration="600">
                        <div className="container zoom" >
                            <a href="https://codeinturns.tech">
                                <img src={cit} className="pimg" />
                                <div className="middle">
                                
                                <div className="text">Code In-Turns MSAC</div>
                                <div className="text"><i class="fas fa-external-link-alt"></i></div>
                                
                                </div>
                            </a>
                        </div>
                    </div>


                    <div className="double-column skill" data-aos="fade-up" data-aos-duration="600">
                        <div className="container zoom">
                            <a href="https://msackiit.tech">
                                <img src={msac} className="pimg" />
                                <div className="middle">
                                
                                <div className="text">MSAC KIIT Official Website</div>
                                <div className="text"><i class="fas fa-external-link-alt"></i></div>
                                
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
            </section>
        );
    }
}

export default Projects;