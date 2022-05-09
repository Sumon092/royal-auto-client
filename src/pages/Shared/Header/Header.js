import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo.svg'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="primary" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to='/home' href="#home"><img style={{ width: '163px' }} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/home' href="#home" className='fw-bold'>Home</Nav.Link>
                            {
                                user ? <Nav.Link as={Link} to='/manageInventory' href="#manageInventory" className='fw-bold'>Manage Inventory</Nav.Link> : ''
                            }
                            {
                                user ? <Nav.Link as={Link} to='/addItem' href="#features" className='fw-bold'>Add Item</Nav.Link> : ''
                            }
                            <Nav.Link as={Link} to='/blogs' href="#demos" className='fw-bold'>Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <Button onClick={handleSignOut} className="text-decoration-none text-primary text-center bg-dark border-0 text-white" >Sign out</Button> :
                                    <Nav.Link as={Link} to="/signIn">
                                        Sign In
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;