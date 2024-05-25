import { Component } from "react";

import Vc from '../assets/images/skills/vs.png'
import Ai from '../assets/images/skills/ai.png'
import Gimp from '../assets/images/skills/gimp.png'
import Krita from '../assets/images/skills/krita.png'
import Tp from '../assets/images/skills/text.png'
import Git from '../assets/images/skills/git.png'
import Gh from '../assets/images/skills/github.png'

class ToolSkills extends Component {
  render() {
    return (
      <div className="tools">
        <div className="cover_tools">
          <div className="title_tools"> Tools Skills</div>
          <div className="wrap_tools_left ">
            <div className="wrap_image_tools">
              <img src={Vc} className="image_tools"/>
            </div>
            <div className="wrap_image_tools">
              <img src={Ai} className="image_tools"/>
            </div>
            <div className="wrap_image_tools">
              <img src={Gimp} className="image_tools"/>
            </div>
          </div>
          <div className="wrap_tools_right ">
            <div className="wrap_image_tools">
              <img src={Vc} className="image_tools"/>
            </div>
            <div className="wrap_image_tools">
              <img src={Ai} className="image_tools"/>
            </div>
            <div className="wrap_image_tools">
              <img src={Gimp} className="image_tools"/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default ToolSkills
