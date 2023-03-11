import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import HomeNav from "./HomeNav";
import { userContext } from "../../App";
import { useContext, useState } from "react";


const HomeHeader = ({ handleProfile }) => {
    const user = useContext(userContext)
    const d = new Date().toLocaleTimeString()

    return (  
        <div className="home-header">
            {parseInt(d[0]) < 12 ? <h3> morning {user.displayName} </h3> : <h3>afternoon {user.displayName}</h3>}

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