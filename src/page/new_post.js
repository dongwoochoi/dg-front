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

function New_post(){
    let navigate = useNavigate()
    const cookies = new Cookies()
    const [fileImage, setFileImage] = useState("");

    // 파일 저장
    const [input_data1, set_input_data1] = useState();
    const [input_data2, set_input_data2] = useState();
    const [input_data3, set_input_data3] = useState();
    const [input_data4, set_input_data4] = useState();
    const [zz, zzz] = useState();
    const saveFileImage = (e) => {
      setFileImage(URL.createObjectURL(e.target.files[0]));
      set_input_data1(fileImage)
    };

   
  
    // 파일 삭제
    const deleteFileImage = () => {
      URL.revokeObjectURL(fileImage);
      setFileImage("");
    };

    const onHandlePost = () => {
        const newp = new FormData();
        newp.append("image", input_data1);

        let jsonData = JSON.stringify({
            title : input_data2,
            content : input_data3,
            price : input_data4,
            });

        newp.append("newpostdata", jsonData);
        zzz(newp);
    }
    return(
        <div id='new_post'>
            <Navvv/>
            <Form>
                <h1>이미지 미리보기</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>이미지</th>
                            <td>
                            <div>
                                {fileImage && (
                                <img
                                    alt="sample"
                                    src={fileImage}
                                    style={{ margin: "auto" }}
                                />
                                )}
                                <div
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                >
                                <input
                                    name="imgUpload"
                                    type="file"
                                    accept='image/jpg,impge/png,image/jpeg'
                                    onChange={saveFileImage}
                                />

                                <button
                                    style={{
                                    backgroundColor: "gray",
                                    color: "white",
                                    width: "55px",
                                    height: "40px",
                                    cursor: "pointer",
                                    }}
                                    onClick={() => deleteFileImage()}
                                >
                                    삭제
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>   
            </tbody>
        </table>
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
                    }}type="number" placeholder="판매 품목에 대한 설명을 적어주세요!" />
                </Form.Group>
                <Button onClick={()=>{
                    console.log(input_data2)
                    console.log(input_data3)
                    console.log(input_data4)
                    console.log(fileImage)
                    fetch('http://20.196.193.2:8080/content/create', zz,{
                        method : "POST",
                        headers : {
                            Authorization : cookies.get('id'),
                            // 'Content-Type' : 'application/json'
                        }
                        // body:{
                        //     image : zz.image,
                        //     newpostdata : zz.newpostdata
                        // }
                    })
                    .then(res=>{
                        // console.log(phone_number)
                        const statusCode = res.status
                        res.json()
                        .then(data=>{
                            console.log(zz)
                            if(statusCode === 401){
                                alert(data.message)
                            }
                            else if(statusCode===201){
                                alert(statusCode.message)
                                // setCookie('id', data.token);
                                navigate('/deal')
                            }                                  
                        }).catch(err=>[
                            console.log(err)
                        ])
                    })
                }} variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                
        </div>
    );
}

export default New_post;