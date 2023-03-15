import { faHeart, faClock, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../useFetch"

const Today = () => {
    const url = 'https://treeplanting.onrender.com/trees/today'
    let { data:trees, loading, error } = useFetch(url)
    trees = trees && trees.slice(0, 2)

    return ( 
        <div className="today">
            { loading && <div>Loading please wait...</div> }
            { error && 
                <div className="error"> 
                    <FontAwesomeIcon icon={faExclamationTriangle} className="icon"/> 
                    <p>A {error} occured, check your internet connection.</p>
                </div> }
            { trees && trees.map( tree => (
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