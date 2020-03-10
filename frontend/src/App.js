import React, {Component} from 'react';

export default class App extends Component {
  state = {
    name:'Travis'
  }
  constructor(){
    super();
    this.state = {
      name:'Luke'
    }
    console.log('constructor');
  }
 render() {
   let {name} = this.state;
    return (
      <>
 <h1>Name: {name}</h1>
      </>
    )
  }
}