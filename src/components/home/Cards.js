import eucalyptus from "../../assets/images/eucalyptus.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"

const Cards = () => {
    // maximum latest = 4 for desktop and 2 for mobile

    const plants = [ // images will be replaced by user's avatar
        {src:eucalyptus, name:"James", tree:"Planted evergreen tree"},
        {src:eucalyptus, name:"James", tree:"Planted evergreen tree"},
        {src:eucalyptus, name:"James", tree:"Planted evergreen tree"},
        {src:eucalyptus, name:"James", tree:"Planted evergreen tree"}
    ]

    // name, tree and source of image will be fetched from the database

    return ( 
        <div className="cards">
            {plants.map( plant => (
                <div>
                    <aside>
                        <img src={plant.src} alt="illustration" /> 
                    </aside>
                    <article>
                        <h3>{plant.name}</h3>
                        <p>{plant.tree}</p>
                        <FontAwesomeIcon icon={faClock}  className="time-icon"/>2 minutes ago
                    </article>
                </div>
            ))} 
        </div>
     );
}
 
export default Cards;