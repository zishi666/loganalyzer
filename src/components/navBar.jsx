import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
   <>
   <header>
    <nav>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="report">Report</Link></li>
            <li><Link to="compliance">Compliance</Link></li>
            <li><Link to="alerts">Alerts</Link></li>
            <li><Link to="setting">Setting</Link></li>
            <li><Link to="support">Support</Link></li>
        </ul>
    </nav>
   </header>
   </>
  )
}
