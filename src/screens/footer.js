import { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <div className="footer" >
        <div className="cover_footer">

          <div className="address">
            <h3 className="write_add"> Address:</h3>
            <div className="wrap_img_add">
              <div className="second_wrap">
                {/* <img src={Address} className="add_img" /> */}
                <h3 className="add_write">
                  RT1 RW1, Dukuh Brunyah, Taggeran Village, Paninggaran Subdistrict,
                  Pekalongan District, Central Java, Indonesia
                </h3>
              </div>

              <div className="second_wrap">
                {/* <img src={Phone} className="add_img" /> */}
                <h3 className="add_write">
                  082 124 457 564
                </h3>
              </div>

              <div className="second_wrap">
                   {/* <img src={Mail} className="add_img" /> */}
                <h3 className="add_write">
                  lilisindriani.blog@gmail.com
                </h3>
              </div>

            </div>
            <div className="explain_footer">
              <a href="#moreinfo2" className="ex_write" id="moreinfo"> Home</a>

            </div>
          </div>
        </div>



      </div>
    )
  }
}
export default Footer
