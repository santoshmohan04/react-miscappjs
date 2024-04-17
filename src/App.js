import React from 'react';
import './style.css';
import SideNav from './Components/SideNav';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import ChatWindow from './Components/ChatWindow';
import ChatUI from './Components/ChatUI';

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <SideNav />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatUI />} />
            <Route path="/bot" element={<ChatWindow />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}
