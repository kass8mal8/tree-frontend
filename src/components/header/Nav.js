import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"

const Nav = () => {
    return ( 
        <div className="nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Get in touch</li>
                <li>
                    <FontAwesomeIcon icon={faUser} /> Create an account
                </li>
            </ul>
        </div>
     );
}
 
export default Nav;