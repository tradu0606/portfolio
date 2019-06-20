import React, { Component } from 'react';
import './Contact.css'


class Contact extends Component {
    render() {
        return (
            <div className='contactHolder'>
                <h3>CONTACT</h3>

                <div className="flexContact">
                    <div className="flexElementContact">
                        {/* <h4>EMAIL:</h4>
                        <h4>PHONE NUMBER:</h4> */}
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tetyana-radu/ " ><h4  className="contactLinks" >LinkedIn</h4></a>
                        <a   target="_blank" rel="noopener noreferrer" href="https://github.com/tradu0606" ><h4  className="contactLinks" >GitHub</h4></a>
                    </div>
                    <div className="flexElementContact">
                        <a  href="mailto:tetyana.radu@gmail.com" target="_top"><h4  className="contactLinks" >tetyana.radu@gmail.com</h4></a>
                        <h4>+1 (571) 243 4236</h4>

                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;