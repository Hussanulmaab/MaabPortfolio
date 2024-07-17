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
                            I am a committed and driven graduate student studying computer science, and I have developed a strong portfolio of work in the areas of applied mathematics, web development, and quantum cryptography. I earned a Bachelor's degree from the Pakistan Institute of Engineering and Applied Sciences after completing my studies there with a 3.33/4 CGPA.

                            In terms of real-world uses, I created a Next.js, TypeScript, Stream API, and Clerk Authentication API video conferencing application that was hosted on Vercel. My portfolio website, used React, Express, Node.js, and Particle.js to highlight my abilities and projects, is hosted on Netlify. In addition, I created a phone directory in C++, an image classification project with Convolutional Neural Networks, and an example e-commerce website utilizing the MERN stack.

                            I have extensive experience with databases, web development frameworks, and computer languages. I have experience with web development technologies like Next.js, TypeScript, and the MERN stack and am skilled in Python, C/C++, Matlab, and CUDA. In addition, I have experience with several web hosting platforms such as Vercel and Netlify.
                            
                            I have also taken part in global initiatives like the Womanium Quantum Summer Program 2023, which allowed me to network with other businesses that are currently developing quantum technology.
                </Typography>
            </div>
        </div>
        <Particle2 />
    </div>  
  )
}

export default About
