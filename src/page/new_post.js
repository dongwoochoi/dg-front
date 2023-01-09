import { Cookies } from 'react-cookie';
import { useState } from 'react'; 
import Navvv from './nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from 'react-router-dom';
import '../new_post.css'


function New_post(){
    let navigate = useNavigate()
    const cookies = new Cookies()
    const [fileImage, setFileImage] = useState("");

    // 파일 저장
    const [input_data1, set_input_data1] = useState();
    const [input_data2, set_input_data2] = useState();
    const [input_data3, set_input_data3] = useState();
    const [input_data4, set_input_data4] = useState();

    const saveFileImage = (e) => {
      setFileImage(URL.createObjectURL(e.target.files[0]));
    };
  
    // 파일 삭제
    const deleteFileImage = () => {
      URL.revokeObjectURL(fileImage);
      setFileImage("");
    };
  
    return(
        <div id='new_post'>
            <Navvv/>
            <Form className='ess'>
                <h2>🥕게시물 작성하기🥕</h2>
                <Form.Group className="mb-3">
                    <Form.Label>글 제목</Form.Label>
                    <Form.Control onChange={(e)=>{ 
                        set_input_data2(e.target.value)
                    }} type="text" placeholder="제목을 작성하세요." />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>내용</Form.Label>
                    <Form.Control onChange={(e)=>{ 
                        set_input_data3(e.target.value)
                    }}type="text" placeholder="판매 품목에 대한 설명을 적어주세요!" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>가격</Form.Label>
                    <Form.Control onChange={(e)=>{ 
                        set_input_data4(e.target.value)
                    }}type="number" placeholder="가격을 적어주세요." />
                </Form.Group>
                <Button onClick={()=>{
                    console.log(input_data2)
                    console.log(input_data3)
                    console.log(input_data4)
                    console.log(fileImage)
                    fetch('http://20.196.193.2:8080/content/create', {
                        method : "POST",
                        headers : {
                            Authorization : cookies.get('id'),
                            'Content-Type' : 'application/json'
                        },
                        body:JSON.stringify({
                            newpostdata:{
                                title : input_data2,
                                content : input_data3,
                                price : input_data4
                            }

                        })
                    })
                    .then(res=>{

                        // console.log(phone_number)
                        const statusCode = res.status
                        res.json()
                        .then(data=>{
                            if(statusCode === 401){
                                alert(data.message)
                            }
                            else if(statusCode===201){
                                navigate('/deal')
                                alert('게시글이 정상적으로 등록되었습니다.')

                            }                                  
                        }).catch(err=>[
                            console.log(err),
                            navigate('/deal')
                        ])
                    })
                }} variant="primary">
                    Submit
                </Button>
                </Form>
                
        </div>
    );
}

export default New_post;