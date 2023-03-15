import './assets/styles/css/app.css';
import Main from './components/main/Main';
import PlantActivity from './components/plantTree/PlantActivity';
import Step2 from './components/plantTree/Step2';
import Step3 from './components/plantTree/Step3';
import SignUp from './components/plantTree/SignUp';
import Finish from './components/plantTree/Finish';
import NotFound from "./components/NotFound"
import Home from './components/home/Home';
// import Activity from './components/main/Activity';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase';

import { useState, createContext } from 'react';
import { createRoutesFromChildren, Route, Routes } from "react-router"

export const userContext = createContext()
export const treesContext = createContext()

const App =({children})=> {
  
  //createRoutesFromChildren
  //const router = createBrowserRouter(routeProvider())
  

  const [user, setUser] = useState({})
  onAuthStateChanged(auth, currentUser => setUser(currentUser) )

  return (
    <userContext.Provider value={user}>
        <div className="app-container">
            <Routes>
                <Route path = '/' element={ user ? <Home /> : <Main /> } />
                <Route path='plant' element={<PlantActivity />} >
                  <Route path='signup' element={<SignUp />} />
                  <Route path='2' element={<Step2 />} />
                  <Route path='3' element={<Step3 />} />
                  <Route path='finish' element={<Finish />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    </userContext.Provider>
  );
}

export default App;
