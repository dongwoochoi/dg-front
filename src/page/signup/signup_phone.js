//Local page import
import main from '../main';

//app import
import { useState } from 'react'; 

//bootstrap import
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//style import
import '../css_page/signup.css';

function Signup(){

    let[singup_phone_number, input_phone_number] = useState('');
    
    return (
        <div>
            <Form></Form>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <Form.Control type="text" placeholder="Phone Number" onChange={(e)=>{
                                input_phone_number(e.target.value)
                            }} />
                        </Col>
                    </Form.Group>
                    <br/>

                    <div className="d-grid gap-1">
                        <Button variant="secondary"  onClick={()=>{ 

                        }}>
                            제출
                        </Button>
                    </div>
                </Form>
        </div>
    );
}
