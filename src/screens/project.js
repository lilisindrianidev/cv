import { Component } from "react";
import Desa from '../assets/images/project/2.JPG';
import Desty from '../assets/images/project/1.JPG';
import Godot from '../assets/images/project/3.JPG';
import Market from '../assets/images/project/4.JPG';

class Project extends Component {
  render() {
    return (
      <div id="Project" className="project">
        <div className="cover_pro">
          <div className="title_pro">My Project</div>
          <div className="cover_inside_pro">
            <div className="cover_inside_pro2">
              <div className="cover_pro_image">
                <img src={Desa} className="pro_image" />
                <div className="pro_img_write">
                  Tanggeran Vilage Correspondence
                  (ReactJs, SCSS, Laravel, MySql)
                </div>
              </div>
              <div className="cover_pro_write">
                <div className="pro_write"></div>
              </div>
            </div>
            <div className="cover_inside_pro2">
              <div className="cover_pro_image">
                <img src={Desty} className="pro_image" />
                <div className="pro_img_write">
                  Desty
                  (ReactJs, SCSS)
                </div>
                {/* <div className="cover_pro_write">
                  <div className="pro_write">Desty</div>
                  <div className="pro_write2">ReactJs,SCSS</div>
                </div> */}
              </div>
              <div className="cover_pro_write">
                <div className="pro_write"></div>
              </div>
            </div>
            <div className="cover_inside_pro2">
              <div className="cover_pro_image">
                <img src={Godot} className="pro_image" />
                <div className="pro_img_write">
                  Godot (ReactJs, SCSS)
                </div>
              </div>
              <div className="cover_pro_write">
                <div className="pro_write"></div>
              </div>
            </div>
            <div className="cover_inside_pro2">
              <div className="cover_pro_image">
                <img src={Market} className="pro_image" />
                <div className="pro_img_write">
                  Market (ReactJs, SCSS, node.js)
                </div>
              </div>
              <div className="cover_pro_write">
                <div className="pro_write"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Project