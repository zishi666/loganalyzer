import React from 'react';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import { Outlet } from "react-router-dom";
import './Dashboard .css';

const dashboardPage = () => {
  const subPagesLink = [
    ['/', 'Main Events'],
    ['dhcpLogs', 'DHCP Logs'],
    ['dnsLogs', 'Dns Logs'],
    ['ldapLogs', 'Ldap logs'],
    ['securityEvents', 'Security Events'],
    ['linuxEvents', 'Linux Events'],
    ['logSeverityEvents', 'Log Severity Events']
  ]
  return (
    <>
      <div>Dashbord</div>
      <MainPagesNavbar data={subPagesLink}/>
      <div className='Section'>
         <Outlet/>
      </div>
    </>
    
  )
}

export default dashboardPage;