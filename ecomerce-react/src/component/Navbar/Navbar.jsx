import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CarWidget } from '../CarWidget/CarWidget';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">MaxGaming</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <Nav.Link href="#action2">Contacto</Nav.Link>
                        <Nav.Link href="#action2">PC armadas</Nav.Link>
                        <Nav.Link href="#action2">Placa de video</Nav.Link>
                        <Nav.Link href="#action2">Monitores</Nav.Link>
                        <Nav.Link href="#action2">Silla Gamer</Nav.Link>
                        
                    </Nav>
                    1 <CarWidget />
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