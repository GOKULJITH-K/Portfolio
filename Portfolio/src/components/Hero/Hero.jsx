import React from 'react'
import './hero.css'
import SEO from '../seo'
import profile_pic from '../../assets/profile pic.jpg'
import email_icon from '../../assets/email-icon.png'
import experience from '../../assets/experience.png'
import linkedin from '../../assets/linkedin-icon.png'
import github from '../../assets/github-icon.png'



const Hero = () => {

   const handleMailtoClick = () => {
      window.location.href = 'mailto:gokuljithk@gmail.com';
    };
  
  return (
    <div className='hero'>
     <div className="hero-left">
     <SEO title="Gokuljith K - Home" description="Welcome to the official website of Gokuljith K" />
         <p>Full stack developer | Embedded Developer</p>
         <h1>Gokuljith K</h1>
         <p>I enjoy solving complex challenges and creating effective solutions. Whether it’s working on advanced technologies, designing new products, or improving existing systems, I enjoy using my skills in real-world situations.
             Collaborating with others and achieving results that positively impact society and the world excites me.
         </p>
         <button onClick={handleMailtoClick} className='btn'>Contact me</button>
      </div>
      <div className="hero-right">
           <img className='profile_pic' src={profile_pic} alt='Gokuljith k' />  
           <p className='header-name' ><span>Gokuljith K </span><br /> Full stack developer | Embedded Developer </p>
           <p><img className='icons' src={email_icon} alt=''/> gokuljthk@gmail.com</p>
           <p><img className='icons' src={experience} alt=''/>Fresher</p>
           <div className="skills">
              <p>Reactjs</p>
              <p>Nodejs</p>
              <p>Python</p>
              <p>C</p>
              <p>Figma</p>
              <p>Keil</p>
           </div>
           <div className="social-media">
              <p ><img className='icons' src={linkedin} alt=''/></p>
              <p ><img className='icons' src={github} alt=''/></p>
           </div>
          
      </div>
    </div>
  )
}

export default Hero