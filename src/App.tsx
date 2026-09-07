import "./App.css"
import { Routes, Route, Link, } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Product from "./pages/Product"
export default function App(){

  return (
  <> 
  <h1>App</h1>
  <nav>
    <Link to="/"> Home </Link>
    <Link to="/about"> About </Link>
    <div className="dropdown">
          <span className="dropdown-btn">Product ▾</span>
          <div className="dropdown-content">
            <Link to="/product/1">Product 1</Link>
            <Link to="/product/2">Product 2</Link>
            <Link to="/product/3">Product 3</Link>
          </div>
        </div>
    <Link to="/404"> Notfound </Link>

  </nav>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/product/:id" element={<Product/>}/>
  </Routes>
  </>
  )
}