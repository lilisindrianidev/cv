import { Component } from "react";
import Hs from "../assets/images/hs.png"
import Uni from "../assets/images/uni.png"


class Education extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="Edu" className="education">
        <div className="edu_wrap">
          <div className="edu_title">
            Look at my education stories
          </div>
          <div className="cover_img_edu">
            <div className="cover_edu_img_hs">
              <img src={Hs} className="img_hs" />
              <div className="hs"> High school
                <div className="detail_hs">
                  SMAN 1 PAninggaran
                </div>
                <div className="detail_hs">
                  Science
                </div>
              </div>

            </div>
            <div className="cover_edu_img_uni">
              <img src={Uni} className="img_uni" />
              <div className="university"> University
                <div className="detail_uni">
                  Universitas teknologi digotal indonesia
                </div>
                <div className="detail_uni">
                  Computer Science
                </div>
                <div className="detail_uni">
                  GPA : 3.64
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    )
  }
}
export default Education