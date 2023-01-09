

//bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Cookies } from 'react-cookie';
//app import
import {Navbar, Container, Nav } from 'react-bootstrap';
import {Route, Routes, useNavigate} from 'react-router-dom';
import { useState } from 'react'; 
import { useDispatch,useSelector } from 'react-redux';
import New_post from './new_post';
//style import
import '../App.css';
import { changeData } from '../action/store';


function Navvv(){
    let dispatch = useDispatch();
    let a = useSelector((state) =>  state.searched_data )
    let [real_data, set_real_data] = useState(a);
    let[status, setstatus] = useState(false);       
    let navigate = useNavigate();
    const cookies = new Cookies()


    if (cookies.get('id')){
        status = true
    }
    else {
        status = false
    }

    

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
                <Form.Control onChange={(e)=>{set_real_data(e.target.value)}} type="text" placeholder="물품이나 동네를 검색해보세요" />
                <Button id="search_button" onClick={()=>{
                    console.log(real_data)
                    console.log(typeof real_data)
                    fetch('http://20.196.193.2:8080/content/findkey',{
                        method : "POST",
                        headers : {
                            Authorization : cookies.get('id'),
                            'Content-Type' : 'application/json'
                        },
                        body : JSON.stringify({
                            keyword : real_data
                        })
                    })
                    .then(res=>{
                        // console.log(phone_number)
                            const statusCode = res.status
                            const response = res.json()
                            .then(data=>{
                                dispatch(changeData(data.result))
                                navigate("/search_deal")
                            }).catch(err=>[
                                console.log(err)
                            ])
                        })
                }} variant="primary" type="submit">
                    검색
                </Button>
                {console.log(a)}
                {/* <Button  onClick={()=>console.log(a)} variant="primary" type="submit">
                    확인
                </Button>
                <Button onClick={()=>{dispatch(changeData("돈까스 먹으러 가시죠"))}} variant="primary" type="submit">
                    변경
                </Button> */}
                { status === true && <Button className="login_button" variant="dark" onClick={()=>{ cookies.set("id", "", { expires : new Date('1999-07-02') } ); // 쿠키를 삭제
                        navigate('/Login'); }} >로그아웃</Button> }
                { status === false && <Button className="login_button" variant="dark" onClick={()=>{ navigate('/login') }} >로그인 하기</Button> }
                </Form.Group>
            </Navbar>
        </div>
    );
}

export default Navvv;