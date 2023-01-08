import './dgstyle.css'
import ProductPageUnderBar from './ProductPageUnderBar'
import { Cookies } from 'react-cookie';

const cookies = new Cookies()

function ProductPage({ profileImage, productImage, userName, address, mannerTemp, mannerIcon, kategorie, detailKategorie, title, mainText, price, postedTime, visits, interest, chatting}){
    console.log(cookies.get('id'))
    // fetch('',{
    //     method : "POST",
    //     headers : {
    //         Authorization : cookies.get('id') 
    //         // Authorization : localStorage.getItem('cookie'), 
    //     }

    // })    

    const imgStyle = {
        width: '100%',
        height: '100%'
    } 
    
    const profilePngStyle = {
        width: '40px',
        height: '40px'
    }

    const tempFacestyle = {
        width: '30px',
        height: '30px',
        'border-radius': '60%'
    }

    return (
        <div id="detail">
            <div id='img'>
                <img style={imgStyle} src={productImage}/>
            </div>
            
            <div id="profile">
                <div id="profile_img">
                    <img src={profileImage} style={profilePngStyle}></img>
                </div>
                <div id="nickname">
                    <h2>{userName}</h2>
                    <p>{address}</p>
                
                </div>
                <div id="temp">
                    <div id="expression">
                        <p id="ondo">{mannerTemp}°C</p>
                        <img src={mannerIcon} style={tempFacestyle}/>
                    </div>
                    <p id="temp_text">매너온도</p>
                </div>
            </div>
            <div id="main_text">
                <div id="title">
                    <h1>{title}</h1>
                </div>
                <div id="tag">
                    <p>{kategorie} ∙ {postedTime}</p>
                </div>
                <div id="price">
                    <p>{price}원</p>
                </div>
                <div id="text">
                    <p>{mainText}</p>
                </div>
                <div id="popularity">
                    <p>관심 {interest} ∙ 채팅 {chatting} ∙ 조회 {visits}</p>
                </div>
                <ProductPageUnderBar price={price}/>
            </div>  
        </div>
    )
}

export default ProductPage;