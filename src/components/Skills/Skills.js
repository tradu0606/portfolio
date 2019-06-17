import React, { Component } from 'react';
import './Skills.css'


class Skills extends Component {
    render() {
        return (
            <div className="skillsHolder">
                <h3>SKILLS</h3>

                <div className="flexSkills">
                    <div className="flexElement">
                        <h4>LANGUAGES</h4>
                        <h5>JavaScript (ES6)</h5>
                        <h5>HTML5</h5>
                        <h5>CSS3</h5>
                        <h5>Python</h5>
                    </div>
                    <div className="flexElement">
                        <h4>FRAMEWORKS & LIBS</h4>
                        <h5>React</h5>
                        <h5>Node.js</h5>
                        <h5>Express</h5>
                        <h5>Django</h5>
                    </div>
                    <div className="flexElement">
                        <h4>ADDITIONAL</h4>
                        <h5>MongoDB</h5>
                        <h5>SQL</h5>
                        <h5>GIT/GITHUB</h5>
                        <h5>Agile methodologies</h5>
                    </div>
                </div>
                {/* <table>
  <tr>
    <th>LANGUAGES</th>
    <th>FRAMEWORKS & LIBS</th>
    <th>ADDITIONAL</th>
  </tr>
  <tr>
    <td>JavaScript (ES6)</td>
    <td>React</td>
    <td>MongoDB</td>
  </tr>
  <tr>
    <td>HTML5</td>
    <td>Node.js</td>
    <td>SQL</td>
  </tr>
  <tr>
    <td>CSS3</td>
    <td>Express</td>
    <td>GIT/GITHUB</td>
  </tr>
  <tr>
    <td>Python</td>
    <td>Django</td>
    <td>Agile methodologies</td>
  </tr>
 
</table> */}
            </div>
        );
    }
}

export default Skills;