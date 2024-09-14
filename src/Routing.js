import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Router, Routes,Link} from 'react-router-dom';
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
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
            <Link to="/">Home</Link>
            <Link to="/electronics">Electronics</Link>
            <Link to="/jwellery">Jwellery</Link>
            <Link to="/men">Men Clothes</Link>
            <Link to="/women">Women Clothes</Link>
            <Link><button>Login</button></Link>
            <Link><button>Register</button></Link>
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