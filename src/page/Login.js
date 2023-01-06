//Local page import
import Deal from './Deal';
import Signup from './signup';

//app import
import { useState } from 'react'; 
import { useCookies } from 'react-cookie';
import axios from 'axios'
import {Route, Routes, useNavigate} from 'react-router-dom';

//bootstrap import
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//style import
import '../css_page/login.css';


function Login(){

    let navigate = useNavigate();
    let[phone_number, get_phone_number] = useState('');
    const [cookies, setCookie] = useCookies(['id']);

    return( 
        <div className='login_main'>
            <Routes>
                <Route path='/deal' element={<Deal/>} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
            <Container className="panel">
                <Form className='c2'>
                    <Form.Group as={Row} className="mm">
                        <Col sm>
                            <Form.Control className='phone_input' type="text" placeholder="전화번호로 로그인 하기" onChange={(e)=>{
                                get_phone_number(e.target.value)
                            }} />
                        </Col>
                    </Form.Group>
                    <br/>

                    <div className="d-grid gap-1">
                        <Button variant="secondary"  onClick={()=>{ 
                            fetch('http://20.196.193.2:8080/auth/login', {
                                method : "POST",
                                headers : {
                                    'Content-Type' : 'application/json'
                                },
                                body:JSON.stringify({
                                    phone : phone_number
                                })
                            })
                            .then(res=>{
                                // console.log(phone_number)
                                const statusCode = res.status
                                const response = res.json()
                                .then(data=>{
                                    if(statusCode === 401){
                                        alert(data.message)
                                    }
                                    else if(statusCode===200){
                                        setCookie('id', data.token);
                                        navigate('/deal')
                                    }                                  
                                }).catch(err=>[
                                    console.log(err)
                                ])
                            })
                        }}>
                            로그인
                        </Button>
                        <div className="d-grid gap-1">
                            <Button variant="secondary"  onClick={()=>{ 
                                navigate('/signup')
                            }}>
                                회원가입
                            </Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default Login;