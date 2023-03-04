import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import HomeNav from "./HomeNav";
import { userContext } from "../../App";
import { useContext } from "react";


const HomeHeader = () => {
    const user = useContext(userContext)
    const handleProfile = () => { 
        document.querySelector('.overlay').classList.toggle('active')
    }

    return (  
        <div className="home-header">
            <ul className="icons">
                <li>
                    <FontAwesomeIcon icon={faCog} className="icon" />
                </li>
                <li onClick={handleProfile}>
                    { user ? 
                        <img src={user.photoURL} alt="user-profile" /> : 
                        <FontAwesomeIcon icon={faUserCircle} className="icon"/> 
                    }
                </li>
            </ul>

            <HomeNav />
        </div>
    );
}
 
export default HomeHeader;