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
        <div className="descrip">
          <h1 > Yay, we love Dogs! Give us the basics about your pup.</h1>
        </div>


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

            
{/* got toggle help from this resource itzamna dropped */}
{/* https://medium.com/front-end-weekly/creating-a-toggle-switch-in-css-2d23e496d035 */}
        <p>Gender</p>
          <input type= "checkbox" id= "toggle" className= "checkbox" />

        <p>Spayed or Neutered</p>

        <p>Weight</p>
          </div>
    ) 
}
}