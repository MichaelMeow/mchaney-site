import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import WhyUs from './WhyUs';
import Clients from './Clients';
import Contact from './Contact';
import CurVit from './CurVit';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/whyus' component={WhyUs}/>
          <Route exact path='/clients' component={Clients}/>
          <Route exact path='/cv' component={CurVit}/>
        </Switch>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
