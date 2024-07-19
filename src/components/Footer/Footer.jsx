import React from 'react'
import "./footer.css"
import {Typography} from "@mui/material"
import { Link } from "react-router-dom"
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="new-footer">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/hussan-ul-maab-92a595222/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin /> LinkedIn
        </a>
        <a href="mailto:h.ulmaab431@gmail.com" target="_blank" rel="noopener noreferrer">
          <BsEnvelope /> Email
        </a>
        <a href="https://github.com/Hussanulmaab/Maabportfolio" target="_blank" rel="noopener noreferrer">
          <BsGithub /> Github
        </a>
      </div>
    </div>
  )
}

export default Footer
