//import logo from './logo.svg';
//import './App.css';
import React from 'react';


class App extends React.Component{

  constructor() {
    super();

    this.state = {
      display: ''
    };

    this.fromUserClick = this.fromUserClick.bind(this);
  }

  componentDidMount() {
    document.onkeydown = (e) => {
      let id = '';

      switch(e.key.toUpperCase()) {
        case 'Q': id = e.key.toUpperCase(); break;
        case 'W': id = e.key.toUpperCase(); break;
        case 'E': id = e.key.toUpperCase(); break;
        case 'A': id = e.key.toUpperCase(); break;
        case 'S': id = e.key.toUpperCase(); break;
        case 'D': id = e.key.toUpperCase(); break;
        case 'Z': id = e.key.toUpperCase(); break;
        case 'X': id = e.key.toUpperCase(); break;
        case 'C': id = e.key.toUpperCase(); break;
      }

      this.playSound(id);
      this.setDisplayFromKeyPress(id);
    }
  }

  playSound(id){

    let soundPlayer = document.getElementById(id).play();

    // Provided remedy for problem with Google Chrome 
    // regarding play() and pause()
    if (soundPlayer !== undefined) {
      soundPlayer.then(_ => {
        
      })
      .catch(error => {
        console.log("The ERROR is: " + error.toString());
      });
    }
  }

  fromUserClick(e) {
    const elem = document.getElementById(e.target.id);

    this.playSound(elem.childNodes[0].id);

    this.setDisplayView(e.target.id);
  }

  setDisplayFromKeyPress(id) {
    const child = document.getElementById(id);
    this.setDisplayView(child.parentNode.id);
    this.keyActivate(child.parentNode);
    this.keyDeactivate();
  }

  setDisplayView(id) {
    this.setState({
      display: id.toString()
    });
  }

  keyActivate(elem) {
    const el = document.querySelectorAll('.drum-pad.drum-pad-active');

    el.forEach((current) => {
      current.classList.remove('drum-pad-active');
    });

    elem.classList.add('drum-pad-active');
  }

  keyDeactivate() {
    const elem = document.querySelector('.drum-pad.drum-pad-active');

    let t = setTimeout(() => {
      elem.classList.remove('drum-pad-active');
    }, 300, () => {
      clearTimeout(t);
    });
  }

  render() {
    return (
        <div id="drum-machine">
          <div id="display">
            <h2 dangerouslySetInnerHTML={{
              __html: this.state.display
            }}></h2>
          </div>
          <div className="pads-container" onClick={this.fromUserClick}>
            <button className="drum-pad" id="Heater-1">
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
              {'Q'}
            </button>
            <button className="drum-pad" id="Heater-2">
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
              {'W'}
            </button>
            <button className="drum-pad" id="Heater-3">
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>
              {'E'}
            </button>
            <button className="drum-pad" id="Heater-4">
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
              {'A'}
            </button>
            <button className="drum-pad" id="Clap">
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>
              {'S'}
            </button>
            <button className="drum-pad" id="Open-HH">
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
              {'D'}
            </button>
            <button className="drum-pad" id="Kick-n'-Hat">
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
              {'Z'}
            </button>
            <button className="drum-pad" id="Kick">
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
              {'X'}
            </button>
            <button className="drum-pad" id="Closed-HH">
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>
              {'C'}
            </button>
          </div>
        </div>
      );
  }
}

export default App;
