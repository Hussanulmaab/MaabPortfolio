import React from 'react'
import "./about.css"
import {Typography} from "@mui/material"
import Particle2 from '../Particle/Particle2'
import Image from "../../images/my.jpg"

const About = () => {
  return (
    <div className='about'>
        <div className="aboutContainer"></div>
        <div className="aboutContainer2">

            <div>
                <img className='aboutAvatar' src={Image} alt="" />
                <Typography variant='h4'>Hussan ul Maab</Typography>
                <Typography>Full stack developer</Typography>
            </div>

            <div>
                <Typography
                    style={{ 
                            wordspacing : "1.5px", 
                            lineHeight: "25px", 
                            letterSpacing: "1.5px",
                            textAlign : "right",
                            }}>
                        Hi, My name is Hussan ul Maab and I have quality experience in the field of web and mobile deveopemnt as I have worked in this field for almost 2 years. I make ecommerce, portfolio, buisness websites and apps using Html5, Css, Javascript, mongo, react, express, three.js, Restful API's, Postman, Wordpress, shopify for full stack development. I can be your long awaited web-app designer and developer.
                        My key-expertise involve the following
                        1 - Web development
                        2 - Database making and management
                        3 - ecommerce platform
                        4 - graphic design
                        5 - UI/UX design
                        6- Animated 3d Websites
                </Typography>
            </div>
        </div>
        <Particle2 />
    </div>  
  )
}

export default About
