import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';
// import NavBar from './components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Cart3 } from 'react-bootstrap-icons';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className='containerPadre'>
          <div  className="cona">
          <Navbar.Brand href="#">Crudo. Tienda de sabores</Navbar.Brand>
          <Nav>
            <Nav.Link href="#">Pastas</Nav.Link>
            <Nav.Link href="#">Tartas</Nav.Link>
            <Nav.Link href="#">Tabla de fiambres</Nav.Link>
            <Nav.Link href="#">Fiambres</Nav.Link>
            <div className='carritoContenedor'>
              <Cart3 color='white' size="4rem" />
              <p className='carritoNumber'>3</p>
            </div>
          </Nav>
          </div>
        </Container>
      </Navbar>
      <ItemListContainer saludo="Bienvenidos a nuestra tienda de sabores" />
      <ContenedorProductos />

    </>
  );
}

export default App;
