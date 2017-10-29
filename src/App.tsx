import * as React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route as Route,
  Link as Link
} from 'react-router-dom';

import ElectroCalc from './components/ElectroCalc';

const BasicAppLayer = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/ElectroCalc">Electricity Payments</Link></li>
        <li><Link to="/DepositProfit">Deposit Profit</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/ElectroCalc" component={ElectroCalc}/>
      </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Here you can see some pack of my calculators - made by React + TypeScript + Jest</p>
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