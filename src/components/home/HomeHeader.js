import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { userContext } from "../../App";
import { useContext } from "react";


const HomeHeader = ({ handleProfile }) => {
    const user = useContext(userContext)
    const d = new Date().toLocaleTimeString()

    const navbar = document.querySelector('.home-header')
    // const sticky = navbar.offsetTop

    window.onscroll =()=> {        
        if(window.pageYOffset >= 80){
            navbar.classList.add("sticky")  
            console.log(window.pageYOffset)
        }
        else{
            navbar.classList.remove("sticky")
        }
    }

    return (  
        <div className="home-header">
            { user && <h3> Hello {user.displayName} </h3> }

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
        </div>
    );
}
 
export default HomeHeader;