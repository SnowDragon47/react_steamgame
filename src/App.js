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
import DetailTournament from './pages/DetailTournament.jsx';
import LeaderBoard from './pages/LeaderBoard.jsx';

import { initWeb3InboxClient } from "@web3inbox/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
const queryClient = new QueryClient()
// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.REACT_APP_WAGMI_PROJECT_ID

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const config = defaultWagmiConfig({
  chains, // required
  projectId, // required
  metadata, // required
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

function App() {
  const [islogin, setLogin] = useState(false);


  const projectId = process.env.REACT_APP_WAGMI_PROJECT_ID;
  const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN;

  initWeb3InboxClient({
    projectId,
    domain: appDomain,
  });

  useEffect(() => {
    const url = window.location;
    console.log("---- current url -------", url.search)
    const urlParams = new URLSearchParams(url.search);
    const steam_id = urlParams.get('id');
    const steam_username = urlParams.get('name');
    const steam_avatar = urlParams.get('avatar');
    console.log(steam_id);
    if (steam_id !== null) {
      localStorage.setItem('steam_id', steam_id);
      localStorage.setItem('steam_username', steam_username);
      localStorage.setItem('steam_avatar', steam_avatar);
      console.log("---------- steam_id ------------", steam_id)
      console.log("---------- steam_username ------------", steam_username)
      console.log("---------- steam_avatar ------------", steam_avatar)
      window.location.href = '/user/logined'
    }

  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
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
                <Route path='/user/profile' element={<Logined />} />
                <Route path='/user/detailTournament' element={<DetailTournament/>}/>
                <Route path='/user/leaderboard'element= {<LeaderBoard/>}/>

              </Routes>
              <Footer />
            </BrowserRouter>
          </div>
        </body>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
