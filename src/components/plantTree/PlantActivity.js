import { Outlet } from "react-router-dom";
import MobileHeader from "./MobileHeader";

const PlantActivity = () => {

    return ( 
        <div className="planting">    
            <div className='sections'>
                <MobileHeader />
                <Outlet />
            </div>
        </div>
     );
}
 
export default PlantActivity;