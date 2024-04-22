import React from "react";
import "./style.css";
import SideNav from "./Components/SideNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ChatWindow from "./Components/ChatWindow";
import ChatUI from "./Components/ChatUI";
import CardsView from "./Components/Cards";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route path="/" element={<Navigate to="/table" />} />
              <Route path="/table" element={<Home />} />
              <Route path="/cards" element={<CardsView />} />
              <Route path="/chat" element={<ChatUI />} />
              <Route path="/bot" element={<ChatWindow />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
