import React, { Component } from 'react'
import gfg from '../images/gfg_complete_logo_2x-min.jpg'
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

            </section>
        );
    }
}

export default Resume;