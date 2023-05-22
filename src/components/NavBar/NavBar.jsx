import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Cart3 } from 'react-bootstrap-icons';
import "./NavBar.css"

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className='containerPadre'>
                    <div className="cona">
                        <img className='logoCrudo' src='./img/logoCrudoBlanco.png'></img>
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
        </>
    )
}

export default NavBar