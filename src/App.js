import './style.min.css';
import './libs.min.css';
import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Howtostart from './pages/Howtostart.jsx';
import Support from './pages/Support.jsx';
import Footer from "./pages/Layout/Footer.jsx";
import Header from './pages/Layout/Header.jsx';
import Rules from './pages/Rules.jsx';
import Logined from './pages/User/Logined.jsx';
import NotLogined from './pages/User/NotLogined.jsx';

function App() {
  const [islogin, setLogin] = useState(false);

  const toogleLogin = () => {
    setLogin(!islogin)
  }

  useEffect(() => {
    const url = window.location;
    console.log("---- current url -------", url.search)
    const urlParams = new URLSearchParams(url.search);
    const steam_id = urlParams.get('id');
    console.log(steam_id);
    if (steam_id !== null) {
      localStorage.setItem('steam_id', steam_id);
      console.log("---------- steam_id ------------", steam_id)
      window.location.href = '/user/logined'
    }

  }, []);

  return (
    <body className='m-page'>
      <div className='wrapper'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/howtostart' element={<Howtostart />} />
            <Route path='/support' element={<Support />} />
            <Route path='/rules' element={<Rules />} />
            <Route path='/user/login' element={<Logined />} />
            <Route path='/user/logined' element={<NotLogined />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </body>
  );
}

export default App;
