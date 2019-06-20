import React, { Component } from 'react';
import './components/Main/Main.css'
import { Route, Switch } from 'react-router-dom'
import './assets/css/fonts.css'
import './components/Header/Header.css'
import './components/Skills/Skills.css'
import './components/Contacts/Contact.css'
import Portfolio from './components/Portfolio/Portfolio'
import Navigation from './components/Navigation/Navigation'
import About from './components/About/About'
import mainBody from './components/Main/mainBody';
import Header from './components/Header/Header'
import Skills from './components/Skills/Skills'
import Contact from './components/Contacts/Contact'
import './App.css';


class App extends Component  {
  componentDidMount(){
    document.title = "Tetyana Radu"
  }
  render (){
  return (

    <div className="App">  
    <Switch>
        <div className="content">
        
          <div id="mainContent">
          <Route path="/portfolio" component={Header} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/skills" component={mainBody} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={mainBody} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={mainBody} />
            <Route exact path="/" component={About} />
          </div>
          <div id="contactContent">
            <Route path="/" component={Navigation} />
          </div>
        </div>

        </Switch>
    </div>
    
  );}
}

export default App;
