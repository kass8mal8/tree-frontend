import { useNavigate } from "react-router-dom"
import not_found from "../assets/images/404.png"

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div className="not-found">
            <img src={not_found} alt="404 error" />
            <div>
                <h2>Oops!</h2>
                <p>The page you are looking for does not exist</p>
                <button onClick={() => navigate('/')}>back to homepage</button>
            </div>
        </div>
    )
}

export default NotFound