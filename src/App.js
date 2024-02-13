import './style.min.css';
import './libs.min.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Howtostart from './pages/Howtostart.jsx';
import Support from './pages/Support.jsx';
import Footer from "./pages/Layout/Footer.jsx";
import Header from './pages/Layout/Header.jsx';
import Rules from './pages/Rules.jsx';
import Login from './pages/User/Login.jsx';

function App() {
  return (
      <body className='m-page'>
        <div className='wrapper'>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path='/' element = {<Home/>} />
              <Route path='/howtostart' element = {<Howtostart/>} />
              <Route path='/support' element = {<Support/>} />
              <Route path='/rules' element = {<Rules/>} />
              <Route path = '/user/login' element = {<Login/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>      
        </div>
      </body>
  );
}

export default App;
