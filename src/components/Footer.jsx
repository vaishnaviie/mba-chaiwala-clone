import React from "react";
import '../styles/Footer.scss';

const Footer = () => {

    const footerLinks=(element)=>{
        const allFooterLinks=document.querySelectorAll(".footerLinks");

        switch (element) {
            case 0:
                allFooterLinks.forEach((item,index)=>
                    {index===0?(item.style.opacity=1):(item.style.opacity=0.2)}
                )
                break;

            case 1:
                allFooterLinks.forEach((item,index)=>
                    {index===1?(item.style.opacity=1):(item.style.opacity=0.2)}
                )
                break;
            case 2:
                allFooterLinks.forEach((item,index)=>
                    {index===2?(item.style.opacity=1):(item.style.opacity=0.2)}
                )
                break;
            case 3:
                allFooterLinks.forEach((item,index)=>
                    {index===3?(item.style.opacity=1):(item.style.opacity=0.2)}
                )
                break;
            case 4:
                allFooterLinks.forEach((item,index)=>
                    {index===4?(item.style.opacity=1):(item.style.opacity=0.2)}
                )
                break;
            case 5:
                allFooterLinks.forEach((item,index)=>
                    {index===5?(item.style.opacity=1):(item.style.opacity=0.2)}
                )
                break;
        
            default: allFooterLinks.forEach((item,index)=>{
                item.style.opacity=1
            });
                break;
        }
    }

    const linksBackToNormal=()=>{
        const allFooterLinks=document.querySelectorAll(".footerLinks");

        allFooterLinks.forEach((item,index)=>{
            item.style.opacity=1
        });
    }

  return (
    <>
      <footer>
        <h1>
          Let's
          <br />
          #connectOnCutting?
        </h1>
        <aside onMouseLeave={linksBackToNormal}>
          <a href="/" className="footerLinks" onMouseOver={()=>footerLinks(0)}>Home</a>
          <a href="/" className="footerLinks" onMouseOver={()=>footerLinks(1)}>Story</a>
          <a href="/" className="footerLinks" onMouseOver={()=>footerLinks(2)}>Media</a>
          <a href="/" className="footerLinks" onMouseOver={()=>footerLinks(3)}>Franchise</a>
          <a href="/" className="footerLinks" onMouseOver={()=>footerLinks(4)}>Events</a>
          <a href="/" className="footerLinks" onMouseOver={()=>footerLinks(5)}>Chai Wala Cares</a>
        </aside>
        <div>
          <h5>Email</h5>
          <a href="mailto: info@mbachaiwala.com">Info@mbachaiwala.com</a>
          <a href="mailto: franchise@mbachaiwala.com">
            franchise@mbachaiwala.com
          </a>
        </div>
        <div>
          <h5>Phone</h5>
          <a href="tel: +917222905222">+917222905222</a>
        </div>

        <p>COPYRIGHT 2022 MBA CHAIWALA </p>
      </footer>

      <div className="footer"></div>
    </>
  );
};

export default Footer;
