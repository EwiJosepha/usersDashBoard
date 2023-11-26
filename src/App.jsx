// import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

 
import './App.css'
import Home from './Components/Home/Home'
import Profilepage from './Components/Profile/Profilepage'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profilepage" element={<Profilepage />} />
      </Routes>
    </Router>
   
    </>
  )
}

export default App
