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
          <div className="title_frame"> This is the Framework and Library I used to do for my pogramming..</div>

          <div className="frame">
            <div className="image_wrap_frame">
              <div className="back_image_frame">
                <img src={Laravel} className="image_frame" />
              </div>

              <div className="wrap_ww_frame">
                <div className="write_frame">Laravel</div>
                <div className="write_frame2">intermediet</div>
              </div>
            </div>
            <div className="frame_image1">

              <img src={Dev} className="image1" />
              <div className="triangle-left"></div>
              <div className="triangle-right"></div>
            </div>
            <div className="image_wrap_frame">
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