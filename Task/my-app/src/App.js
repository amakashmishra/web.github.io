import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Details from './Components/Details';
import Error from './Components/Error';
import CartDetails from './Components/CartDetails';
import Cards from './Components/Cards';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/details' element={<Details/>} />
        <Route exact path='/card' element={<Cards/>} />
        <Route exact path='/carddetails/:id' element={<CartDetails/>} />
        <Route exact path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
