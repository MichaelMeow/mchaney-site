import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import WhyUs from './WhyUs';
import Clients from './Clients';
import Medcert from './Medcert';
import Contact from './Contact';
import CurVit from './CurVit';
import Witness from './Witness';
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
          <Route exact path='/medcert' component={Medcert}/>
          <Route exact path='/cv' component={CurVit}/>
          <Route exact path='/witness' component={Witness}/>
        </Switch>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
