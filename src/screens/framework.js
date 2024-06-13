import { Component } from "react";
import Laravel from "../assets/images/skills/laravel2.png"
import React from '../assets/images/skills/react.png'
import Dev from '../assets/images/skills/developer.png'

class Framework extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="framework">
        <div className="cover_frame">
          <div className="title_frame">  Framework and Library
            <div className="small_title_frame">I use framework and library to support me making a web application </div>
          </div>

          <div className="frame">
            <div data-aos="flip-left" className="image_wrap_frame hello0">
              <div className="back_image_frame">
                <img src={Laravel} className="image_frame" />
              </div>

              <div className="wrap_ww_frame">
                <div className="write_frame">Laravel</div>
                <div className="write_frame2">intermediet</div>
              </div>
            </div>

            <div data-aos="flip-left" className="image_wrap_frame hello0">
              <div className="back_image_frame">
                <img src={React} className="image_frame" />
              </div>
              <div className="wrap_ww_frame">
                <div className="write_frame">ReactJs</div>
                <div className="write_frame2">Expert</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default Framework