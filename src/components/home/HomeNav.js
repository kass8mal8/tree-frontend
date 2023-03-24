import { Link } from "react-router-dom";

const HomeNav = () => {

    return ( 
        <div className="home-nav">
            <h2>Help us save the earth</h2>

            <nav>

                <ul>
                    <li>
                        <Link to="/">Activity</Link>
                    </li>
                    <li>
                        <Link to="/statistics">Statistics</Link>
                    </li>
                    <li>
                        <Link to="/my-trees">My trees</Link>
                    </li>
                </ul>

            </nav>
        </div>
     );
}
 
export default HomeNav;