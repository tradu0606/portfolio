import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="nav">
            <Link to="/" className="header">
                <div className="myName"><span id="name">TETYANA RADU</span></div>
                <div className="title">W E B &nbsp; D E V E L O P E R _</div>
                </Link>
            </div>
        );
    }
}

export default Header;