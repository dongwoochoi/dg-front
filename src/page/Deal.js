//local page import
//bootstrap import
//app import
//style import
import ProductPage from './detail_page/ProductPage';
import Navvv from './nav';
import '../css_page/deal.css';
import Dealposter from './deal_poster';
import { useState } from 'react'; 
import { Cookies } from 'react-cookie';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Login from './Login';
import Button from 'react-bootstrap/Button';



function Deal(){
    let navigate = useNavigate()
    let [post_data, set_post_data] = useState(0)
    const cookies = new Cookies()
    if (post_data === 0 ){
        function get_data(){
            fetch('http://20.196.193.2:8080/content/findall', {
                method : "POST",
                headers : {
                    Authorization : cookies.get('id') 
                    // Authorization : localStorage.getItem('cookie'), 
                }
            })
            .then(res=>{
            // console.log(phone_number)
                const statusCode = res.status
                const response = res.json()
                .then(data=>{
                    if(statusCode === 401){
                        navigate("/Login")
                    }
                    set_post_data(data.result)
                    // set_post_id(data.result)
                }).catch(err=>[
                    console.log(err)
                ])
            })
            
        }
        get_data()
    }
    if (cookies){
        if (typeof post_data === "object"){
            return (
                <div className='dealdeal'>
                    <Navvv/>
                    <div className='deal_main'>
                    <p>인기 중고 매물</p>
                        <div className='deal_container'>    
                            {
                                post_data.map(function(aa, i){
                                    return(
                                        // console.log(aa.title)
                                        <div className='xpenfl'>
                                            <div className='ll' onClick={()=>{ 
                                                localStorage.setItem('post_id',post_data[i]._id );
                                                
                                                navigate("/ProductPage")
                                                }}>
                                                    
                                                <Dealposter post_data={post_data[i]} i = {i+1}></Dealposter>
                                            </div>
                                        </div>
                                        
                                    )
                                })
                            }
                        </div>
                        <Button className="new_button" variant="dark" onClick={()=>{  // 쿠키를 삭제
                            navigate('/new_post'); }} >계시물 생성</Button>
                    </div>
                </div>   
            );
        }
    }
    else{
        return(
            <div>
                {
                    navigate("/Login")
                }
            </div>
        );
    }

    }
    

export default Deal;