import * as React from 'react';
import './App.css';

import TopValueComponent from './components/Top-value';

class App extends React.Component {
  render() {
    return (
      <div>
        <TopValueComponent type="day" />
        <TopValueComponent type="night" />
      </div>
    );
  }
}

export default App;