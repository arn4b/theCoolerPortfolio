import React from 'react'
import mauka from '../images/cohortone.png'

export default function Experience() {
    return (
        <section id="experience">
            <h1>Experience</h1>
            <div data-aos="fade-up" data-aos-duration="1200">
                <p style={{lineHeight: '2'}}>Currently, I am working as a Frontend Developer Intern at<br/>
                <span >
                    <img className="icon-img" src={mauka}/>
                </span>
                <span style={{color: "#283891"}}>Mauka Education.</span><br/><br/>
                Apart from professional work, I'm an active contributor and volunteer in multiple technical socities of KIIT.
                As a Frontend Developer, I've made websites for Hackathons, Bots for Discord servers and have contributed in the development of the Official Websites for 
                <ul className="list">
                    <li>
                    <span>
                        <img className="icon-img" src="https://msackiit.tech/static/media/logo.8b532b4b.png"/>
                    </span>
                    <span style={{color: "#0078d4"}}>Microsoft Student Ambassadors Club </span><br/>
                    </li>
                    <li>
                    <span>
                        <img className="icon-img" src="https://img.icons8.com/color/452/GeeksforGeeks.png"/>
                    </span>&nbsp;
                    <span style={{color: "#3fa037"}}>GeeksForGeeks Chapter</span> 
                    </li>
                    <li>
                    <span>
                        <img className="icon-img" src="https://assets.hackclub.com/icon-rounded.png"/>
                    </span>&nbsp;
                    <span style={{color: "#e5354e"}}>Hack Club</span></li>
                </ul>
                </p>
            </div>
        </section>
    )
}
