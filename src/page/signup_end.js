import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Route, Routes, useNavigate} from 'react-router-dom';
import '../css_page/signup_end.css';

function Signup_end(){
    let navigate = useNavigate();

    return (
        <div id="next_signup">
            <div className='container'>
                <h2>
                    회원가입이 완료되었습니다!<br/>
                </h2>
                <div className='button_div'>
                    <Button onClick={()=>{ navigate('/main') }}>메인 페이지</Button>
                    <Button onClick={()=>{ navigate('/login') }}>로그인</Button>
                </div>
            </div>
        </div>
    );
}
export default Signup_end;