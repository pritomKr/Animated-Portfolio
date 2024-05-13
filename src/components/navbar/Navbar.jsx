import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import {motion} from 'framer-motion';

const Navbar = ({scrollPosition}) => {
  const navVariant= (id) => ({
    initial: {
      x: -20,
      opacity: 0
    },
    animate: {
      x:0,
      opacity:1,
      staggerChildren: 0.2,
      transition: {
        delay : id * 0.2,
      }
    }
  });
  
  const [sectionName,setSectionName]=useState("hero");
  const handleSectionName=()=>{
    if(scrollPosition>=0 && scrollPosition<=600){
      setSectionName("hero");
    }else if(scrollPosition>=701 && scrollPosition<=1400){
      setSectionName("about");
    }else if(scrollPosition>=1401 && scrollPosition<=2100){
      setSectionName("projects");
    }else if(scrollPosition>=2101 && scrollPosition<=2800){
      setSectionName("contact");
    }
    
  }
  useEffect(()=>{
    handleSectionName();
  },[scrollPosition]);

  return (
    <>
        <nav>
            <div className="logo">
                <span className='logo_p'>P</span>
                <span className='logo_k'>K</span>
            </div>
            <div className="section_link">
                {[{sec_name: "About",sec_h:"about"},{sec_name: "Projects",sec_h:"projects"},{sec_name: "Contact",sec_h:"contact"}]
                 .map((sec,id)=>(
                  <motion.a 
                    href={`#${sec.sec_h}`} 
                    key={id} 
                    className={sectionName == sec.sec_h && 'active'}
                    variants={navVariant(id)}
                    initial="initial"
                    animate="animate"
                  >
                    {sec.sec_name}

                  </motion.a>
                ))}
            </div>

        </nav>
    </>
  )
}

export default Navbar