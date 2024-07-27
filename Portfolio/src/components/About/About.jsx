import React from 'react'
import './About.css'
import profile_pic from '../../assets/profile pic.jpg'

const About = () => {
  return (
    
    <div className='about'>
    <h1>About me</h1>
        <div className="about-align">
            <div className="about-left">
                <img className='profile_pic' src={profile_pic} alt='Gokuljith K' /> 
            </div>
            <div className="about-right">
                
                <p>
                I enjoy solving complex challenges and creating effective solutions. Whether it’s working on advanced technologies, designing new products, or improving existing systems, I enjoy using my skills in real-world situations. Collaborating with others and achieving results that positively impact society and the world 
                excites me.
                </p>
                <p>With a strong foundation in technology and engineering, I am driven by a passion for solving complex challenges through innovative solutions. My academic journey has been enriched by a significant publication and the acquisition of two valuable certifications, reflecting my commitment to continuous learning and 
                    professional development.
                </p>
               
            </div>
        </div>
        <div className="summary">
            <div className="summary-element">
                <h4>1+</h4>
                <p>Years of experience</p>
            </div>
            <div className="summary-element">
                <h4>01</h4>
                <p>IEEE Publication</p>
            </div>
            <div className="summary-element">
                <h4>5+</h4>
                <p>Projects completed</p>
            </div>
            <div className="summary-element">
                <h4>2+</h4>
                <p>Certifications earned</p>
            </div>
        </div>
    </div>
  )
}

export default About