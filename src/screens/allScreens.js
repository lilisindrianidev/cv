import React, { Component } from 'react';
import './../assets/scss/allPage.scss'
import AboutMe from './aboutMe.js'
import Education from './education.js'
import Skills from './skills.js'
import Home from './home.js'

class AllSCreens extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Home/>
        <AboutMe/>
        <Education/>
        <Skills/>
      </div>
    )
  }
}
export default AllSCreens