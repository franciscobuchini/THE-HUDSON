import React from "react";
import TheHudsonLogo from "../assets/TheHudsonLogo.svg"
import Instagram from "../assets/Instagram.svg"
import Facebook from "../assets/Facebook.svg"
import "../stylesheets/navbar.css"

function Navbar(props) {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img className="website-logo" src={TheHudsonLogo} />
      </div>
      <div className="buttons-container">
        <a href="#Booking"><button>{props.button1}</button></a>
        <a href="#Functions"><button>{props.button2}</button></a>
        <a href="#DailyDeals"><button>{props.button3}</button></a>
        <a href="#Eat"><button>{props.button4}</button></a>
        <a href="#Drink"><button>{props.button5}</button></a>
        <a href="#Contact"><button>{props.button6}</button></a>
        <div className="socialmedia-container">
          <a><img className="website-logo" src={Facebook} /></a>
          <a><img className="website-logo" src={Instagram} /></a>
        </div>
      </div>

    </div>
  )
}

export default Navbar