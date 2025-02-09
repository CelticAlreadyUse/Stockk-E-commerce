import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import './index.css'
import { Main } from './pages/Main'
import ProductDetail from './pages/Detail/ProductDetail'
import Layout from './layout/layout'
import Cart from './pages/Cart/Cart'
import Warehouse from './pages/warehouse/Warehouse'
import NotFound from './pages/NotFound/NotFound'
import WarehouseDetails from './pages/warehouse/Details'
function App() {
  return (
    <Router>
      <Routes>
       <Route path="*" element={<NotFound />} />
        <Route element={<Layout/>}>
        <Route path='/detail/:id' element={<ProductDetail/>}></Route>
        <Route path='/cart/:id' element={<Cart/>}></Route>
        <Route path='/warehouse' element={<Warehouse/>}></Route>
        <Route path='/warehouse/:id' element={<WarehouseDetails/>}></Route>
      <Route  path="/" element={<Main/>}>
      </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
