import React,{useState,useEffect} from 'react';
import './Contact.scss';
import { motion } from 'framer-motion';

export const Contact = ({scrollPosition}) => {
    const [hasAnimated,setHasAnimated] = useState(0);
  const [animateNum,setAnimateNum] = useState(0);


  const handleSectionName=(scrollPosition)=>{
    if(scrollPosition>=2090 && scrollPosition<=2189){
      setAnimateNum(1);
    }else if(scrollPosition>=2090 && scrollPosition<=2304){
        setAnimateNum(2);
    }else if(scrollPosition>=2305){
        setAnimateNum(3);
    }
  }

  useEffect(()=>{
    handleSectionName(scrollPosition);
    if(animateNum > (hasAnimated)){
      setHasAnimated(animateNum)
    };
    console.log(hasAnimated)
  },[scrollPosition,animateNum]);

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
        <div className="contact">
            <div className="contact_container">
                <div className="contact_header">
                    <motion.div
                    variants={greenBgVariant}
                    initial="initial"
                    animate={(hasAnimated<=3 && hasAnimated>=1) && "animate"}
                    ></motion.div>
                    <motion.div
                    variants={textVariant}
                    initial="initial"
                    animate={(hasAnimated<=3 && hasAnimated>=1) && "animate"}
                    >
                        <div className="header">
                            <h1>Contact<span>.</span></h1>
                        </div>
                    </motion.div>
                </div>
                <div className="contact_content">
                    <motion.div
                    variants={greenBgVariant}
                    initial="initial"
                    animate={(hasAnimated<=3 && hasAnimated>=1) && "animate"}
                    ></motion.div>
                    <motion.div
                    variants={textVariant}
                    initial="initial"
                    animate={(hasAnimated<=3 && hasAnimated>=1) && "animate"}
                    >
                        <div className="content">
                            <p>Shoot me an email if you want to connect! You can also find me on <span>Linkedin</span> or <span>Twitter</span> if that's more your speed.</p>
                        </div>
                    </motion.div>
                </div>
                <div className="contact_footer">
                    <motion.div
                    variants={greenBgVariant}
                    initial="initial"
                    animate={(hasAnimated<=3 && hasAnimated>=1) && "animate"}
                    ></motion.div>
                    <motion.div
                    variants={textVariant}
                    initial="initial"
                    animate={(hasAnimated<=3 && hasAnimated>=1) && "animate"}
                    >
                        <div className="footer">
                            <div className="footer_items">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.4rem" width="2.4rem" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path></svg>
                                <p>pritomkarmoker170@gmail.com</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  )
}
