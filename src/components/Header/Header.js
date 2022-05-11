import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const navigate = useNavigate();

      const handleSignOut = () => {
        signOut(auth);
        navigate('/home')
        };

    return (
 <div className=''>
    <Navbar className='navbar py-2 sticky-top' collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand className='brand-name text-white d-flex align-items-center ' as={Link} to='/'> <img className='me-2' src={logo} alt="" width={60}/> Fruits Ninja</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav className='custom-link'>
          <Nav.Link><CustomLink to='/'>Home</CustomLink></Nav.Link>
          <Nav.Link><CustomLink to='/blogs'>Blogs</CustomLink></Nav.Link>
            {
              user ? <div className='custom-link'>
            <Nav.Link><CustomLink to='/manage'>Manage Inventory</CustomLink></Nav.Link>
            <Nav.Link><CustomLink to='/additem'>Add Item</CustomLink></Nav.Link>
            <Nav.Link><CustomLink to='/myitem'>My Item</CustomLink></Nav.Link>
            <span className='user-name text-white text-uppercase'> {user.displayName}</span>
            <Nav.Link className='text-danger fw-bold signOut' onClick={handleSignOut}>SIGN OUT</Nav.Link>
            </div>
              :
              <Nav.Link className='text-danger fw-bold' eventKey={2} as={Link} to='/login'>LOGIN</Nav.Link>
            }
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

 </div>
    );
};

export default Header;