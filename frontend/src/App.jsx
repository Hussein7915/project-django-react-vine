import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./componets/Home"
import About from "./componets/About"
import Create from "./componets/Create"
import NavBar from "./componets/NavBar"

function App() {
  const myWidth = 200
  return (
    <div className="App">
      <NavBar 
        drawerWidth={myWidth}
        content={
          <Routes>
            <Route path="" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        }
      />

    </div>
  )
}

export default App
