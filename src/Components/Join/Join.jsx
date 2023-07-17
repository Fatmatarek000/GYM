import React, { useRef } from "react";
import "./join.css";
import emailjs from '@emailjs/browser';
const Join = () => {

const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zws33e6', 'template_1fcphjj', form.current, 'xKm8sagJAlZd41Ki5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
      <hr />
        <div>
          <span className="strock-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="strock-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
      
  <form ref={form} className="email-container">
  <input type="email" name="user_email"  placeholder="Enter your Email Address here.."/>
  <button className="btn btn-j">Join Now</button>
  
  </form>
      </div>
    </div>
  );
};

export default Join;
