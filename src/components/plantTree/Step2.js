import forest from "../../assets/images/forest.jpg"
import dd from "../../assets/images/deciduous.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, easeIn } from 'framer-motion'

const Step2 = () => {
    const navigate = useNavigate()

    return ( 
        <AnimatePresence>
            <motion.div 
                initial={{ x: 300, opacity:0}}
                animate={{ x:0, opacity:1}}
                transition={{ duration:0.3, type:easeIn}}
                exit={{ x:-300, opacity:0}}
                
                className="step-2">
                <img src={forest} alt="forest" className="forest"/>
                <img src={dd} alt="dd-tree" className="dd-tree" />

                <h2>Plant deciduous tree</h2>
                <p>In botany and horticulture, deciduous plants, including trees are those that lose all their leaves for part of the year.</p>
                <button onClick = {() => navigate('/plant/3')}>Continue <FontAwesomeIcon icon={faArrowRightLong} className="btn-icon"/></button>
            </motion.div>
        </AnimatePresence>
     );
}
 
export default Step2;