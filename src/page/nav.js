

//bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//app import
import {Navbar, Container, Nav } from 'react-bootstrap';
import {Route, Routes, useNavigate} from 'react-router-dom';

//style import
import '../App.css';


function Navvv(){

    let navigate = useNavigate();


    return(
        <div id="nav_main" className="App">
            <Navbar id="nav" bg="white" variant="white">
                <Container style={{
                                    display: "flex",
                                    flex_direction: 'row',
                                    justify_content: "flex-start",
                                    max_width: "2007px",
                                    margin_left: "7rem",
                                    margin_right: "7rem",
                                    padding: "0px"
                    }}>
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
        </div>
    );
}

export default Navvv;