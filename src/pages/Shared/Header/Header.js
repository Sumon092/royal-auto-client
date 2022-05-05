import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import logo from '../../../images/logo/logo.svg'
import Banner from '../../Home/Banner/Banner';
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="primary" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><img style={{ width: '163px' }} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
                            <Nav.Link href="#inventory" className='fw-bold'>Inventory</Nav.Link>
                            <Nav.Link href="#features" className='fw-bold'>Features</Nav.Link>
                            <Nav.Link href="#demos" className='fw-bold'>Demos</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='fw-bold' eventKey={2} href="#singIn">
                                Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;