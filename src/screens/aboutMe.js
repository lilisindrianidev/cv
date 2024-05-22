import { Component } from "react";

class AboutMe extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <div className="aboutMe">
        <h1 className="title_aboutMe">About Me </h1>
        <div className="cover_aboutMe"></div>
      </div>
    )
  }
}
export default AboutMe