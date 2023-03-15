import { faHeart, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../useFetch"

const Today = () => {
    const url = 'https://treeplanting.onrender.com/trees/today'
    let trees = useFetch(url)
    trees = trees && trees.slice(0, 2)

    return ( 
        <div className="today">
            { !trees ? <div> <p>Oops... No trees planted today, be the first one.</p> </div>: trees.map( tree => (
                <ul key={tree._id}>
                    <li>
                        <img src={tree.owner_pic} alt="owner pic" />
                    </li>
                    <li>
                        <p> 
                            <span style={{ fontWeight:'bold' }}> {tree.owner} </span> planted {tree.type}
                        </p>
                        <p><FontAwesomeIcon style={{color:"rgb(112, 180, 138)"}} icon={faClock}  className="time-icon"/>  {tree.createdAt.slice(11, 16)} H</p>
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