import React, { Component } from 'react';
import AppHeaderBar from './Components/AppHeaderBar/AppHeaderBar';
import DataDisplay from './Containers/DataDisplay';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeaderBar/>


        <DataDisplay/>
      </div>
    );
  }
}

export default App;
