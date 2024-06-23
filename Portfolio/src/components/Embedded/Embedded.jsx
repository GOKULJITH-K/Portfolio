import React from 'react'

import './embedded.css'
 const Embedded = () => {
    
  return (
    <div className='web'>
        <h1>Embedded Development</h1>
        <div className="web-list">
            <div className="web-card">
            <h4>01 Smart Irrigation system</h4>
               
                <p>Implemented IoT solutions for monitoring soil moisture levels and pump status remotely.</p>
                <div className="links">
                    <a href='' >Know more</a>
                   
                </div>
                
            </div>
            <div className="web-card">
            <h4>02 Collison detection system</h4>
             
                <p>In this project, We will show how to design and a build a collision detection system using Arduino,ultrasonic sensor and few other components.</p>
                <div className="links">
                    <a href='' >Know more</a>
                
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default  Embedded 
