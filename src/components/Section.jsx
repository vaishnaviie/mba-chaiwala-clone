import React from 'react';
import '../styles/Section.scss';

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
    
  return (
    <div className='section' style={{
        backgroundColor:backgroundColor,
        }}>
        <div>
            <h3 
                style={{
                   color:headingColor, 
                }}
            >
                {h3}
            </h3>

            <p
                style={{
                    color:textColor, 
                }}
            >
                {text}
            </p>

            {hasBtn && (
            <button
            style={{
                color:btnColor, 
                backgroundColor:btnBgColor,
             }}
            >
                {btnTxt}
            </button>)}
                <img src={imgSrc} alt="img" 
                    style={{
                        width:imgSize, 
                    }}
                />
            <div>

            </div>
        </div>
        
    </div>
  )
}

export default Section