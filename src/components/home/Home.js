import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import Cards from "../main/Cards";
import useFetch from "../useFetch";
import HomeHeader from "./HomeHeader";
import Today from "./Today";

const Home = () => {

    const navigate = useNavigate()
    const user = useContext(userContext)

    const handleProfile = () => { 
        document.querySelector('.overlay').classList.toggle('active')
    }

    const url = 'http://localhost:5000/trees'
    const trees = useFetch(url)

    return ( 
        <div className="home">
            <HomeHeader />
    
            <h3>Latest plants</h3>
            <Cards />

            <h3> Today </h3>
            <Today />

            { user && 
            <div className="overlay" onClick={handleProfile}>
                <div className="profile">
                    <img src={user.photoURL} alt="profile" />
                    <p>{ user.email }</p>
                    <p>Points - 8</p>
                    <button>sign out</button>
                </div>
            </div> }

            <button onClick={() => navigate('/plant/3')}> Plant a tree </button>

            
        </div>
     );
}
 
export default Home;