import React from 'react';
import { component } from 'react';
import logo from './logo.svg';
import './App.css';

 class App extends component {
    constructor(){
      super();

      this.state = {
        name: 'Pavan'
      }
    }  


  render(){
  return (
    <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
     <p>Hello Pavan{this.state.name}</p>
    <button>Change Name</button>
  </header>
</div>
);
  }
}

export default App;
