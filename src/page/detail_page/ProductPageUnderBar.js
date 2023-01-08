function ProductPageUnderBar({ heartIcon, price, DangGunpayIcon }) {
    return (
        <>
            <article id="final">
                <div id="love">
                    <p>♡</p>
                </div>
                <div id="final_price">
                    <p id="won">{price}원</p>
                    <p id="suggest">가격 제안 불가</p>
                </div>
                <div id="chat">
                    <input type="button" value="채팅하기"></input>
                </div>
            </article>
        </>

    )
}

export default ProductPageUnderBar;