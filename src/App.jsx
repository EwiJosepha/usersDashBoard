// import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Profilepage from './Components/Profile/Profilepage'
import { createContext } from 'react'
import { useState } from 'react'
import Viewprofile from './Components/Profile/Viewprofile'
import Editepage from './Components/Profile/Editepage'
export const Appcontext = createContext(null)


function App() {
  const[user, setUser]= useState({})

  return (
    <>
    <Appcontext.Provider value={{user, setUser}}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profilepage" element={<Profilepage />} />
        <Route path="/Viewprofile" element={<Viewprofile/>} />
        <Route path="/Editepage" element={<Editepage/>} />
      </Routes>
    </Router>
    </Appcontext.Provider>
   
    </>
  )
}

export default App
