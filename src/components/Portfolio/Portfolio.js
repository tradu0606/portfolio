import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Portfolio.css'
import 'pure-react-carousel/dist/react-carousel.es.css';


class Portfolio extends Component {
    loaded=(e)=>{
        console.log("hi")
    }
    render() {
        return (
            <div>
            <div className="projectHolder" onLoad={this.loaded}>
                <div className="projects" id="project1">
                    <div className="grey">
                        <div className="discription">
                            <p>Global Carbon Monoxide Emissions – visualization that shows the difference between fossil CO2 emissions by country starting 1990 till 2016. Built with React, Chart.js, D3, react-simple-maps, Node.js, Express, MongoDB.<br />
                            <a className="repoLink" target="_blank" rel="noopener noreferrer"  href="https://github.com/tradu0606/project4-front-end">GitHub repository link</a>
                            </p>
                            <a target="_blank" rel="noopener noreferrer" href="http://co2-emissions-map.surge.sh/"><button>EXPLORE PROJECT</button></a>
                        </div>
                    </div>
                </div>
                <div className="projects" id="project2">
                    <div className="grey">
                        <div className="discription">
                            <p>CareTaker – a full stack application created to track medical history, provides an opportunity for children to monitor elderly parents health. Built with Node.js, Express, MongoDB, React, Chart.js<br />
                            <a className="repoLink" target="_blank" rel="noopener noreferrer"  href="https://github.com/tradu0606/caretaker-client">GitHub repository link</a>
                            </p>
                            <a  target="_blank" rel="noopener noreferrer" href="http://care-taker-app.surge.sh/"><button>EXPLORE PROJECT</button></a>
                        </div>
                    </div>
                </div>
                <div className="projects" id="project3">
                    <div className="grey">
                        <div className="discription">
                            <p> National Parks - backend app for users to access news and alerts on US national parks. Created a REStful API with JavaScript, Node.js, Express, and MongoDB.<br />
                            <a  className="repoLink" target="_blank" rel="noopener noreferrer"  href="https://github.com/tradu0606/travel-project">GitHub repository link</a>
                            </p>
                            <Link to=""><button>EXPLORE PROJECT</button></Link>
                        </div>
                    </div>
                </div>
                <div className="projects" id="project4">
                    <div className="grey">
                        <div className="discription">
                            <p>“Whack-A-Mole” – interactive game created with JavaScript, CSS animation, HTML<br />
                            <a  className="repoLink" target="_blank" rel="noopener noreferrer"  href="https://github.com/tradu0606/Whack-A-Mole-game">GitHub repository link</a>
                            </p>
                            <a target="_blank" rel="noopener noreferrer" href="https://tetyanaradu.azurewebsites.net"><button>EXPLORE PROJECT</button></a>
                        </div>
                    </div>
                </div>
                </div>
            </div >
        );
    }
}

export default Portfolio;