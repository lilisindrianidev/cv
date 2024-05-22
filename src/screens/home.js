import React from 'react';
import './../assets/scss/allPage.scss'
const { Component } = require("react");

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
            <div className='cover_menu1'>
              <div className='write1_menu1'>
                <div className='writeM1'> Home</div>
                <div className='writeM1'> About Me</div>
                <div className='writeM1'> Education</div>
              </div>
             
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
export default Home