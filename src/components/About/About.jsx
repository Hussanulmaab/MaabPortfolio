import React from 'react';
import './about.css';
import { Typography } from '@mui/material';
import Particle from '../Particle/Particle';
import Image from '../../images/my.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className='aboutContainer'></div>
      <div className='aboutContainer2'>
        <div className='aboutContent'>
          <img className='aboutAvatar' src={Image} alt='Hussan ul Maab' />
          <Typography variant='h4' className='aboutHeading'>Hussan ul Maab</Typography>
          <Typography className='aboutSubtitle'>Full Stack Developer</Typography>
          <Typography className='aboutText'>
            As a dedicated Software Developer with a solid background in Computer Science, I offer extensive experience in both Web Development and Network Software Development. Proficient in languages like Python, C++, and TypeScript, I have successfully utilized frameworks such as Next.js and the MERN Stack to build robust web applications. My professional experience includes developing a secure communication system and error correction software for networks at the National Institute of Lasers and Optronics (NILOP), demonstrating my ability to handle complex projects. I have also created a video conferencing application and an e-commerce site, showcasing my web development skills. With a Bachelor's degree from the Pakistan Institute of Engineering and Applied Sciences (CGPA: 3.38/4) and hands-on experience in various projects, I am well-equipped to contribute effectively to any software development team.
          </Typography>
        </div>
      </div>
      <Particle />
    </div>
  );
};

export default About;
