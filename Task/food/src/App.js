import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/home.js';
import Login from './components/Login/Login';
import Register from './components/Login/register';
import Menu from './components/Menu/Menu'
import Card from './components/Card/cart';
import Checkout from './components/Checkout/checkout';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/menu' element={<Menu/>} />
        <Route exact path='/card' element={<Card />} />
        <Route exact path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
