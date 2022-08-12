import React from 'react'
import './home.css'
import Particle from '../Particle/Particle'
import { Typography } from "@mui/material"
import nodeImage from "../../images/node.png"
import wordpressImage from "../../images/wordpress2.png"
import threeImage from "../../images/three2.png"
import { useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect';

const Home = () => {
  
  return ( 
    <div className='home'>
      <div className="content">
        <div className="heading">
          <h1>Hi, I am Hussan ul Maab</h1>
          <h2>A Freelancer, Developer, Designer, Hohi</h2>
          <div className="headingMove">
          <Typewriter 
            className="typewriter"
            options={{ 
            strings:["React", "Node", "Express", "Mongo"],
            autoStart:true,
            delay:75,
            loop:true
            }}
           /> 
          </div>
        </div>

       <div className="homeSkills">

        <Typography variant="h2">SKILLS</Typography>

         <div className="homeCubeSkills">
             <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
               <img src={wordpressImage} />
             </div>
             <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Face2" />
             </div>
             <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
               <img src="https://webimages.mongodb.com/_com_assets/cms/kusb9stg1ndrp7j53-MongoDBLogoBrand1.png?auto=format%252Ccompress" alt="Face3" />
             </div>
             <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
               <img src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png" alt="Face4" />
             </div>
             <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
               <img src={nodeImage} alt="Face5" />
             </div>
             <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
               <img src={threeImage} alt="Face6" />
             </div>
         </div>
        </div>

        </div>
        <Particle />
    </div>
  )
}

export default Home

