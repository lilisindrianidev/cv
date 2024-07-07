import { Component } from "react"
import Email from "./../assets/images/social media/mail.png"
import Phone from "./../assets/images/social media/phone.png"
import Address from "./../assets/images/social media/address.png"

class Footer extends Component {
  render() {
    return (
      <div className="footer" >
        <div className="cover_footer">
          <div className="write_add"> Address:</div>
          <div className="address">

            <div className="wrap_img_add">
              <div className="second_wrap">
                <img src={Address} className="add_img" />
                <h3 className="add_write">
                  RT1 RW1, Dukuh Brunyah, Taggeran Village, Paninggaran Subdistrict,
                  Pekalongan District, Central Java, Indonesia
                </h3>
              </div>

              <div className="second_wrap">
                <img src={Phone} className="add_img" />
                <h3 className="add_write">
                  082 124 457 564
                </h3>
              </div>

              <div className="second_wrap">
                <img src={Email} className="add_img" />
                <h3 className="add_write">
                  lilisindriani.blog@gmail.com
                </h3>
              </div>

            </div>

          </div>


        </div>

        <div className="real_footer">
          <div className="write_real_footer">
            copyright&copy; 2024 Lilis Indriani
          </div>
        </div>
      </div>
    )
  }
}
export default Footer
