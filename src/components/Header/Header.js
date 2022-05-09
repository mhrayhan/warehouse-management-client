import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
 <div className=''>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand as={Link} to='/'>HOME</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/additem'>Add Item</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

 </div>
    );
};

export default Header;