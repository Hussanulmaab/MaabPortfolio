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
                        Hi, My name is Hussan ul Maab and I am a Bachelor of Computer Science student from PIEAS. I possess a diverse skill set across
                        multiple fields, including development, copywriting, and machine learning algorithms. My proficiency in the MERN
                        stack has provided me with extensive knowledge in creating dynamic websites, while my experience in creating and
                        deploying WordPress websites has further enhanced my expertise in this field. Additionally, I have valuable
                        experience in creating search engine-optimized content on WordPress, which has contributed to my knowledge in
                        content creation for online visibility.
                        My key-expertise involve the following
                        1 - Web development
                        2 - Machine Learning Algorithms
                        2 - Database making and management
                        3 - ecommerce platform
                        5 - UI/UX design
                </Typography>
            </div>
        </div>
        <Particle2 />
    </div>  
  )
}

export default About
