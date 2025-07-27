import React from 'react';
import '../styles/Sidebar.scss';
import { FaHome, FaEnvelope, FaUser, FaPlus } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">E-AFRICA</h2>
      <ul className="nav">
        <li><FaHome /> Dashboard</li>
        <li><FaPlus /> Post A Job</li>
        <li className="active"><FaUser /> Candidates</li>
        <li><FaEnvelope /> Schedule Interview</li>
        <li><FaEnvelope /> Messages</li>
      </ul>
      <div className="socials">
        <p>JOIN US ON</p>
        <div className="icons">
          <i className="fa fa-facebook" />
          <i className="fa fa-twitter" />
          <i className="fa fa-instagram" />
          <i className="fa fa-youtube" />
        </div>
      </div>
    </div>
  );
}
