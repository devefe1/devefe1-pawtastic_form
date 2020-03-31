import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
      this.state ={
        petName:"",
        breed:"",
        birthday:"",
      }

  }
  render() {
    return (

      <div className="form">

          <h1 className="descrip"> Yay, we love Dogs! Give us the basics about your pup.</h1>

          <label className=""> Name
            <input type="text" placeholder="Pet's Name"/>
          </label>
          
          <label className="icon">
          <img src= ""/> Upload a photo
          </label>
      
      <br></br>
      
        <label> Breed 
          <input 
            type="text" placeholder="Pet's breed"/>
        </label>

          <label> Birthday
            <input 
            type="date" name ="birthday"/>
          </label>

          </div>
    ) 
}
}