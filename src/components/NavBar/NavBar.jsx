import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from "react-router-dom";
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
                        <Link to={"/"}>
                            <img className='logoCrudo' src='./img/logoCrudoBlanco.png'></img>
                        </Link>
                        <Nav >
                            <nav >
                                <li>
                                    <NavLink to={"/categoria/1"}>Pastas</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/categoria/2"}>Tartas</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/categoria/3"}>Tablas</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/categoria/4"}>Pizzas y empanadas</NavLink>
                                </li>
                            </nav>
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