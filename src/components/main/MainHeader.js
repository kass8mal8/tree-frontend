import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faTree, faUser } from "@fortawesome/free-solid-svg-icons";
import MainNav from "./MainNav";


const MainHeader = () => {
    return (  
        <div className="main-head">
            <ul>
                <li>
                    <FontAwesomeIcon icon={faTree} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faCogs} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faUser} />
                </li>
            </ul>

            <MainNav />
        </div>
    );
}
 
export default MainHeader;