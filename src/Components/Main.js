import React, { Component } from 'react';
import axios from 'axios';



class Main extends Component {
    constructor(){
        super();
        this.state={
            questions:[]
        }
        
    }
  render() {
      
    axios.get('http://loopback-aivoarm-1.c9users.io/api/qas').then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });;
      
    return (
      <div >
        My App
        
      </div>
    );
  }
}

export default Main;