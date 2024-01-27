import './Hero.css'
import { Primarybutton } from '../../Compo/index'

const Hero = () => {
  return (
    
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>welcome to cyborg</h6>
            <h4 className='hero-title'><em>Browse</em> Our Popular Game Here</h4>
            <Primarybutton>browse Now</Primarybutton>
            {/* <div className='main-button'>
                <a href='browse.html'>Browse Now</a>
            </div> */}
        </div>
    </div>
    
  )
}

export default Hero

