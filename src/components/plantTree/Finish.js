import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
import useFetch from "../useFetch"

const Finish = () => {

    const url = "http://localhost:5000/trees"
    const trees = useFetch(url)
    const tree = trees[trees.length - 1]

    const navigate = useNavigate()

    return ( 
        <div className="finish">
            {tree && <div>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
                <p>{tree.owner}</p>
                <p>Planted a {tree.type} tree</p>
                <p>points earned 10</p>
                <button onClick={() => navigate('/')}>confirm activity</button>
            </div>}
        </div>
     );
}
 
export default Finish;