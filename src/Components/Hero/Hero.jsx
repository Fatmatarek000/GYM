import React from "react";
import "./hero.css";
import Header from "./../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {
  const transition = { typeof: "spring", duration: 3 };
  return (
    <div className="hero" id="Home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
          
          initial={{ left: "238px" }}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="strock-text">SHAPE</span>
            <span> YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div>
            <span>
              In here we will help you shape and build your ideal body and live
              up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
            <NumberCounter end={140} start={100} delay='4' preFix="+"/>
            </span>
            <span>EXPERTS COACHES</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={900} delay='4' preFix="+"/></span>
            <span>MEMBERS JOIN</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={33} delay='4' preFix="+"/></span>
            <span> FITNESS PROGRAMS</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Srarted</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
        transition={transition} 
        initial={{ right: "-1rem" }}
        whileInView={{right:'3rem'}}
        className="heart-rate">
          <img src={Heart} alt="" srcset="" />
          <span>Heart Rate</span>
          <span>1166 bpm</span>
        </motion.div>
        <img src={hero_image} alt="" srcset="" className="hero_image" />
        <motion.img
          src={hero_image_back}
          transition={transition} 
          initial={{ right: "11rem" }}
          whileInView={{right:'20rem'}}
          alt=""
          srcset=""
          className="hero_image_back"
        />
        <motion.div
        transition={transition} 
        initial={{ right: "37rem" }}
        whileInView={{right:'28rem'}}
          className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
