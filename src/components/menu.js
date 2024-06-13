import { Component } from "react";
import Logo from '../assets/images/logo.png'

class Menu extends Component{
  render(){
    return(
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
    )
  }
}
export default Menu