import { useContext } from "react";
import { userContext } from "../../App";

const HomeNav = () => {
    const user = useContext(userContext)

    return ( 
        <div className="home-nav">
            { user && <h2>Hello {user.displayName}</h2> }
            <h2>Help us save the earth</h2>

            <nav>
                <ul>
                    <li>Activity</li>
                    <li>Statistics</li>
                    <li>My trees</li>
                </ul>
            </nav>
        </div>
     );
}
 
export default HomeNav;