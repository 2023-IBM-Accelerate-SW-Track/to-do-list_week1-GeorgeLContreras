import React, { Component } from 'react';
import "./About.css";
import profileImage from '../assets/mib.jpg'; 

export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={profileImage}
          alt="Profile Pic"
          style={{ width: '200px' }}
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">George Contreras</div>
        <div className="brief_description">
          Hello, I'm George. I'm a Computer Science major at The University of Texas at Dallas. In my freetime, I enjoy driving my bike and going to the park on the weekends to take a break from work and relax.
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}