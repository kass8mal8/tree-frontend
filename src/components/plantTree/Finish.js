import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

import useFetch from "../useFetch"

const Finish = () => {
    
    const url = 'https://treeplanting.onrender.com/trees'
    const { data:trees, loading, error } = useFetch(url)
    const tree = trees && trees[trees.length - 1]

    const navigate = useNavigate()

    return ( 
        <div className="finish">
            {loading && <div>Loading please wait...</div> }
            { error && <div> A {error} occured </div> }
            { tree && <div>
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
                <p>Name: {tree.owner}</p>
                <p>Points earned 10</p>
                <p>Planted a {tree.type} tree</p>
                <button onClick={() => navigate('/')}>confirm activity</button>
            </div> }
        </div>
     );
}
 
export default Finish;