import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { Contador } from './components/Contador/Contador';
import Item from './components/Item/Item';


function App() {
  return (
      <>
      <NavBar/>
      <ItemListContainer />
      {/* <ContenedorProductos /> */}
      <Contador inicial={1} stock={10}/>
      <Item/>
      </>
  );
}

export default App;
