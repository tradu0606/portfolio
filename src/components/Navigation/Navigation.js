import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faCode, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Navigation.css'

const envelope = <FontAwesomeIcon className="envelope" size="2x" icon={faEnvelope} />
const linkedin = <FontAwesomeIcon className="envelope" size="2x" icon={faLinkedinIn} />
const home = <FontAwesomeIcon className="envelope" size="2x" icon={faHome} />
const skills = <FontAwesomeIcon className="envelope" size="2x" icon={faCode} />
const works = <FontAwesomeIcon className="envelope" size="2x" icon={faBriefcase} />
const github = <FontAwesomeIcon className="envelope" size="2x" icon={faGithub} />

class Contact extends Component {
    render() {
        return (
            <div className="contactPage">

                <div className="navigationHolder">
                    <Link to="/">
                        {home}
                    </Link>
                </div>
                <div className="navigationHolder">
                    <Link to="/portfolio">
                        {works}
                    </Link>
                </div>
                <div className="navigationHolder">
                    <Link to="/skills">
                        {skills}
                    </Link>
                </div>
                <div className="navigationHolder">
                    <Link to="/contact">
                        {envelope}
                    </Link>
                </div>
                <div className="navigationHolder">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tetyana-radu/">
                        {linkedin}
                    </a>
                </div>
                <div className="navigationHolder">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/tradu0606">
                        {github}
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;