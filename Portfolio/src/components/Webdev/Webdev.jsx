import React from 'react'
import profile_pic from '../../assets/telinso.png'
import spotify from '../../assets/spotify.png'
import portfolio from '../../assets/portfolio.png'
import './webdev.css'
 const Webdev = () => {
    const handleCardClick = (page) => {
        window.location.href = page ;
    }
  return (
    <div className='web'>
        <h1>Website Development</h1>
        <div className="web-list">
            <div className="web-card">
            <h4>01 Soil monitoring app</h4>
                <img src={profile_pic} alt='' />
                <p>Telinso is a user-friendly, cost-effective, and scalable system that can help farmers optimize their farming practices and achieve sustainable agriculture.</p>
                <div className="links">
                    <a href='' >Know more</a>
                    <a onClick={()=> handleCardClick('https:telinso.onrender.com')} style={{ cursor: 'pointer' }}>Live view</a>
                </div>
                
            </div>
            <div className="web-card">
            <h4>02 Spotify</h4>
                <img src={spotify} alt='' />
                <p>Built a user-friendly Spotify clone for seamless streaming of your favorite music tracks.</p>
                <div className="links">
                    <a href='' >Know more</a>
                    <a onClick={()=> handleCardClick('https://spotify-j5me.onrender.com/')} style={{ cursor: 'pointer' }}>Live view</a>
                </div>
                
            </div>
            <div className="web-card">
                <h4>03 Portfolio</h4>
                <img src={portfolio} alt='' />
                <p>Explore my portfolio showcasing creative projects and skills in web design and development.</p>
                <div className="links">
                    <a href='' >Know more</a>
                    <a onClick={()=> handleCardClick('https://portfolio-zqy0.onrender.com/')} style={{ cursor: 'pointer' }}>Live view</a>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default  Webdev
