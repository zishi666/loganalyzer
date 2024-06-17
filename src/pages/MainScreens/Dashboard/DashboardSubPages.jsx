import React from 'react';
import { useNavigate} from "react-router-dom";
import { HeroBandSection } from '../../../components/HeroBandSection';
import { TableData } from '../../../components/dashboardComponents/TableData';
import { DonutChart, BarChart } from '../../../components/dashboardComponents/dashboardCharts';
import upLogs from '../../../Asset/dashboardImages/LinuxUpEvents.svg';

//Main Event define here
export const MainEventsPage = () => {
  const navigate = useNavigate();
  const navigateToChild = (id) => {
    navigate(`/${id}`);
  }

  return (
  <>
    <HeroBandSection text='Main Events'/>
    <div className='mainPageLowerDataSection'> 
       <section className='mainTableSection'>
            <div>
                  <button onClick={() => navigateToChild('today-events-logs')}>Today Events Link</button>
            </div>
        </section>
    </div>
  </>
  )
}


//DHCP logs define here
export const DhcpLogsPage = () => {
  const navigate = useNavigate();
  const navigateToChild = (id) => {
    navigate(`/${id}`);
  }

  return (
    <>
    <HeroBandSection text='DHCP Logs'/>
    <div className='mainPageLowerDataSection'>
       <section className='mainTableSection'>
            <div>
              <button onClick={() => navigateToChild('today-dhcp-logs')}>Today DHCP logs link</button>
              <button onClick={() => navigateToChild('anamoly-logs')}>Anamoly LOogs Link</button>
              <button onClick={() => navigateToChild('recent-alerts')}>Recent Alert Link Link</button>
              <button onClick={() => navigateToChild('all-dhcp-logs')}>Go to all DHCP logs</button>
            </div>
        </section>
    </div>
    </>
  )
}

//Dns Logs define here
export const DnsLogsPage = () => {
  const navigate = useNavigate();
  const navigateToChild = (id) => {
    navigate(`/${id}`);
  }

  return (
    <>
    <HeroBandSection text='DNS Logs'/>
    <div className='mainPageLowerDataSection'>
       <section className='mainTableSection'>
            <div>
                <button onClick={() => navigateToChild('today-dns-logs')}>Today DNS logs link</button>
                <button onClick={() => navigateToChild('anamoly-logs')}>Anamoly LOogs Link</button>
                <button onClick={() => navigateToChild('recent-alerts')}>Recent Alert Link Link</button>
                <button onClick={() => navigateToChild('all-dns-logs')}>Go to all DHCP logs</button>
            </div>
        </section>
    </div>
    </>
  )
}

//LDAP logs define here
export const LdapLogsPage = () => {
  const navigate = useNavigate();
  const navigateToChild = (id) => {
    navigate(`/${id}`);
  }

  return (
    <>
    <HeroBandSection text='LDAP logs'/>
    <div className='mainPageLowerDataSection'>
       <section className='mainTableSection'>
        <div>
            <button onClick={() => navigateToChild('today-ldap-logs')}>Today LDAP logs link</button>
            <button onClick={() => navigateToChild('anamoly-logs')}>Anamoly LOogs Link</button>
            <button onClick={() => navigateToChild('recent-alerts')}>Recent Alert Link Link</button>
            <button onClick={() => navigateToChild('all-ldap-logs')}>Go to all DHCP logs</button>
          </div>
        </section>
    </div>
    </>
  )
}

//Security Events define here
export const SecurityEventsPage = () => {
  // const navigate = useNavigate();
  // const navigateToChild = (id) => {
  //   navigate(`/${id}`);
  // }

  return (
    <>
    <HeroBandSection text='Security Events'/>
    <div className='mainPageLowerDataSection'>
       {/* <button onClick={() => navigateToChild('logon-logs')}>Logon</button>
       <button onClick={() => navigateToChild('account-logon-logs')}>Account Logon</button>
       <button onClick={() => navigateToChild('account-management-logs')}>Account Management</button>
       <button onClick={() => navigateToChild('object-access-logs')}>Object Access</button>
       <button onClick={() => navigateToChild('system-events-logs')}>System Events</button>
       <button onClick={() => navigateToChild('policy-changes-logs')}>Policy Changes</button>
       <button onClick={() => navigateToChild('security-assessment-logs')}>Security Assessment</button>
       <button onClick={() => navigateToChild('user-access-logs')}>User Access</button> */}
       <section className='mainTableSection'>
            <div>
                <TableData pageID='securityEvents'/>
            </div>
       </section>
    </div>
    </>
  )
}

//Linux Events define here
export const LinuxEventsPage = () => {
  const navigate = useNavigate();
  const navigateToChild = (id) => {
    navigate(`/${id}`);
  }

  return (
    <>
    <HeroBandSection text='Linux Events'/>
    <div className='mainPageLowerDataSection'>
       <section className='mainTableSection'>
          <div>
              {/* <button onClick={() => navigateToChild('success-logs')}>Success</button>
              <button onClick={() => navigateToChild('information-logs')}>Information</button>
              <button onClick={() => navigateToChild('warning-logs')}>Warnings</button> */}
              {/* <div className='testChart'>
                <DonutChart />
              </div> */}
              <div className='mainLinuxSection'>

                  <div className='chartArea'>
                    <div className='AllLogsSection'>
                            <div>
                            76276k
                            </div>

                            <div className='logRate'>
                              <img src={upLogs} alt="" />
                              7259856 (1972.35%)
                            </div>
                    </div>

                    <div className='testChart'>
                        <DonutChart />
                    </div>
                    
                  </div>

                  <div className='dataPointsArea'>
                        <div className='DataPoint' onClick={() => navigateToChild('success-logs')}>
                          <div className='success'>
                          </div>
                          Success
                        </div>

                        <div className='DataPoint' onClick={() => navigateToChild('information-logs')}>
                            <div className='information'>

                            </div>
                            Information
                        </div>

                        <div className='DataPoint' onClick={() => navigateToChild('warning-logs')}>
                            <div className='warning'>

                            </div>
                            Warning
                        </div>
                  </div>

              </div>

          </div>
       </section>
    </div>
    </>
  )
}


//Log severity define here
export const LogSeverityEventPage = () => {
  return (
    <>
    <HeroBandSection text='Log Severity Events'/>
    <div className='mainPageLowerDataSection'>
        <section className='mainTableSection'>
            <div>
               <BarChart />
            </div>
        </section>
    </div>
    </>
  )
}


