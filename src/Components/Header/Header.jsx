import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOPened, setMenuOPened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" srcset="" className="logo" />
      {menuOPened === false && mobile === true ? (
        <div style={{backgroundColor:'var(--appColor)',padding:"0.5rem",borderRadius:"5px"}}
        onClick={()=>setMenuOPened(true)}
        
        >
          <img src={Bars} alt="" style={{width:'1.5rem', height:'1.5rem'}}/>
        </div>
      ) : (
        <ul className="header-menu">
          <li>
          <Link
           onClick={()=>setMenuOPened(false)} 
          to={"Home"}
          activeClass="active"
          spy={true}
          smooth={true}
          >Home</Link>
          </li>
          <li>
          <Link
           onClick={()=>setMenuOPened(false)} 
          to={"programs"}
          activeClass="active"
          spy={true}
          smooth={true}
          >Programs</Link>
          </li>
          <li>
          <Link
           onClick={()=>setMenuOPened(false)} 
          to={"reasons"}
          activeClass="active"
          spy={true}
          smooth={true}
          > Why Us</Link>
          </li>
          <li>
          <Link
           onClick={()=>setMenuOPened(false)} 
          to={"Plans"}
          activeClass="active"
          spy={true}
          smooth={true}
          >Plans</Link>
          </li>
          <li>
          <Link
           onClick={()=>setMenuOPened(false)} 
          to={"Testimonials"}
          activeClass="active"
          spy={true}
          smooth={true}
          >Testimonials</Link>
          </li>
       
        </ul>
      )}
    </div>
  );
};

export default Header;
