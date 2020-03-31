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

          <label className="fontColor"> Name </label>
            <input type="text" placeholder="Pet's Name"/>
         
          
          <label className="icon">
          <img src="https://img.icons8.com/android/24/000000/camera.png"/> Upload a photo
          </label>
      
      <br></br>
      
        <label className="fontColor"> Breed </label>
          <input 
            type="text" placeholder="Pet's breed"/>
        

          <label className="fontColor"> Birthday </label>
            <input 
            type="date" name ="birthday"/>
          

          </div>
    ) 
}
}