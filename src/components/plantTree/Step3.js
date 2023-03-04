import plant from "../../assets/images/pot-plant.png"
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import axios from 'axios'
import { useContext, useEffect, useRef } from "react";
import { userContext } from "../../App";

const Step3 = () => {
    const navigate = useNavigate()
    const user = useContext(userContext)
    const uri = "http://localhost:5000/trees"
    const treeRef = useRef()
    
    const handlePost = async(e) => {        
        e.preventDefault()
        const d = new Date()

        try {
            const tree_data = {
                owner: user.displayName,
                owner_id: user.uid,
                type: treeRef.current.value,
                dateObject: {
                    day: d.getDay(),
                    month: d.getMonth(),
                    date: d.getDate(),
                    year: d.getFullYear()
                }
            }

            const res = await axios.post(uri, tree_data, {
                headers:{
                    "Content-Type":"application/json"
                }
            })
            console.log(res.data)
            navigate('/plant/finish')

        } 
        catch (error) {
            console.log(error.message);
        }
        
    }

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
                
                <form onSubmit={handlePost}>
                    <input 
                        type="text" 
                        placeholder="type of tree"
                        ref = {treeRef}
                        required />
                    <button type="submit" >complete planting</button>
                </form>

            </motion.div>
        </AnimatePresence>
     );
}
 
export default Step3;