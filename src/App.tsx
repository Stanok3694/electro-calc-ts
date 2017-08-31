import * as React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route as Route,
  Link as Link
} from 'react-router-dom';

const BasicAppLayer = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/about">Electricity Payments</Link></li>
        <li><Link to="/topics">Deposit Profit</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <BasicAppLayer />
      </div>
    );
  }
}

export default App;