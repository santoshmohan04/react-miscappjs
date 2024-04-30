import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sidenav.css';

export default function SideNav() {
  return (
    <React.Fragment>
      <div className="sidenav">
        <Link to="/chat">Chat UI</Link>
        <Link to="/bot">Chat Window</Link>
      </div>
    </React.Fragment>
  );
}
