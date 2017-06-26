import React, { Component } from 'react';
import logo from './logo.svg';
import gif from './lastbot.gif';
import gifheader from './gifheader.gif';

import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
      
        <img src={gif} className="lbgif" alt="gif" />
        <p className="App-intro">
When an evil scientist named Dr. Con creates evil clones from programmable metal and human DNA, the clones destroy 75% of humanity and enslave the other 25% in cities all over the world. Before being captured, a team of computer programmers and engineers from New York City create an intelligent robot to help free humanity from the evil clones and to destroy Dr. Con. The Last Bot is humanity’s only hope of freedom and survival!
</p>
<p>Game Objectives: Destroy the clones with your acid gun, free the humans in each level, find Dr. Con’s hideouts and destroy cloning centers. The final level is to destroy Dr. Con.
        </p>
        <button type="submit" className="playbutton">Submit</button>
        <p><a href ="#" onClick={alert("Hello")}>Click for more info</a></p>
      </div>
    );
  }
}


export default App;
