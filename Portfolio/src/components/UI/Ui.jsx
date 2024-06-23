import React from 'react'
import './ui.css'
import profile_pic from '../../assets/portfolio-desktop.png'
import spotify_mobile from '../../assets/spotify-mobile.png'
import spotify_desktop from '../../assets/spotify-desktop.png'
import telinso_mobile from '../../assets/telinso-mobile.png'



 const Ui = () => {
    const handleCardClick = (page) => {
        window.location.href = page ;
    }
  return (
    <div className='ui'>
        <h1>UI Design</h1>
        <div className="ui-list">
            <div className="ui-card" onClick={()=> handleCardClick('https://www.figma.com/proto/wVAkNNjHceotLUhNxTmLkQ/portfolio?node-id=1-79&t=JbWSYHKdKZKOmq0T-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A79')} style={{ cursor: 'pointer' }}>
                <img src={profile_pic} alt='' />
                <div className="text-bottom">01 Portfolio Website</div>
                <div className="text-top">Desktop view</div>
                <div class="overlay1"></div>
                <div class="overlay2"></div>
            </div>
            <div className="ui-card" onClick={()=> handleCardClick('https://www.figma.com/proto/P0vw5GTp0GFlva8dvAO8vi/spotify-mobile?node-id=2007-37&t=JbWSYHKdKZKOmq0T-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2007%3A37&show-proto-sidebar=1')} style={{ cursor: 'pointer' }}>
                <img src={spotify_mobile} alt='' />
                <div className="text-bottom">02 Spotify</div>
                <div className="text-top">Mobile view</div>
                <div class="overlay1"></div>
                <div class="overlay2"></div>
            </div>
            <div className="ui-card" onClick={()=> handleCardClick('https://www.figma.com/proto/CV186T7RIzGLem04yAqW0L/spotify?node-id=10-893&t=jBxyhUewEKuT7ae6-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A893&show-proto-sidebar=1')} style={{ cursor: 'pointer' }}>
                <img src={spotify_desktop} alt='' />
                <div className="text-bottom">03 Spotify</div>
                <div className="text-top">Desktop view</div>
                <div class="overlay1"></div>
                <div class="overlay2"></div>
            </div>
        </div> 
        <div className="ui-list">
            <div className="ui-card" onClick={()=> handleCardClick('https://www.figma.com/proto/3MohQMcF3ZyLdHK6EhzNT6/TELINSO-MOBILE?node-id=6-3&t=jBxyhUewEKuT7ae6-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1')} style={{ cursor: 'pointer' }}>
                <img src={telinso_mobile} alt='' />
                <div className="text-bottom">04 Soil monitoring system</div>
                <div className="text-top">Mobile view</div>
                <div class="overlay1"></div>
                <div class="overlay2"></div>
            </div>
            </div>
     </div>
  )
}
export default Ui