import planting from "../../assets/images/ptng-illust.jpg"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../firebase"
import axios from "axios"
import { useContext } from "react";
import { userContext } from "../../App";

//import { useEffect } from "react"

const SignUp = () => {

    const user = useContext(userContext)
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()
    const uri = 'http://localhost:5000/users'

    const postUserData = async() => {
        const user_info = {
            name: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
            googleID: user.uid
        }
    
        const res = await axios.post(uri, user_info, {
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(res.data)
    }
    
    const handleGoogleSignIn = async() => {
        try {
            await signInWithPopup(auth, provider)
            navigate('/plant/2')
        } 
        catch (error) {
            console.log(error.message)
        }

        postUserData()
    }

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