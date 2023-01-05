//local page import
import Deal from './Deal';
import Main from './main';
import Login from './Login';
import Partime from './Partime';

//bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//app import
import {Navbar, Container, Nav } from 'react-bootstrap'
import {Route, Routes, useNavigate} from 'react-router-dom';

//style import
import '../App.css';


function App() {

  let navigate = useNavigate();

  return (
    <div id="main" className="App">
      <Navbar id="nav" bg="white" variant="white">
        <Container>
          <Navbar.Brand href="#home">
            <div className="main-logo" onClick={()=>{ navigate('/main') }}>

            </div>
          </Navbar.Brand>
          <Nav>
            <Nav.Link className='orange' onClick={()=>{ navigate('/deal') }}>중고거래</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/partime') }}>알바</Nav.Link>
          </Nav>
        </Container>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="물품이나 동네를 검색해보세요" />
          <Button variant="primary" type="submit">
            채팅하기
          </Button>
        </Form.Group>
      </Navbar>
      <br />

      <Routes>
        <Route path='/main' element={<Main/>} />
        <Route path='/deal' element={<Deal/>} />
        <Route path='/partime' element={<Partime/>} />
        <Route path='/main' element={<Deal/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>

      <footer className="py-3 my-4">
        <hr/>
        <p className="text-center text-muted">© 2022 Company, Inc</p>
      </footer>
    </div> 
  );
}

export default App;
