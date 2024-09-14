import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Home'
import Electronics from './Electronics';
import Jwellery from './Jwellery';
import Men from './Men';
import Women from './Women';
import Footer from './Footer';

function Routing() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/electronics">Electronics</Nav.Link>
            <Nav.Link href="/jwellery">Jwellery</Nav.Link>
            <Nav.Link href="/men">Men Clothes</Nav.Link>
            <Nav.Link href="/women">Women Clothes</Nav.Link>
            <Nav.Link><button>Login</button></Nav.Link>
            <Nav.Link><button>Register</button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/electronics' Component={Electronics}></Route>
        <Route path='/jwellery' Component={Jwellery}></Route>
        <Route path='/men' Component={Men}></Route>
        <Route path='/women' Component={Women}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default Routing;