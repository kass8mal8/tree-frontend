import './assets/styles/css/app.css';
import Main from './components/main/Main';
import PlantActivity from './components/plantTree/PlantActivity';
import Step2 from './components/plantTree/Step2';
import Step3 from './components/plantTree/Step3';
import SignUp from './components/plantTree/SignUp';
import Finish from './components/plantTree/Finish';
import NotFound from "./components/NotFound"
import Home from './components/home/Home';
import Stats from './components/home/Stats';
import useFetch from "./components/useFetch";

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase';

import { useState, createContext } from 'react';
import { Route, Routes } from "react-router"


export const userContext = createContext()
export const treesContext = createContext()

const App =({children})=> {

  const [user, setUser] = useState({})
  onAuthStateChanged(auth, currentUser => setUser(currentUser) )
  const url = "https://treeplanting.onrender.com/users"
  const {data: users, loading, error} = useFetch(url)

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
                <Route path='/statistics' element={<Stats users={users} />} />
            </Routes>
        </div>
    </userContext.Provider>
  );
}

export default App;
