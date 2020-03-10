import React, {Component} from 'react';
import { Login, Register } from './components/';
import Styles from './components/style.css';

export default class App extends Component {
  state = {
    isLogginActive:true,
  }

  changeState() {
    const { isLogginActive } = this.state;
    if (isLogginActive){
      this.PullOut.classList.remove('right');
      this.PullOut.classList.add("left");
    }else {
      this.PullOut.classList.remove('left');
      this.PullOut.classList.add("right");
    }
  }
  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
      return (
          <div className="App">
            <div className="login">
              <div className="container">
                {isLogginActive && <Login containerRef={(ref)=>{this.current = ref}}/>}
                {!isLogginActive && <Register containerRef={(ref)=>{this.current = ref}}/>}
              </div>
              <PullOut current={current} containerRef={(ref)=>{this.pullout = ref}} onClick={this.changeState.bind(this)}/>
            </div>
          </div>
      )
  }
}

const PullOut = props => {
  return (
    <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  )
}