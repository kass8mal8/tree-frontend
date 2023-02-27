import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "./MobileNav";
import { useNavigate } from "react-router-dom";

const MobileHeader = () => {
    const navigate = useNavigate()
    return ( 
        <div className="mobile-header">
            <ul>
                <li>
                    <FontAwesomeIcon icon={faArrowLeftLong}  onClick={() => navigate(-1)} />
                </li>
                <li> Plant your first tree</li>
                <li> Cancel</li>
            </ul>
            <MobileNav />
        </div>
     );
}
 
export default MobileHeader;