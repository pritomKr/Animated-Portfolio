import React, { useEffect, useState } from 'react';
import './Hero.scss';
import profile_image from './../assets/images/image.png';
import {motion} from 'framer-motion';

const Hero = () => {
    const [borderColor,setBordercolor] = useState("#0AFF9D");
    const colors = ["red", "blue", "#0AFF9D", "yellow", "orange"]; // Array of colors

    const handleClick = (e) => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        e.target.style.backgroundColor=colors[randomIndex];

    }



    const greenBgVariant={
        initial:{
            width:'100%',
            height:'100%', 
            x: 0 ,
            backgroundColor:'#0AFF9D'
        },
        animate:{
            x: "100%",
            width:'0%',
            height:'100%',
            transition:{
                duration: 0.8,
                delay: 0.2
            } 
        }
      };
      const textVariant={
        initial:{
            width:'100%',
            height:'100%', 
            y: '100px'
        },
        animate:{
            width:'100%',
            height:'100%', 
            y: '-100%',
            transition:{
                delay:.5,
                duration: .5
            } 
        }
      };
      
    
  return (
    <>
        <div className="hero_section">
            <div className="container">
                <div className="hero_text">
                    <div className="hero_text_box">
                        <h1>
                            <motion.div
                                variants={greenBgVariant}
                                initial="initial"
                                animate="animate"
                            ></motion.div>
                            <motion.div
                                variants={textVariant}
                                initial="initial"
                                animate="animate"
                            >
                                Hey, I'm Pritom<span>.</span>
                            </motion.div>
                        </h1>

                        <h3>
                            <motion.div
                                    variants={greenBgVariant}
                                    initial="initial"
                                    animate="animate"
                            ></motion.div>
                            <motion.div
                                variants={textVariant}
                                initial="initial"
                                animate="animate"
                            >
                                I'm a <span>Full Stack Developer</span>
                            </motion.div>
                        </h3>

                        <p>
                            <motion.div
                                    variants={greenBgVariant}
                                    initial="initial"
                                    animate="animate"
                            ></motion.div>
                            <motion.div
                                variants={textVariant}
                                initial="initial"
                                animate="animate"
                            >
                                🌟 MERN Stack Developer with a knack for creative web solutions. Skilled in React.js, Node.js/Express.js, and MongoDB. Loves crafting responsive designs and animations with SASS, Tailwind CSS, and Framer Motion. Let's team up and innovate in web development! 🚀
                            </motion.div>
                        </p>
                        <div className='contact_btn'>
                            <motion.div
                                    variants={greenBgVariant}
                                    initial="initial"
                                    animate="animate"
                            ></motion.div>
                            <motion.div
                                variants={textVariant}
                                initial="initial"
                                animate="animate"
                            >
                                <button><a href="#contact">Contact me</a></button>
                            </motion.div>
                            
                        </div>
                    </div>
                </div>
                <div className="hero_image">
                    <div className="img_container">
                        <motion.div
                        initial={{opacity:1}} 
                        animate={{opacity:0}}
                        transition={{delay: 0.5, duration:0.3}}
                        className="circle_svg"
                        >
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path 
                                initial={{pathLength:0}}
                                animate={{pathLength:1}}
                                transition={{duration:0.5}}
                                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </motion.div>
                        <motion.img 
                        initial={{opacity:0}} 
                        animate={{opacity:1}}
                        transition={{delay: 0.4, duration:0.3}}
                        onClick={handleClick}
                        src={profile_image} alt="Pritom Karmoker" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero