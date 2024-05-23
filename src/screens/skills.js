import { Component } from "react";
import Java from './../assets/images/skills/java.jpg'

class Skills extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="skills">
        <div className="cover_skills">
          <div className="title_skills">
            Skills
          </div>
          <div className="wrap_skills">
            <div className="ability">
              <div className="image_wrap_skills">
                <img src={Java} className="image_skills" />
              </div>
              <div className="image_wrap_skills">
                <img src={Java} className="image_skills" />
              </div>
              <div className="image_wrap_skills">
                <img src={Java} className="image_skills" />
              </div>
              <div className="image_wrap_skills">
                <img src={Java} className="image_skills" />
              </div>
              <div className="image_wrap_skills">
                <img src={Java} className="image_skills" />
              </div>
              <div className="image_wrap_skills">
                <img src={Java} className="image_skills" />
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default Skills