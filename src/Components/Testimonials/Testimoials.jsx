import React, { useState } from "react";
import "./testimonil.css";
import leftArrow from "../../assets/leftArrow.png";
import righttArrow from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
import { motion } from "framer-motion";

const Testimoials = () => {
  const transition = { typeof: "spring", duration: 3 };

  const [selected, steSelected] = useState(0);
  const tlenght = testimonialsData.length;
  return (
    <div className="testimonials" id="Testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="strock-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <motion.span
        key={selected}
        initial={{ opacity: 0,x:-100 }}
        animate={{opacity:1,x:0}}
        exit={{opacity:0 ,x:-100}}
        transition={transition}
        
        >{testimonialsData[selected].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
        initial={{ opacity: 0,x:-100 }}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1 ,x:0}}
        ></motion.div>
        <motion.div
        initial={{ opacity: 0,x:100 }}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1 ,x:0}}
        
        ></motion.div>
        <motion.img
        key={selected}
        initial={{ opacity: 0,x:100 }}
        animate={{opacity:1,x:0}}
        exit={{opacity:0 ,x:-100}}
        transition={transition}
         src={testimonialsData[selected].image} alt="" srcset="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? steSelected(tlenght - 1)
                : steSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />

          <img
            onClick={() => {
              selected === tlenght - 1
                ? steSelected(0)
                : steSelected((prev) => prev + 1);
            }}
            src={righttArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimoials;
