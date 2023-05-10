import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import apiArte from '@/apiArte';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Pagina = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Obras de arte</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Obras</Nav.Link>
                        <Nav.Link href="/tipo/tipos">Tipos de arte</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <h1 className='bg-secondary py-3 text-white text-center mb-3'>{props.titulo}</h1>
            <Container>
                {props.children}
            </Container>
        </div>
    )
}

export default Pagina