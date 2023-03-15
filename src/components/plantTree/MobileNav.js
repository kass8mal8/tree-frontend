import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNav = () => {

    const [isTwo, setIsTwo] = useState(false)
    const [isOne, setIsOne] = useState(false)
    const [isThree, setIsThree] = useState(false)
    
    const icon = <FontAwesomeIcon icon={faCheck} />
    const bgStyles = {
        backgroundColor:"green",
        color:"white"
    }

    return ( 
        <div className="mob-nav">
            <ul>
                <li onClick={() => setIsOne(true)}>
                    <Link to = "/plant/signup">{isOne ? icon : 1}</Link>
                    
                </li>
                <li onClick={() => setIsTwo(true)}>
                    <Link to="/plant/2">{isTwo ? icon : 2}</Link>
                </li> 
                <li onClick={() => setIsThree(true)}>
                    <Link to="/plant/3">{isThree ? icon : 3}</Link>
                </li> 
                <li>4</li> 
            </ul>
        </div>
     );
}
 
export default MobileNav;