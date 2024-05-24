import { Component } from "react";
import Java from './../assets/images/skills/java.jpg'

class Skills extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="skills">

        <div className="wrap">
          <div className="wrap_skills">
            <div className="title_skills">
              Programming Skills
            </div>
            <div className="ability">
              <div className="image_wrap_skills">
                <img src={Java} className="image_skills" />
                <div className="wrap_ww_skills">
                  <div className="write_skills">Java</div>
                  <div className="write_skills2">intermediet</div>
                </div>
              </div>
             
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default Skills