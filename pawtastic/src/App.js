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
        <div className="topPart">
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
            </div>
<br></br>
<br></br>
{/* got toggle help from this resource itzamna dropped */}
{/* https://medium.com/front-end-weekly/creating-a-toggle-switch-in-css-2d23e496d035 */}
        <div className= "toggleSwitchesContainer">
          <label>Gender</label><br></br>
          <input type= "checkbox" id= "toggle" className= "checkbox" />
          <label for="toggle" className="switch"></label>
        </div>
          <label className="fontColor"> Spayed or Neutered 
          <input type= "checkbox" id= "toggle2" className= "checkbox2" />
          <label for="toggle" className="switch2"></label>
          </label>
      

          <p className="fontColor" >Weight</p>
          <input type= "checkbox" id= "toggle3" className= "checkbox3" />
          <label for="toggle" className="switch3"></label>
        
<br></br>
        <div className="buttons">
          <button type="button">Back</button>
          <button type="button">Next</button>
        </div>
      </div>
    );
  };
};