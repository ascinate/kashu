import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Router>
           <Routes>
                <Route excaexact="true" path="/" element={<Home/>}/>
                <Route excaexact="true" path="/signin" element={<SignIn/>}/>
           </Routes>
      </Router>
    </>
  )
}

export default App
