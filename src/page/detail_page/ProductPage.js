import './dgstyle.css'
import ProductPageUnderBar from './ProductPageUnderBar'
import { Cookies } from 'react-cookie';
import { useState } from 'react'; 
import Navvv from '../nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../../css_page/ProductPage.css'

const cookies = new Cookies()
// { profileImage, productImage, userName, address, mannerTemp, mannerIcon, kategorie, detailKategorie, title, mainText, price, postedTime, visits, interest, chatting}
function ProductPage(){
    let [post_data, setdata] = useState(0);  
    const imgStyle = {
        width: '350px',
        height: '500px'
    } 
    
    const profilePngStyle = {
        width: '40px',
        height: '40px'
    }

    const tempFacestyle = {
        width: '30px',
        height: '30px',
        'BorderRadius': '60%'
    }
    if (post_data === 0 ){
        fetch('http://20.196.193.2:8080/content/findDetail', {
            method : "POST",
            headers : {
                Authorization : cookies.get('id'),
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                content : localStorage.getItem('post_id')
            })
        })
        .then(res=>{
        // console.log(phone_number)
            const statusCode = res.status
            const response = res.json()
            .then(data=>{
                setdata(data)
            }).catch(err=>[
                console.log(err)
            ])
        })

    }
    
    if (typeof post_data === "object"){
        return (
            <div>
                
                <Navvv/>
                <div className='drop'>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-2">게시글 수정</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">게시글 삭제</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">동내 범위 설정 </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div id='img'>
                    <img style={imgStyle} src={'http://20.196.193.2:8080/'+ post_data.contents.img}/>
                </div>
                
                <div id="profile">
                    <div id="profile_img">
                        {/* <img src={profileImage} style={profilePngStyle}></img> */}
                    </div>
                    <div id="nickname">
                        <h2>{post_data.user.nickname}</h2>
                        <p>{post_data.contents.location}</p>
                    </div>
                    <div id="temp">
                        {/* <div id="expression">
                            <p id="ondo">{mannerTemp}°C</p>
                            <img src={mannerIcon} style={tempFacestyle}/>
                        </div> */}
                        <p id="temp_text">매너온도</p>
                    </div>
                </div>
                <div id="main_text">
                    <div id="title">
                        <h1>{post_data.contents.title}</h1>

                    </div>
                    <div id="tag">
                        <p>{post_data.contents.tag} ∙ {post_data.contents.time.createdTime}</p>
                    </div>
                    <div id="price">
                        <p>{post_data.contents.price}원</p>
                    </div>
                    <div id="text">
                        <p>{post_data.contents.content}</p>
                    </div>
                    <div id="popularity">
                        <p>관심 {post_data.contents.counter.like} ∙ 채팅 {post_data.contents.counter.chat} ∙ 조회 {post_data.contents.counter.normal}</p>
                    </div>
                    <ProductPageUnderBar price={post_data.contents.price}/>
                </div>  
            </div>
        );
    }
    }
    

export default ProductPage;