import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Productos from './components/Productos/Productos';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CarritoProvider } from './context/CarritoContext';
import Home from './components/Home/Home';


function App() {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categoria/:idCat' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </CarritoProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
