import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

      const handleSignOut = () => {
        signOut(auth);
        navigate('/home')
        };

    return (
 <div className=''>
    <Navbar className='navbar sticky-top' collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand className='text-white' as={Link} to='/'>HOME</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
            {
              user ? <div className='custom-link'>
            <Nav.Link><CustomLink to='/'>Home</CustomLink></Nav.Link>
            <Nav.Link><CustomLink to='/manage'>Manage Inventory</CustomLink></Nav.Link>
            <Nav.Link><CustomLink to='/additem'>Add Item</CustomLink></Nav.Link>
            <Nav.Link><CustomLink to='/myitem'>My Item</CustomLink></Nav.Link>
            <Nav.Link><CustomLink to='/blogs'>Blogs</CustomLink></Nav.Link>
            <Nav.Link className='text-danger fw-bold' onClick={handleSignOut}>Sign Out</Nav.Link>
            </div>
              :
              <Nav.Link className='text-white fs-5' eventKey={2} as={Link} to='/login'>Please Login</Nav.Link>
            }
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

 </div>
    );
};

export default Header;