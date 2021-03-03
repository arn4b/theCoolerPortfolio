import React, {Component} from 'react'

class Projects extends Component {
    render() {
        return(
            <section id="projects">
                <h1>My Work</h1>
                <div className="row">
                    <div className="double-column skill">
                        <div className="container">
                            <a href="https://github.com/arn4b/instagram-clone">
                                <img src="https://wallpapercave.com/wp/wp2587127.jpg" className="pimg" />
                                <div className="middle">
                                
                                <div className="text">Full Stack Instagram Clone</div>
                                <div className="text"><i class="fab fa-github"></i></div>
                                
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="double-column skill">
                        <div className="container">
                            <a href="https://github.com/arn4b/superchat">
                                <img src="https://wallpapercave.com/wp/wp2587127.jpg" className="pimg" />
                                <div className="middle">
                                
                                <div className="text">Firebase based Chatroom</div>
                                <div className="text"><i class="fab fa-github"></i>&nbsp;GitHub</div>
                                
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