import React from 'react';
import { Link } from 'react-router-dom';
import Lilis from '../assets/images/lilis2.png'
import Logo from '../assets/images/logo.png'
import { Component } from "react";
import Girl2 from '../assets/images/girl2.png'
import Creative from '../assets/images/creative.png'
import Thinker from '../assets/images/think.png'
import Team from '../assets/images/team.png'
import Burger from '../components/burger.js'
import Melon from '../assets/images/melon.png'
import Panah from '../assets/images/arrow.png'
import Flower from '../assets/images/blueFlower.png'

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
              <a href="#Pro" className='writeM2'> Project</a>
              <a href="#skills" className='writeM2'> Skills</a>

            </div>

          </div>
        </div>
        <div className='home_cover'>
        <Burger />
          {/* <Contact /> */}
          <div className='cover_me'>
            <div className='write_me'>
              <button className='button_me_title'>button</button>
              <div className='write_me1'> Hi I am

                <div className='img_title_write_me_cover'>
                  <img src={Girl2} className='img_title_write_me' />
                  <img src={Girl2} className='img_title_write_me' />
                  <img src={Girl2} className='img_title_write_me' />
                </div>
              </div>
              <div className='write_me1'> Lilis Indriani</div>
              <h3 className='write_me2'> I am Web Developer</h3>
              <div className='kotak'>
                <div className='kotak_write'>More about me</div>
              </div>
            </div>
            <div className='cover_image_me'>
              <div className='image_me'>
                <img src={Lilis} className='image_me_url' />
                <div className='wrap_img_write'>
                  <img src={Thinker} className='img_inside_write' />
                  <div className='img_write'>Critical thinker</div>
                </div>
                <div className='wrap_img_write2'>
                  <img src={Team} className='img_inside_write2' />
                  <div className='img_write2'>Work on team</div>
                </div>
                <div className='wrap_img_write3'>
                  <img src={Creative} className='img_inside_write3' />
                  <div className='img_write3'>Creative</div>
                </div>
                <div className='image_me_write'>
                  <div className='write_image_me'>Lets check up on me, scrolling down and you gonna find me there</div>
                </div>
              </div>

            </div>
          </div>


          <div className='cover'>
            < div className="grey">
              {/* <Color color="yellow"> hellooo</Color> */}
              <div className="wrap_image_grey">

                <div className="wrap_ww_grey">
                  <div className="write_grey">Gimp</div>
                  <div className='cover_shape_grey'>
                    <div className='shape_grey'>hello</div>
                    <div className='shape_grey'>ima creative</div>
                    <div className='shape_grey'>work on team</div>
                  </div>
                </div>
              </div>
            </div>
            < div className="yellow">
              {/* <Color color="yellow"> hellooo</Color> */}
              <div className="wrap_image_yellow">


                <div className="wrap_ww_yellow">
                  <div className='cover_write_arrow'>
                    <div className="write_yellow">work on team</div>
                    <div className='cover_arrow'>
                      <img src={Panah} className="image_yellow" />
                    </div>
                  </div>
                  <div className="write_yellow2 ">i i used to
                  <div className='write_yellow23'> work on team</div>
                   i am able to bring you to my home</div>
                </div>
              </div>
            </div>

            < div className="grey2">
              {/* <Color color="yellow"> hellooo</Color> */}
              <div className="wrap_image_grey2">

                <div className="wrap_ww_grey2">
                  <div className="write_grey2">i am critical thinker because i am able to bring you to my home</div>
                  {/* <div className="write_grey22 ">i am critical thinker because i am able to bring you to my home</div> */}

                </div>
                <div className='cover_fm'>
                  <img src={Flower} className="image_grey_flower" />
                  <img src={Melon} className="image_grey_melon" />

                </div>

              </div>
            </div>
            < div className="blue">
              {/* <Color color="yellow"> hellooo</Color> */}
              <div className="wrap_image_tools2">
                {/* <img src={Gimp} className="image_tools2" /> */}
                <div className="wrap_ww_tools2">
                <div className='cover_write_arrow2'>
                    <div className="write_tools2">Creative</div>
                    <div className='cover_arrow2'>
                      <img src={Panah} className="image_blue" />
                    </div>
                  </div>
                  <div className="write_tools23 ">450+</div>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>


    )
  }
}
export default Home