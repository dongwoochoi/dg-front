//local page import
import Login from './Login';
import Navvv from './nav';

//bootstrap import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Route, Routes, useNavigate} from 'react-router-dom';

//app import

//style import
import '../css_page/main.css';


function Main(){

    let navigate = useNavigate();

    return (
        <div className='main_main'>
            <Navvv/>
            <Routes>
                <Route path='/login' element={<Login/>} />
            </Routes>
            <Container fluid className='main_container'>
                <Row>
                    <Col className="item">
                        <div className='text_item'>
                            <h1>당신 근처의 <br/>당근마켓</h1>
                            <p>중고 거래부터 동네 정보까지, 이웃과 함께해요.<br/>
    가깝고 따뜻한 당신의 근처를 만들어요.</p>
                        </div>
                        
                        <div className="img_item">

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="item">
                        <div className='text_item'>
                            <h1>우리 동네 <br/>중고 직거래 마켓</h1>
                            <p>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해 보세요.</p>
                        </div>
                        
                        <div className="img_item">

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="item">
                        <div className='text_item'>
                            <h1>이웃과 함께하는<br/>동네생활</h1>
                            <p>우리 동네의 다양한 이야기를 이웃과 함께 나누어요.</p>
                        </div>
                        
                        <div className="img_item">

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="item">
                    <div className='text_item'>
                            <h1>내 근처에서 찾는 <br/>동네가게</h1>
                            <p>우리 동네 가게를 찾고 있나요?<br/>동네 주민이 남긴 진짜 후기를 함께 확인해보세요!</p>
                        </div>
                        
                        <div className="img_item">

                        </div>
                    </Col>
                </Row>
                <Button className="login_button" variant="dark" onClick={()=>{ navigate('/login') }} >로그인 하기</Button>
            </Container>
        </div>
    );
}
export default Main;