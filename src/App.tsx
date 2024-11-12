import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import { Main } from './pages/Main'
function App() {
  return (
    <Router>
      <Routes>
      <Route  path="/" element={<Home/>}>
      </Route>
      <Route path='/home' element={<Main/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
