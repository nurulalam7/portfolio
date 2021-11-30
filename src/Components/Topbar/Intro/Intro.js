import React from 'react'
import './Intro.css'
import profile from '../../image/profilepic.jpg'
import arrow from '../../image/arrow2.png'

const Intro = () => {
    return (
        <div className="intro" id="intro">
           <div className="left">
               <div className="imgcontainer">
                   <img src={profile} alt="" />
               </div>
           </div>
           <div className="right">
              <div className="wrapperF">
                 
                <h4>Hi There ,I`am</h4>
                <h1>Nurul alam</h1>
                <h3>full stack <span> web developer</span></h3>
                <div className="ico">
                <a href='https://www.facebook.com/profile.php?id=100007789508072'> <i class="fab fa-facebook-square"></i></a>
                <a href="https://www.linkedin.com/in/nurul-alam-0418971bb/"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/nurulalam7"><i class="fab fa-github"></i></a>
                <button className="but"><a href="https://drive.google.com/file/d/1eXxhAHcZAD03-0_GI8RCMoGQVUsG_Yam/view?usp=sharing">download resume</a>
                </button>
                </div>
                <a href="#portfolio">
                  <img src={arrow} alt="" />
                </a>

              </div>
             
              
            </div>
        </div>
    )
}

export default Intro
