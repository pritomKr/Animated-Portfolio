import React, { useEffect, useState } from 'react';
import './AboutTest.scss';
import { motion } from 'framer-motion';

function AboutTest({scrollPosition}) {
  const [hasAnimated,setHasAnimated] = useState(0);
  const [animateNum,setAnimateNum] = useState(0);


  const handleSectionName=(scrollPosition)=>{
    if(scrollPosition>=130 && scrollPosition<=209){
      setAnimateNum(1);
    }else if(scrollPosition>=210 && scrollPosition<=320){
      setAnimateNum(2);
    }else if(scrollPosition>=321 && scrollPosition<=409){
      setAnimateNum(3);
    }else if(scrollPosition>=410 && scrollPosition<=440){
      setAnimateNum(4);
    }else if(scrollPosition>=441 && scrollPosition<=568){
      setAnimateNum(5);
    }else if(scrollPosition>=568){
      setAnimateNum(6);
    }
    
  }
  useEffect(()=>{
    handleSectionName(scrollPosition);
    if(animateNum > (hasAnimated)){
      setHasAnimated(animateNum)
    };
    
  },[scrollPosition,animateNum]);


  const linkVariant= (id) => ({
    initial: {
      y: -20,
      opacity: 0
    },
    animate: {
      y:0,
      opacity:1,
      staggerChildren: 0.2,
      transition: {
        delay : 0.8 + (id * 0.2),
      }
    }
});
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
        y: '0%'
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
        <div className="about_container" >
            <div className="about_header">
              <div className="header_text">
                <motion.div
                  variants={greenBgVariant}
                  initial="initial"
                  animate={(hasAnimated<=6 && hasAnimated>=1) && "animate"}
                ></motion.div>
                <motion.div
                  variants={textVariant}
                  initial="initial"
                  animate={(hasAnimated<=6 && hasAnimated>=1) && "animate"}
                >
                   <h1>About<span>.</span></h1>
                </motion.div>
              </div>
              <div className="header_line">
                <div className="line"></div>
              </div>
            </div>
            <div className="about_content">
              <div className="left">
                <div className="content">
                  <motion.div
                    variants={greenBgVariant}
                    initial="initial"
                    animate={(hasAnimated<=6 && hasAnimated>=2) && "animate"}
                  ></motion.div>
                  <motion.div
                    variants={textVariant}
                    initial="initial"
                    animate={(hasAnimated<=6 && hasAnimated>=2) && "animate"}
                  >
                    🌟 MERN Stack Developer with a background from Khulna University of Engineering and Technology and experience at Accenture. Proficient in React.js for front-end, Node.js/Express.js for backend, and MongoDB for data management, ensuring robust and secure web applications.
                  </motion.div>
                </div>
                <div className="content">
                  <motion.div
                    variants={greenBgVariant}
                    initial="initial"
                    animate={(hasAnimated<=6 && hasAnimated>=3) && "animate"}
                  ></motion.div>
                  <motion.div
                    variants={textVariant}
                    initial="initial"
                    animate={(hasAnimated<=6 && hasAnimated>=3) && "animate"}
                  >
                    🎨 Passionate about design, I specialize in responsive web development and utilize tools like SASS, Tailwind CSS, and Framer Motion to create visually appealing and interactive user experiences.
                  </motion.div>
                </div>
                <div className="content">
                  <motion.div
                    variants={greenBgVariant}
                    initial="initial"
                    animate={(hasAnimated<=6 && hasAnimated>=5) && "animate"}
                  ></motion.div>
                  <motion.div
                    variants={textVariant}
                    initial="initial"
                    animate={(hasAnimated<=6 && hasAnimated>=5) && "animate"}
                  >
                    👥 Eager to collaborate on exciting web projects, I bring a blend of technical expertise and creative flair to the table. Let's connect and innovate together! 🚀
                  </motion.div>
                </div>
              </div>
              <div className="right">
                <div className="about_work" >
                  <motion.div
                    variants={greenBgVariant}
                    initial="initial"
                    animate={(hasAnimated<=6 && hasAnimated>=2) && "animate"}
                  ></motion.div>
                  <motion.div
                    variants={textVariant}
                    initial="initial"
                    animate={(hasAnimated<=6 && hasAnimated>=2) && "animate"}
                  >
                    <div className="about_work_container">
                      <div className="work_heading">
                        <h4>
                          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"></path></svg>
                          <span>Use at work</span>
                        </h4>
                      </div>
                      <div className="work_content">
                          <div className="stack">HTML</div>
                          <div className="stack">CSS</div>
                          <div className="stack">JavaScript</div>
                          <div className="stack">React</div>
                          <div className="stack">Redux</div>
                          <div className="stack">NodeJS</div>
                          <div className="stack">Express</div>
                          <div className="stack">MongoDB</div>
                          <div className="stack">GitHub</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="about_fun">
                <motion.div
                    variants={greenBgVariant}
                    initial="initial"
                    animate={(hasAnimated<=6 && hasAnimated>=4) && "animate"}
                  ></motion.div>
                  <motion.div
                    variants={textVariant}
                    initial="initial"
                    animate={(hasAnimated<=6 && hasAnimated>=4) && "animate"}
                  >
                    <div className="about_fun_container">
                      <div className="fun_heading">
                        <h4>
                          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg>
                          <span>Use for fun</span>
                        </h4>
                      </div>
                      <div className="fun_content">
                        <div className="stack">Tailwind</div>
                        <div className="stack">Framer Motion</div>
                        <div className="stack">Figma</div>
                        <div className="stack">Python</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="about_footer">
              <div className="links_and_texts">
                <motion.div
                  variants={greenBgVariant}
                  initial="initial"
                  animate={(hasAnimated==6) && "animate"}
                ></motion.div>
                <motion.div
                  variants={textVariant}
                  initial="initial"
                  animate={(hasAnimated==6) && "animate"}
                >
                  <div className="links_and_texts_container">
                    <div className="texts">
                      <motion.h4
                      initial={{opacity:0}}
                      animate={(hasAnimated==6) && {opacity:1}}
                      transition={{delay:0.5}}
                      >
                        My Links
                      </motion.h4>
                      <motion.svg 
                      initial={{opacity:0}}
                      animate={(hasAnimated==6) && {opacity:1}}
                      transition={{delay:0.5}}
                      viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></motion.svg>
                    </div>
                    <div className="links">
                      {
                            [
                      {icon_href:"#",icon_d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"},
                      {icon_href:"#",icon_d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},
                      {icon_href:"#",icon_d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"}
                      ].map((icon,i)=>(
                          <a href={icon.icon_href}>
                                    <motion.svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="2.4rem" xmlns="http://www.w3.org/2000/svg"
                                    variants={linkVariant(i)}
                                    initial="initial"
                                    animate={(hasAnimated==6) && "animate"}
                                    >
                                    <path d={icon.icon_d}></path>
                                    </motion.svg>
                                </a>
                            ))
                        }
                        </div>
                  </div>
                </motion.div>
              </div>
            </div>
        </div>
    </>
  )
}

export default AboutTest