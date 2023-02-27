import Cards from "./Cards";

const Latest = () => {
    // displays latest activities by users of the app
    

    return ( 
        <div className="latest">
            <h2>Latest plants</h2>
            <p>Our users are involved in this just cause. Check their latest acivities and plant your own tree.</p>

            <Cards />
            <button>Discover more plants</button>
        </div>
     );
}
 
export default Latest;