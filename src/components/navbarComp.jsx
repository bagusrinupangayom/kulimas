import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavbarComp = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Navbar expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand>
                            <Nav.Link onClick={() => navigate('/')}>KULIMAS</Nav.Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Stack gap={2}>
                                <Nav className="ms-auto text-end">
                                    <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
                                    <Nav.Link onClick={() => navigate('/projects')}>Projects</Nav.Link>
                                    <Nav.Link onClick={() => navigate('/services')}>Services</Nav.Link>
                                    <Nav.Link onClick={() => navigate('/careers')}>Careers</Nav.Link>
                                    <Nav.Link href="/5">Contacts</Nav.Link>
                                </Nav>
                            </Stack>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default NavbarComp;
