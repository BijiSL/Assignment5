import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Edashboard from './components/Edashboard'
import Employeeform from './components/Employeeform'
import { Route, Router, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar />
    <Routes>
<Route  path="/d" element={<Edashboard/>} />
<Route path="/f" element={<Employeeform />} />
    </Routes>
  
    </>
  )
}

export default App
