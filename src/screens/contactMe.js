import { Component } from "react";
import Fb from "./../assets/images/social media/facebook.png"
import Wa from "./../assets/images/social media/whatsapp.png"
import Tel from "./../assets/images/social media/telegram.png"
import Ig from "./../assets/images/social media/instagram.png"
import Li from "./../assets/images/social media/linkedin.png"

class ContactMe extends Component {
  render() {
    return (
      <div id="Cme" className="contactMe">
        <div className="wrap_contact">
          <div className="title_contact">Contact me</div>
          <div data-aos="fade" className="social_media fade_in">
            <div className="write_social">
              <img src={Fb} className="media_img" />
              {/* <div className="write_social"> Facebook</div> */}
            </div>
            <div className="write_social">
              <img src={Wa} className="media_img" />
              {/* <div className="write_social">WhatsApp</div> */}
            </div>

            <div className="write_social">
              <img src={Tel} className="media_img" />
              {/* <div className="write_social">Telephone</div> */}
            </div>
            <div className="write_social">
              <img src={Ig} className="media_img" />
              {/* <div className="write_social">Instagram</div> */}
            </div>
            <div className="write_social">
              <img src={Li} className="media_img" />
              {/* <div className="write_social">LinkedIn</div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ContactMe