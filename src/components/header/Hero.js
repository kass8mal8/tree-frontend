import hero_img from "../../assets/images/forest-anime.jpg"
import { useNavigate } from "react-router-dom"


const Hero = () => {
    const navigate = useNavigate()
    
    return ( 
        <div className="hero">
            <div className="hero-text">
                <h2>Plant a tree <span style={{color:'rgb(93, 126, 105)'}}>&</span> save our planet</h2>
                <p className="desktop-content">We aim to bring together people who are not indifferent to the fate of our planet and would like to somehow contribute to improving its situation. Are you one of them?</p>

                <div className="mobile-content">
                    <p>One planted tree cost you nothing but can really help cure the Earth</p>
                    <button onClick={() => navigate('/plant/signup')}>Plant a tree</button>
                </div>

                <button className="desktop-btn" onClick={() => navigate('/plant/signup')}>Plant your first tree</button>
                <button className="more-btn"> Learn more</button>
            </div>

            <div className="overlay">
                <img src={hero_img} alt="hero" />
            </div>
        </div>
     );
}
 
export default Hero;