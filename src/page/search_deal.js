import ProductPage from './detail_page/ProductPage';
import Navvv from './nav';
import '../css_page/deal.css';
import Dealposter from './deal_poster';
import { useState } from 'react'; 
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import { useDispatch,useSelector } from 'react-redux';
import { changeData } from '../action/store';
import Button from 'react-bootstrap/Button';
import '../css_page/search_deal.css'



function Search_deal(){
    let a = useSelector((state) =>  state.searched_data )
    let navigate = useNavigate();
    let [post_data, set_post_data] = useState(a);
    const cookies = new Cookies()
    let dispatch = useDispatch();
    

    if (cookies){
        if (typeof post_data === "object"){
            return (
                <div className='search_deal_main'>
                    <Navvv/>
                    <div className='deal_container'>
                        <p>검색 결과</p>
                        <Button onClick={()=>{navigate('/deal')}} >다시 검색하기</Button>
                        {
                            post_data.map(function(aa, i){
                                return(
                                    // console.log(aa.title)
                                    <div onClick={()=>{ 
                                        localStorage.setItem('post_id',post_data[i]._id );
                                        
                                        navigate("/ProductPage")
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
                    navigate("/Login")
                }
            </div>
        );
    }

    }
    

export default Search_deal;