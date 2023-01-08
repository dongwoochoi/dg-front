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



function Deal(){
    
    let navigate = useNavigate();
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
                    let aa = localStorage.getItem('cookie');
                        set_post_data(data.result)
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
                <div className='deal_main'>
                    <Navvv/>
                    <div className='deal_container'>
                        <p>인기 중고 매물</p>
                        {
                            post_data.map(function(aa, i){
                                return(
                                    // console.log(aa.title)
                                    <div onClick={()=>{ 
                                        navigate('/ProductPage');
                                        fetch('http://20.196.193.2:8080/content/findkey', {
                                            method : "POST",
                                            headers : {
                                                Authorization : cookies.get('id') 
                                                // Authorization : localStorage.getItem('cookie'), 
                                            },
                                            body : {
    
                                            }
                                        })
                                        .then(res=>{
                                        // console.log(phone_number)
                                            const statusCode = res.status
                                            const response = res.json()
                                            .then(data=>{
                                                let aa = localStorage.getItem('cookie');
                                                    set_post_data(data.result)
                                            }).catch(err=>[
                                                console.log(err)
                                            ])
                                        })
                                         }}>
                                        <Dealposter post_data={post_data[i]} i = {i+1}></Dealposter>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>
            );
        }
    }
    else{
        return(
            <div>
                {
                    navigate("/login")
                }
            </div>
        );
    }
    }
    

export default Deal;