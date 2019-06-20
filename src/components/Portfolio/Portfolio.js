import React, { Component } from 'react';
import './Portfolio.css'
import 'pure-react-carousel/dist/react-carousel.es.css';


class Portfolio extends Component {

    render() {
        return (
            <div>
                <h3 id="projecth3">PROJECTS</h3>
                <div className="projectHolder">
                    <div className="projects" id="project1">
                        <div className="grey">
                            <div className="discription">
                                <p>Global Carbon Dioxide Emissions– visualization that shows the difference between CO2 emissions by country starting 1990 till 2016. Built with React, Chart.js, D3, react-simple-maps, Node.js, Express, MongoDB.</p>
                                <div className="buttonHolder">
                                    <a className="portfolioButtons" target="_blank" rel="noopener noreferrer" href="http://co2-emissions-map.surge.sh/"><button>EXPLORE PROJECT</button></a>
                                    <a className="portfolioButtons" target="_blank" rel="noopener noreferrer" href="https://github.com/tradu0606/project4-front-end"><button>GitHub</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects" id="project2">
                        <div className="grey">
                            <div className="discription">
                                <p>CareTaker – a full stack application created to track medical history, provides an opportunity for children to monitor elderly parents health. Built with Node.js, Express, MongoDB, React, Chart.js.
                            </p>
                                <div className="buttonHolder">
                                    <a className="portfolioButtons" target="_blank" rel="noopener noreferrer" href="http://care-taker-app.surge.sh/"><button>EXPLORE PROJECT</button></a>
                                    <a className="portfolioButtons" target="_blank" rel="noopener noreferrer" href="https://github.com/tradu0606/caretaker-client"><button>GitHub</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects" id="project3">
                        <div className="grey">
                            <div className="discription">
                                <p> National Parks - backend app for users to access news and alerts on US national parks. Created a REStful API with JavaScript, Node.js, Express, and MongoDB.
                            </p>
                                <div className="buttonHolder">
                                    <a className="portfolioButtons" target="_blank" rel="noopener noreferrer" href="https://nationalparksapi.herokuapp.com/"><button>EXPLORE PROJECT</button></a>
                                    <a className="portfolioButtons" target="_blank" rel="noopener noreferrer" href="https://github.com/tradu0606/travel-project"><button>GitHub</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects" id="project4">
                        <div className="grey">
                            <div className="discription">
                                <p>“Whack-A-Mole” – interactive game created with JavaScript, CSS animation, HTML.
                            </p>
                                <div className="buttonHolder">
                                    <a className="portfolioButtons" target="_blank" rel="noopener noreferrer" href="http://whack-a-mole-tr.surge.sh"><button>EXPLORE PROJECT</button></a>
                                    <a className="portfolioButtons" target="_blank" rel="noopener noreferrer" href="https://github.com/tradu0606/Whack-A-Mole-game"><button>GitHub</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Portfolio;