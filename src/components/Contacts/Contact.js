import React, { Component } from 'react';
import './Contact.css'


class Contact extends Component {
    render() {
        return (
            <div className='contactHolder'>
                <h3>CONTACTS</h3>

                <div className="flexContact">
                    <div className="flexElementContact">
                        <h4>EMAIL:</h4>
                        <h4>PHONE NUMBER:</h4>


                    </div>
                    <div className="flexElementContact">
                        <h4>tetyana.radu@gmail.com</h4>
                        <h4>+1 (571) 243 4236</h4>

                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;