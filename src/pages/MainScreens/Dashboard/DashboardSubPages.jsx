import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { HeroBandSection } from '../../../components/HeroBandSection';

//Main Event define here
export const MainEventsPage = () => {
  const navigate = useNavigate();

  const navigateToChild = (id) => {
    navigate(`${id}`);
  }

  return (
  <>
    <HeroBandSection text='Main Events'/>
    <div className='mainPageLowerDataSection'> 
       <button onClick={() => navigateToChild('test1Page')}> Button 1</button>
       <button onClick={() => navigateToChild('test2Page')}> Button 2</button>
       <button onClick={() => navigateToChild('test3Page')}> Button 3</button>
    </div>
  </>
  )
}


//DHCP logs define here
export const DhcpLogsPage = () => {
  return (
    <>
    <HeroBandSection text='DHCP Logs'/>
    <div className='mainPageLowerDataSection'>DhcpLogsPage</div>
    </>
  )
}

//Dns Logs define here
export const DnsLogsPage = () => {
  return (
    <>
    <HeroBandSection text='DNS Logs'/>
    <div className='mainPageLowerDataSection'>DnsLogsPage</div>
    </>
  )
}

//LDAP logs define here
export const LdapLogsPage = () => {
  return (
    <>
    <HeroBandSection text='LDAP logs'/>
    <div className='mainPageLowerDataSection'>LdapLogsPage</div>
    </>
  )
}

//Security Events define here
export const SecurityEventsPage = () => {
  return (
    <>
    <HeroBandSection text='Security Events'/>
    <div className='mainPageLowerDataSection'>SecurityEventsPage</div>
    </>
  )
}

//Linux Events define here
export const LinuxEventsPage = () => {
  return (
    <>
    <HeroBandSection text='Linux Events'/>
    <div className='mainPageLowerDataSection'>LinuxEventsPage</div>
    </>
  )
}


//Log severity define here
export const LogSeverityEventPage = () => {
  return (
    <>
    <HeroBandSection text='Log Severity Events'/>
    <div className='mainPageLowerDataSection'>LogSeverityEventPage</div>
    </>
  )
}


