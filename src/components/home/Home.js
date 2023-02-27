import Header from "../header/Header";
import Hero from "../header/Hero";
import Latest from "./Latest";

// End of import statements

const Home = () => {

    return ( 
        <div className="home">
            <Header />

            {/* Section That appears after the header it contains the forest image */}
            <Hero /> 

            {/* varies from desktop to mobile rendered differently */}
            <Latest />
        </div>
     );
}
 
export default Home;