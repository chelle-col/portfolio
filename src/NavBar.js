import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <Navbar expand="lg" bg='dark' variant='dark'>
            <Navbar.Brand href="/" className='mx-2'>MC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                <Nav.Link as={Link} to="/resume">About Me</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default NavBar;