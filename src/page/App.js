//local page import
import Deal from './Deal';
import Main from './main';
import Login from './Login';
import Partime from './Partime';
import Signup  from './signup';
import Test from '../Test';
import Signup_end from './signup_end';
import LoginCheck from '../action/LoginCheck';
import deal_poster from './deal_poster';
import { Cookies, useCookies } from 'react-cookie';
import ProductPage from './detail_page/ProductPage';
import Search_deal from './search_deal';
import New_post from './new_post';
//bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//app import
import {Navbar, Container, Nav } from 'react-bootstrap';
import {Route, Routes, useNavigate} from 'react-router-dom';

//style import
import '../App.css';


function App() {

  let navigate = useNavigate();
  return (
    <div id="main" className="App">
      <Routes>
        <Route path='/new_post' element={<New_post/>} />
        <Route path='/search_deal' element={<Search_deal/>} />
        <Route path='/' element={<Main/>} />
        <Route path='/ProductPage' element={<ProductPage/>} />
        <Route path='/signup_end' element={<Signup_end/>} />
        <Route path='/main' element={<Main/>} />
        <Route path='/deal' element={<Deal/>} />
        <Route path='/partime' element={<Partime/>} />
        <Route path='/main' element={<Deal/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/popup' element={<Test/>} />
        <Route path='/LoginCheck' element={<LoginCheck/>} />
        <Route path='/deal_poster' element={<deal_poster/>} />
      </Routes>

      <footer className="py-3 my-4">
        <hr/>
        <p className="text-center text-muted">© 2022 Company, Inc</p>
      </footer>
    </div> 
  );
}

export default App;
