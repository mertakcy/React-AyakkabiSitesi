import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Login } from './components/Login'
import { AllProducts } from './components/AllProducts'
import { Basket } from './components/Basket'
import { ProductDetail } from './components/ProductDetail'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/products' element={<AllProducts/>} />
        <Route path='/products/:memberId' element={<ProductDetail/>} />
        <Route path='/basket' element={<Basket/>} />
      </Routes>
    </div>
  )
}

export default App
