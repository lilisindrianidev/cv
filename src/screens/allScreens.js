import React, { Component } from 'react';
import './../assets/scss/allPage.scss'
import AboutMe from './aboutMe.js'
import Education from './education.js'
import Skills from './skills.js'
import Home from './home.js'
import Framework from './framework.js';
import Another from './another.js';
import ContactMe from './contactMe.js';
import Footer from './footer.js';
import ToolSkills from './toolsSkills.js';
import Project from './project.js';

class AllSCreens extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div >
        {/* <Home/> */}
        <AboutMe/>
        {/* <Education/>
        
        <Skills/>
        <Framework/>
        <ToolSkills/>
        <Project/>
        {/* <Another/> */}
        {/* <ContactMe/>
        <Footer/> */} 
      </div>
    )
  }
}
export default AllSCreens