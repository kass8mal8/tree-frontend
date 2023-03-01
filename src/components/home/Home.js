import Cards from "../main/Cards";
import HomeHeader from "./HomeHeader";
import Today from "./Today";

const Home = () => {
    return ( 
        <div className="home">
            <HomeHeader />

            <h3>Latest plants</h3>
            <Cards />

            <h3> Today </h3>
            <Today />

            <button> Plant a tree </button>
        </div>
     );
}
 
export default Home;