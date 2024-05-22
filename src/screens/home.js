import React from 'react';
import './../assets/scss/allPage.scss'
import { Link } from 'react-router-dom';
import Lilis from '../assets/images/lilis.png'
import Logo from '../assets/images/logo.png'
import AboutMe from './aboutMe.js'

import { Component } from "react";

class Home extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <div className="bodyy">
        <div className="home">
          <div className='menu1'>
            <div className='logo'>
              <img src={Logo} className='logo_img'/>
            </div>
            <div className='cover_menu1'>
              <div className='write1_menu1'>
                <div className='writeM1'> Home</div>
                <div className='writeM1'> About Me</div>
                <div className='writeM1'> Education</div>
              </div>
              <div className='write2_menu1'>
                <div className='writeM2'> Home</div>
                <div className='writeM2'> About Me</div>
                <div className='writeM2'> Education</div>
              </div>
             
            </div>
          </div>
          <div className='cover_me'>
            <div className='image_me'>
              <img src={Lilis} className='image_me_url'/>
            </div>
            <h1 className='write_me1'> Hi I am Lilis Indriani, I am Web Developer</h1>
          </div>
        </div>
        <AboutMe/>
        
      </div>
    )
  }
}
export default Home