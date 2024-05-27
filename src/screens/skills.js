import { Component } from "react";
import Java from './../assets/images/skills/java.jpg'
import Js from '../assets/images/skills/js.png'
import Sass from '../assets/images/skills/sass.png'
import Css from '../assets/images/skills/css.png'
import Mysql from '../assets/images/skills/mysql.png'
import Php from '../assets/images/skills/php.png'
import Pro from '../assets/images/skills/programing.png'

class Skills extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="skills" className="skills">

        <div className="wrap">
          <div className="wrap_skills">
            <div className="title_skills">
              Check up my Programming Skills...
            </div>
            <div className="ability">

              <div className="programming">
                <img src={Pro} className="image_pro"/>

              </div>
              <div className="image_wrap_skills">
                <div className="tools_cover_skills">
                  <div className="image_cover_skills">
                    <img src={Java} className="image_skills" />
                  </div>
                  <div className="wrap_ww_skills">
                    <div className="write_skills">Java</div>
                    <div className="write_skills2">intermediet</div>
                  </div>
                </div>
                <div className="tools_cover_skills">
                  <div className="image_cover_skills">
                    <img src={Js} className="image_skills" />
                  </div>
                  <div className="wrap_ww_skills">
                    <div className="write_skills">Java</div>
                    <div className="write_skills2">intermediet</div>
                  </div>
                </div>



                <div className="tools_cover_skills">
                  <div className="image_cover_skills">
                    <img src={Sass} className="image_skills" />
                  </div>
                  <div className="wrap_ww_skills">
                    <div className="write_skills">SASS</div>
                    <div className="write_skills2">Expert</div>
                  </div>
                </div>


                <div className="tools_cover_skills">
                  <div className="image_cover_skills">
                    <img src={Css} className="image_skills" />
                  </div>
                  <div className="wrap_ww_skills">
                    <div className="write_skills">CSS</div>
                    <div className="write_skills2">Expert</div>
                  </div>
                </div>


                <div className="tools_cover_skills">
                  <div className="image_cover_skills">
                    <img src={Mysql} className="image_skills" />
                  </div>
                  <div className="wrap_ww_skills">
                    <div className="write_skills">MySql</div>
                    <div className="write_skills2">Expert</div>
                  </div>
                </div>


                <div className="tools_cover_skills">
                  <div className="image_cover_skills">
                    <img src={Php} className="image_skills" />
                  </div>
                  <div className="wrap_ww_skills">
                    <div className="write_skills">PHP</div>
                    <div className="write_skills2">Expert</div>
                  </div>
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