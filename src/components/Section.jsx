import React from 'react';
import '../styles/Section.scss';
import { motion } from "framer-motion";

const Section = ({
    h3,
    text,
    hasBtn=true,
    btnTxt,
    imgSrc,
    imgSize="70%",
    backgroundColor,
    headingColor,
    textColor,
    btnBgColor,
    btnColor
}) => {

    
  const headingOptions={
    initial:{
      y:"-100%",
      opacity:0,
    },
    whileInView:{
      y:0,
      opacity:1,
    }
  }

  const textOptions={
    ...headingOptions,
    transition:{
      delay:0.3,
    }
  }

  const buttonOptions={
    initial:{
      y:"100%",
      opacity:0,
    },
    whileInView:{
      y:0,
      opacity:1,
    },
    transition:{
      delay:0.3,
      ease:"easeIn"
    }
  }

  const imgOptions={
    initial:{
      scale:0.1,
      opacity:0,
    },
    whileInView:{
      scale:1,
      opacity:1,
    },
    transition:{
      delay:0.3,
    }
  }

    
  return (
    <div className='section' style={{
        backgroundColor:backgroundColor,
        }}>
        <div>
            <motion.h3 
                style={{
                   color:headingColor, 
                }}
                data-cursorPointer={true}
                {...headingOptions}
            >
                {h3}
            </motion.h3>

            <motion.p
                style={{
                    color:textColor, 
                }}
                // data-cursorPointer={true}
                {...textOptions}
            >
                {text}
            </motion.p>

            {hasBtn && (
            <motion.button
            style={{
                color:btnColor, 
                backgroundColor:btnBgColor,
             }}
             data-cursorPointer={true}
             {...buttonOptions}
            >
                {btnTxt}
            </motion.button>)}

                   
            <motion.div {...imgOptions}>
            <img src={imgSrc} alt="img" 
                    style={{
                        width:imgSize, 
                    }}
                    
                />
            </motion.div>
        </div>
        
    </div>
  )
}

export default Section