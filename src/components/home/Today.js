import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../useFetch"

const Today = () => {
    const url = 'https://treeplanting.onrender.com/trees/today'
    const trees = useFetch(url)

    return ( 
        <div className="today">
            {trees && trees.map( tree => (
                <ul key={tree.id}>
                    <li>
                        <img src={tree.owner_pic} alt="owner pic" />
                    </li>
                    <li>
                        <p>{tree.owner}</p>
                        <p>planted {tree.type} tree</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faHeart} />
                    </li>
                </ul>
            ))}
        </div>
     );
}
 
export default Today;