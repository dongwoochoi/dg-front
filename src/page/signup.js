//Local page import
import PopupPostCode from '../PopupPostCode';
import React from 'react';
import PopupDom from '../PopupDom';

//app import
import { useState } from 'react'; 
import {Route, Routes, useNavigate} from 'react-router-dom';
import { useCookies } from 'react-cookie';


//bootstrap import

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Test from '../Test';

//style import
import '../css_page/signup.css';

function Signup(){
    const [cookies, setCookie] = useCookies(['id']);
    let[location, get_location] = useState('');
    let[singup_phone_number, input_phone_number] = useState('');
    let[nickname, get_nickname] = useState('');

    let navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false)
 
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

    const parentFunction = (x) => {
        get_location(x)
      };
    
    
    return (
        <div>
            <Routes>
                <Route path='/popup' element={<Test/>} />
            </Routes>
            <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control type="text" placeholder="핸드폰 번호" onChange={(e)=>{
                                input_phone_number(e.target.value)
                            }} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control type="text" placeholder="닉네임" onChange={(e)=>{
                                get_nickname(e.target.value)
                            }} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control id="location_form" value={location} type="text" placeholder="주소" onChange={(e)=>{
                                get_location(e.target.value)
                            }} />
                            <button type='button'  onClick={openPostCode}>우편번호 검색</button>
                            <div id='popupDom'>
                                {isPopupOpen && (
                                    <PopupDom>
                                        <PopupPostCode parentFunction={parentFunction} onClose={closePostCode} />
                                    </PopupDom>
                                )}
                            </div>
                        </Col>
                    </Form.Group>
                    <br/>

                    <div className="d-grid gap-1">
                        <Button variant="secondary"  onClick={()=>{ 
                            fetch('http://20.196.193.2:8080/auth/signup', {
                                method : "POST",
                                headers : {
                                    'Content-Type' : 'application/json'
                                },
                                body:JSON.stringify({
                                    phone : singup_phone_number,
                                    nickname : nickname,
                                    location : location,
                                })
                            })
                            .then(res=>{
                                // console.log(phone_number)
                                const statusCode = res.status
                                const response = res.json()
                                .then(data=>{
                                    if(statusCode === 409){
                                        alert(data.message)
                                    }
                                    else if(statusCode===201){
                                        setCookie('id', data.token);
                                        navigate('/login')
                                    }                                  
                                }).catch(err=>[
                                    console.log(err)
                                ])
                            })
                        }}>
                            제출
                        </Button>
                    </div>
                </Form>
        </div>
    );
}

export default Signup;