import './assets/styles/css/app.css';
import Home from './components/home/Home';
import { Route, Routes } from "react-router"
import PlantActivity from './components/plantTree/PlantActivity';
import Step2 from './components/plantTree/Step2';
import Step3 from './components/plantTree/Step3';
import SignUp from './components/plantTree/SignUp';
import Finish from './components/plantTree/Finish';
import NotFound from "./components/NotFound"

const App =()=> {

  return (
    <div className="app-container">
        <Routes>
            <Route path = '/' element={<Home />} />
            <Route path='/plant/' element={<PlantActivity />} >
              <Route path='signup' element={<SignUp />} />
              <Route path='2' element={<Step2 />} />
              <Route path='3' element={<Step3 />} />
              <Route path='finish' element={<Finish />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
