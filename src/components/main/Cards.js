import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faExclamationTriangle, faHeart } from "@fortawesome/free-solid-svg-icons"
import useFetch from "../useFetch"

const Cards = () => {
    // maximum latest = 4 for desktop and 2 for mobile
    
    const url = 'https://treeplanting.onrender.com/trees'
    const { data:trees, loading, error } = useFetch(url) 

    const plants = trees && trees.slice(-4).reverse()

    const handleFav = () => { }
    
    // name, tree and source of image will be fetched from the database

    return ( 
        <div className="hide">

            <div className="cards">
                { plants && plants.map( plant => (
                    <div key={plant._id}>
                        <aside>
                            <img src={plant.owner_pic} alt="illustration" /> 
                        </aside>
                        <FontAwesomeIcon 
                            icon={faHeart} 
                            className="fav-icon"
                            onClick={handleFav}/>
                        <article>
                            <h3>{plant.owner}</h3>
                            <p>planted {plant.type}</p>
                            <p className="time">
                                <FontAwesomeIcon icon={faClock}  className="time-icon"/>{plant.createdAt.slice(11, 16)} H
                            </p>
                        </article>
                    </div>
                )) } 
            </div>

        </div>
     );
}
 
export default Cards;