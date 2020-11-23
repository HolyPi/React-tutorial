import React from 'react';
import './App.css';
import About from './About/About'
import Title from './Title/Title';
import POPOSDetails from './POPOSDetails/POPOSDetails'
import POPOSList from './POPOSList/POPOSList';
import Footer from './Footer/Footer'
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