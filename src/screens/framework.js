import { Component } from "react";
import Laravel from "../assets/images/skills/laravel2.png"

class Framework extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="framework">
        <div className="cover_frame">
          <div className="title_frame"> Framework</div>
          <div className="frame">
            <div className="image_wrap_frame">
              <img src={Laravel} className="image_frame" />
              <div className="wrap_ww_frame">
                <div className="write_frame">Laravel</div>
                <div className="write_frame2">intermediet</div>
              </div>
            </div>
            <div className="image_wrap_frame">
              <img src={Laravel} className="image_frame" />
              <div className="wrap_ww_frame">
                <div className="write_frame">Laravel</div>
                <div className="write_frame2">intermediet</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}
export default Framework