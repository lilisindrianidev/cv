import { Component, useEffect } from "react";
import BookMe from '../assets/images/book.png'
import Me from '../assets/images/girl2.png'
import Aos from 'aos';
import "aos/dist/aos.css";

const AboutMe =()=>{
  useEffect(()=>{
  Aos.init({duration:2000});
  }, []);
    return(
      
    
      <div id="Ame" className="aboutMe">

        <div className="cover_aboutMe">

          <section className="cover_aboutme2">
            <div className="title_aboutMe">Get to know more About Me...
              <div className="cover_write_aboutMe">
                <div className="write_aboutMe">
                  <p>
                    My name is Lilis Indriani, i was born on April 24th, 2000. I am frontend developer for web apps. I am from Pekalongan based in Yogyakarta over 4 years.

                  </p>

                  <p>
                    I am a critical thinker, work creatively, able to work on team, and able to create new innovations using code that hopefully will bring the best progress in the future.
                  </p>
                </div>

              </div>
            </div>


            <div data-aos="flip-left" className="cover_me hello0">
              <img src={Me} className="me" />
            </div>
          </section>
          {/* <div className="book_me">
            <img src={BookMe} className="book_me_img"/> 
           </div>   */}

        </div>
      </div>
    )
          
}
export default AboutMe