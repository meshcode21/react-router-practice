import { Routes, Route, NavLink } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <nav className='bg-gray-800 text-lg text-white flex'>
        <NavLink className={`p-4 hover:bg-green-700`} to="/" >Home</NavLink>
        <NavLink className={`p-4 hover:bg-green-700`} to="/about" >About</NavLink>
        <NavLink className={`p-4 hover:bg-green-700`} to="/contact" >Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
