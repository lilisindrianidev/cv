import React from 'react';
import { Link } from 'react-router-dom';
import Lilis from '../assets/images/lilis.png'
import Logo from '../assets/images/logo.png'
import { Component } from "react";
import Girl2 from '../assets/images/girl2.png'
import Contact from './contactMe.js'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (

      <div id="home" className="home">
        <div className='home_cover'>
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
                <a href="#Pro" className='writeM2'> Project</a>
                <a href="#skills" className='writeM2'> Skills</a>

              </div>

            </div>
          </div>
          <Contact />
          <div className='cover_me'>
            <div className='image_me'>
              <img src={Lilis} className='image_me_url' />
              <div className='wrap_img_write'>
                <div className='img_write'>Hello</div>
              </div>
              <div className='wrap_img_write2'>
                <div className='img_write2'>Hello</div>
              </div>
              <div className='wrap_img_write3'>
                <img src={Girl2} className='img_inside_write' />
                <div className='img_write3'>Hello</div>
              </div>
            </div>
            <h1 className='write_me1'> Hi I am Lilis Indriani

              <div className='write_me2'> I am Web Developer</div>

            </h1>
          </div>

        </div>
        <div className='cover'>
          < div className="blue">
            {/* <Color color="yellow"> hellooo</Color> */}
            <div className="wrap_image_tools2">
              {/* <img src={Gimp} className="image_tools2" /> */}
              <div className="wrap_ww_tools2">
                <div className="write_tools2">Creative</div>
                <div className="write_tools22 ">hdsjfhds sdkjgsdk sdkhfds sdghdsk dszfkh</div>
              </div>
            </div>
          </div>
          < div className="grey">
            {/* <Color color="yellow"> hellooo</Color> */}
            <div className="wrap_image_grey">
              {/* <img src={Gimp} className="image_tools2" /> */}
              <div className="wrap_ww_grey">
                <div className="write_grey">Critical thinker</div>
                <div className="write_grey2 ">sjkfnsd sdkfjhds sdzkfhsd sdzjfh</div>
              </div>
            </div>
          </div>
          < div className="yellow">
            {/* <Color color="yellow"> hellooo</Color> */}
            <div className="wrap_image_yellow">
              {/* <img src={Gimp} className="image_tools2" /> */}
              <div className="wrap_ww_yellow">
                <div className="write_yellow">work on team</div>
                <div className="write_yellow2 ">sfjskdf sdkjfs dsfosdf dsxjgfsdo dsgosjg dsj</div>
              </div>
            </div>
          </div>
          < div className="grey">
            {/* <Color color="yellow"> hellooo</Color> */}
            <div className="wrap_image_grey">
              {/* <img src={Gimp} className="image_tools2" /> */}
              <div className="wrap_ww_grey">
                <div className="write_grey">Gimp</div>
                <div className="write_grey ">Intermediet</div>
              </div>
            </div>
          </div>
        </div>

      </div>



    )
  }
}
export default Home