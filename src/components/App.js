import React from "react";
import './App.css'
import image from '../assets/nature.jpeg'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <img src={image}/>
      </div>
    );
  }
}

export default App;
