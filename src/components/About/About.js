import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './About.css'


class About extends Component {
    redirectPortfolio=() =>{
        this.props.history.push("/portfolio")
    }

    redirectSkills=() =>{
        this.props.history.push("/skills")
    }
    render() {
        return (
            <div>
            
            <div id="about">
                <h3>
                I'm a full-stack web developer based in Reston, Virginia. 
                Developed my skills exploring the vast landscape of technologies. Driven and constantly 
                curious, I’m ready to solve complex problems and create impactful and innovative 
                solutions. < br /> You can get in touch with me <Link id="hereContactsLink" to="/contact">here</Link>.
                </h3>
                <input onClick={this.redirectPortfolio} className="explore_button" type="button" value="EXPLORE WORK"></input>
                <input onClick={this.redirectSkills} className="explore_button" type="button" value="EXPLORE SKILLS"></input>
            </div>
            </div>
        );
    }
}

export default About;