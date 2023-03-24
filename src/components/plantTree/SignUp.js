import planting from "../../assets/images/ptng-illust.jpg"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../firebase"
import axios from "axios"

const SignUp = () => {

    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()
    const uri = 'https://treeplanting.onrender.com/users'

    const postUserData = async(username, pic, email, id) => {
        const user_info = {
            name: username,
            photoURL:pic,
            email: email,
            googleID: id
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
            const user = await signInWithPopup(auth, provider)
            postUserData(user.user.displayName, user.user.photoURL, user.user.email, user.user.uid)
            navigate('/plant/2')

            console.log("User: ",user.user);
        } 
        catch (error) {
            console.log(error.message)
        }

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