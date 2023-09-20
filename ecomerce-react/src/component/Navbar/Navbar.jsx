import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Link to="/" href="#">MaxGaming</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to= "/category/:id" className="navbar"> ▫ PC armadas</NavLink>
                        <NavLink to= "/category/:id" className="navbar"> ▫ Placa de video</NavLink>
                        <NavLink to ="/category/:id" className="navbar"> ▫ Monitores</NavLink>
                        <NavLink to= "/category/:id" className="navbar"> ▫ Silla Gamer</NavLink>
                        
                    </Nav>
                    <Link to="/Comprar">
                    {/* 3 <CarWidget /> */}
                    </Link>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        
                        <Button variant="outline-success">🔍</Button>
                    </Form>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;