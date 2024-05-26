import React from 'react';
import { Link } from 'react-router-dom';
import Lilis from '../assets/images/lilis.png'
import Logo from '../assets/images/logo.png'
import { Component } from "react";


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (

      <div id="home" className="home">
        <div className='menu1'>
          <div className='logo'>
            <img src={Logo} className='logo_img' />
          </div>
         
          <div className='cover_menu1'>
            <div className='write1_menu1'>
              <a href="#home" className='writeM1'> Home</a>
              <a href="#Ame" className='writeM1'> About Me</a>
              <a href="#Edu" className='writeM1'> Education</a>
              <a href="#Cme" className='writeM1'> Contact Me</a>
            </div>
            <div className='write2_menu1'>
              {/* <a href="#FL" className='writeM2'> </a> */}
              <a href="#Project" className='writeM2'> Project</a>
              <a href="#skills" className='writeM2'> Skills</a>
            
            </div>

          </div>
        </div>
        <div className='cover_me'>
          <div className='image_me'>
            <img src={Lilis} className='image_me_url' />
          </div>
          <h1 className='write_me1'> Hi I am Lilis Indriani
            <div className='write_me2'> I am Web Developer</div>
          </h1>


        </div>
      </div>



    )
  }
}
export default Home