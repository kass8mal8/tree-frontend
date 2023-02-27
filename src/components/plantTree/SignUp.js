import planting from "../../assets/images/ptng-illust.jpg"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const SignUp = () => {

    // uri_endpoint = api endpoint via which request are made to signup new users 
    const url = "http://localhost:3001/auth/google" 
    let count = 0
    const navigate = useNavigate()

    const handleGoogleAuth = async(url) =>{
        navigate('/plant/2')
        try {
            const user = await fetch(url, {
                "Access-Control-Allow-Origin":"http://localhost:3000",
                mode:"no-cors"
            })
            console.log(user)
            
        } catch (error) {
            console.log(error.message);
        }
        count += 1
        console.log(count);
        
    }

    // end of signup logic
    console.log(count);

    return ( 
        <AnimatePresence>
            <motion.div
                initial={{ x: 300, opacity:0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration:0.3}}
                exit={{ x: -300, opacity: 0 }}

                className="signup">
                <img src={planting} alt="" />
                <p>Few steps away from making positive impact on environment... be amongst us for our globe.</p>
                <button 
                    className="g-btn" 
                    onClick={() => handleGoogleAuth(url)}> Continue with Google 
                </button>
            </motion.div>
        </AnimatePresence>
     );
}
 
export default SignUp;