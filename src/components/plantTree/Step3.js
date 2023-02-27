import plant from "../../assets/images/pot-plant.png"
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"

const Step3 = () => {
    const navigate = useNavigate()

    return ( 
        <AnimatePresence>
            <motion.div
                initial={{ x: 300, opacity:0}}
                animate={{ x:0, opacity:1}}
                transition={{ duration:0.3}}
                exit={{ x:-300, opacity:0}}
                
                className="step-3">
                <img src={plant} alt="plant-in-pot"/>
                <h2>Plant a tree you'll belove</h2>
                <p>Tree planting self assessment has never been this simpler, you plant we count... </p>
                
                <form onSubmit={() => navigate('/plant/finish')}>
                    <input 
                        type="text" 
                        placeholder="type of tree" 
                        required />
                    <button>complete planting</button>
                </form>

            </motion.div>
        </AnimatePresence>
     );
}
 
export default Step3;