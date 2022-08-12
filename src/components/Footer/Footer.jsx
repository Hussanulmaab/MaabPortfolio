import React from 'react'
import "./footer.css"
import {Typography} from "@mui/material"
import { Link } from "react-router-dom"
import { BsGithub,BsLinkedin } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="footer">
        <div>
            <Typography variant="h5" >About Me</Typography>
            <Typography>
                Hi, I am Hussan ul Maab, A front-end and back-end developer, designer and freelancer.
            </Typography>
            <Link to="/contact" className="footerContactBtn">
                <Typography>Contact Us</Typography>
            </Link>
        </div>
        <div>
            <Typography vairant="h5"> Social Media</Typography>
            <a href="https://github.com/Hussanulmaab/Maabportfolio">
                <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/hussan-ul-maab-92a595222/">
                <BsLinkedin />
            </a>
            <Typography variant="h6" >MAIL : h.ulmaab431@gmail.com</Typography>
        </div>
    </div>
  )
}

export default Footer
