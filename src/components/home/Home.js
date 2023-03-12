import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import Cards from "../main/Cards";
import HomeHeader from "./HomeHeader";
import Today from "./Today";
import HomeNav from "./HomeNav";
import useFetch from "../useFetch"

const Home = () => {

    const navigate = useNavigate()
    const user = useContext(userContext)

    const url = 'https://treeplanting.onrender.com/trees'
    const trees = useFetch(url) 

    const handleProfile = () => { 
        document.querySelector('.overlay').classList.toggle('active')
    }

    //console.log(trees)
    
    

    return ( 
        <div className="home">
            <HomeHeader handleProfile = {handleProfile}/>
            <HomeNav />
    
            <h3>Latest plants</h3>
            <Cards trees={trees} />

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