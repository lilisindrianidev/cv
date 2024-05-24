import { Component } from "react";
import Fb from "./../assets/images/social media/facebook.png"
import Wa from "./../assets/images/social media/whatsapp.png"
import Email from "./../assets/images/social media/mail.png"
import Tel from "./../assets/images/social media/phone.png"
import Ig from "./../assets/images/social media/instagram.png"
import Li from "./../assets/images/social media/linkedin.png"

class ContactMe extends Component{
  render(){
    return(
      <div className="contactMe">
        <div className="wrap_contact">
          <div className="title_contact">Contact Me</div>
          <div className="social_media">
            <div className="write_social">
              <img src={Fb} className="media_img"/>
            </div>
            <div className="write_social">
              <img src={Wa} className="media_img"/>
            </div>
            <div className="write_social">
              <img src={Email} className="media_img"/>
            </div>
            <div className="write_social">
              <img src={Tel} className="media_img"/>
            </div>
            <div className="write_social">
              <img src={Ig} className="media_img"/>
            </div>
            <div className="write_social">
              <img src={Li} className="media_img"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ContactMe