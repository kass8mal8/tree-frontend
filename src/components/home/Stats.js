import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../useFetch";

const Stats = ({users}) => {
    const url = "https://treeplanting.onrender.com/trees"
    
    const {data: trees, loading, error} = useFetch(url)
    
    return ( 
        <div className="stats">
            <ul>
                <li>
                    <FontAwesomeIcon icon={faArrowLeftLong} className="back-icon"/>
                </li>
                <li>
                    <h2>~ Statistics</h2>
                </li>
            </ul>

            {/* <p>With less than 7% forest cover in Kenya, tree planting ought to be stepped up and we took the initiative.</p> */}

            <div className="users">
                <h3>{users && users.length}</h3>
                <p>Number of environmentalist on our app </p>
            </div>

            <div>
                <h3>{trees && trees.length}</h3>
                <p>Total number of trees planted by our users</p>
            </div>

        </div>
     );
}
 
export default Stats;