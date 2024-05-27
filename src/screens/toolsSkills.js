import { Component } from "react";

import Vc from '../assets/images/skills/vs.png'
import Ai from '../assets/images/skills/ai.png'
import Gimp from '../assets/images/skills/gimp.png'
import Krita from '../assets/images/skills/krita.png'
import Tp from '../assets/images/skills/text.png'
import Git from '../assets/images/skills/git.png'
import Gh from '../assets/images/skills/github.png'
import Tools from '../assets/images/skills/platform.png'


class ToolSkills extends Component {
  render() {
    return (
      <div className="tools">
        <div className="cover_tools">
          <div className="first_tools">
            <div className="title_tools">Tools
              <div className="title_tools_small"> Don't be left behind to see my Tools skills too...</div>
            </div>
            <div className="image_title_tools">
              <img src={Tools} className="rwal_img"/>
            </div>
          </div>


          <div className="wrap_tools_right ">

            <div className="wrap_tools_part_right">
              <div className="wrap_image_tools2">
                <img src={Vc} className="image_tools2" />
              </div>
              <div className="wrap_ww_tools2">
                <div className="write_tools2">TextPad</div>
                <div className="write_tools22 ">Beginner</div>
              </div>
            </div>
            <div className="wrap_tools_part_right">
              <div className="wrap_image_tools2">
                <img src={Ai} className="image_tools2" />
              </div>
              <div className="wrap_ww_tools2">
                <div className="write_tools2">Git</div>
                <div className="write_tools22 ">Expert</div>
              </div>
            </div>
            <div className="wrap_tools_part_right">
              <div className="wrap_image_tools2">
                <img src={Gimp} className="image_tools2" />
              </div>
              <div className="wrap_ww_tools2">
                <div className="write_tools2">GitHub</div>
                <div className="write_tools22 ">Expert</div>
              </div>
            </div>
            <div className="wrap_tools_part_right">
              <div className="wrap_image_tools2">
                <img src={Krita} className="image_tools2" />
              </div>
              <div className="wrap_ww_tools2">
                <div className="write_tools2">GitHub</div>
                <div className="write_tools22 ">Expert</div>
              </div>
            </div>
            <div className="wrap_tools_part_right">
              <div className="wrap_image_tools2">
                <img src={Tp} className="image_tools2" />
              </div>
              <div className="wrap_ww_tools2">
                <div className="write_tools2">TextPad</div>
                <div className="write_tools22 ">Beginner</div>
              </div>
            </div>
            <div className="wrap_tools_part_right">
              <div className="wrap_image_tools2">
                <img src={Git} className="image_tools2" />
              </div>
              <div className="wrap_ww_tools2">
                <div className="write_tools2">Git</div>
                <div className="write_tools22 ">Expert</div>
              </div>
            </div>
            <div className="wrap_tools_part_right">
              <div className="wrap_image_tools2">
                <img src={Gh} className="image_tools2" />
              </div>
              <div className="wrap_ww_tools2">
                <div className="write_tools2">GitHub</div>
                <div className="write_tools22 ">Expert</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default ToolSkills
