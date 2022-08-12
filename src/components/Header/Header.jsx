import React from 'react'
import {ReactNavbar} from 'overlay-navbar'
import logo from "../../images/logo.png"
import "./header.css"

function Header() {
  return <ReactNavbar
    navColor1="white"
    navColor2="hsl(233, 100%, 75%)"
    burgerColor="hsl(250, 100%, 75%)"
    burgerColorHover="hsl(250, 100%, 75%)"
    logo={logo}
    logoWidth="250px"
    logoHoverColor="hsl(250, 100%, 75%"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    link1Text="Home"
    link2Text="About"
    link3Text="Projects"
    link4Text="Contact"
    link1Url="/"
    link2Url="/About"
    link3Url="/Projects"
    link4Url="/Contact"
    link1Color="white"
    link1ColorHover="HSL(250, 100%, 75%)"
    link1Size="1.5rem"
    link1Padding="3vmax"
  />;
}

export default Header
