import React from 'react';
import './App.css';
import About from './About'
import Title from './Title';
import POPOSDetails from './POPOSDetails'
import POPOSList from './POPOSList';
import Footer from './Footer'
import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
  <Router>
  <div className="App">
  <Route path="/details/:id" component={POPOSDetails} />
    <Title />
    <Route exact path="/" component={POPOSList}/>
    <Route path="/about" component={About} />
  </div>
  </Router>
  );
}

export default App;