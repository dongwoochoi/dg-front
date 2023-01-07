//local page import
//bootstrap import
//app import
//style import
import Navvv from './nav';
import '../css_page/deal.css';
import Deal_poster from './deal_poster';


function Deal(){
    return (
        <div className='deal_main'>
            <Navvv/>
            <div className='deal_container'>
                <p>인기 중고 매물</p>
                <Deal_poster/>
            </div>
        </div>
    );
}

export default Deal;