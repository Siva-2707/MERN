
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx';
import Contact from './pages/Contact/Contact.jsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
