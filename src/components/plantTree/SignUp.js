import planting from "../../assets/images/ptng-illust.jpg"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../firebase"
//import { useEffect } from "react"

const SignUp = () => {

    let count = 0
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = async() => {
        try {
            const user = await signInWithPopup(auth, provider)
            console.log(user);
            navigate('/plant/2')

        } 
        catch (error) {
            console.log(error.message);
        }
    }
    
    console.log(count);

    return ( 
        <AnimatePresence>
            <motion.div
                initial={{ x: 300, opacity:0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration:0.3}}
                exit={{ x: -300, opacity: 0 }}

                className="signup" >
                <img src={planting} alt="" />
                <p>Few steps away from making positive impact on environment... be amongst us for our globe.</p>
                <button 
                    className="g-btn" 
                    onClick={handleGoogleSignIn}> Continue with Google 
                </button>
            </motion.div>
        </AnimatePresence>
     );
}
 
export default SignUp;