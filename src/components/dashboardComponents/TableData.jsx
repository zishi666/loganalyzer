import React, { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import { securityPagesRoutes } from '../SubpagesRoutes';
import Upimg from '../../Asset/TableImages/countUp.svg';
import Downimg from '../../Asset/TableImages/countDown.svg';

export const TableData = ( {pageID} ) => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const navigateToChild = (id) => {
    navigate(`/${id}`);
  }

    // Using useEffect to call fetchData when the component mounts
    useEffect(() => {
        const getData = async (pageID) => {
            const result = await fetchData(pageID);
            setData(result);
        };

        getData(pageID);
    }, [pageID]);

    if (data.length === 0) {
        return <div className='loaderData'>Loading...</div>;
    }

    const CompareRateofSecurityLogs = (LogObject) => {
        // Extract the numeric values from the object
        const countValue = parseFloat(LogObject.Count);
        const emptyKeyValue = parseFloat(LogObject[""].split(' ')[0]);
    
        // Compare the two values
        if (countValue > emptyKeyValue) {
            console.log('Count is greater:', countValue);
            return true;
        } else if (countValue < emptyKeyValue) {
            console.log('Empty key value is greater:', emptyKeyValue);
            return false;
        } else {
            console.log('Both values are equal:', countValue);
            return true;
        }
    }
    

  return (
    <table className={(pageID === 'securityEvents' ? 'SecurityTable' : '')}>
            <thead>
                    <tr>
                    {
                      Object.keys(data[0]).map((key, i) => (
                        key === 'id' ? null : <th key={i}>{key}</th>
                      ))
                    }
                    </tr>  
            </thead>
            
            <tbody>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            {
                                Object.values(item).map((value, i) => (
                                    i === 0 
                                        ? null 
                                        : <td key={i} className={value === 'Resolved' ? 'tdBlue' : value === 'Waiting' ? 'tdRed' : (Object.keys(item)[i] === '' ? 'EmptyKeyCell' : (Object.keys(item)[i] === 'Action' ? 'ActionKeyCell' : ''))}> 
                                                {pageID === 'securityEvents' 
                                                    ? (Object.keys(item)[i] === '' 
                                                                    ? (
                                                                        CompareRateofSecurityLogs(item) 
                                                                        ? <><img src={Upimg} alt=''className='countRatesImg'/>{value}</> 
                                                                        : <><img src={Downimg} alt=''className='countRatesImg'/>{value}</> 

                                                                    )
                                                                    : (Object.keys(item)[i] === 'Action' 
                                                                                ? <div style={{cursor: 'pointer'}} onClick={() => navigateToChild(securityPagesRoutes[index])}>{value}</div>  
                                                                                : value)) 
                                                    : value} 
{/*                                                 
                                                {value} */}
                                          </td>
                                ))
                            }
                        </tr>))
                     }
            </tbody>
    </table>
  )
}


///Dummy data for today Aall events logs for first dashboard page
const todayAllLogsData = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
];

const todayDHCPLogsData = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
];
const todayDNSLogsData = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
];
const todayLDAPLogsData = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'User', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Waiting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', IP: '192.168.1.1', Username: 'Admin', Event: '1028', Status: 'Resolved'},
];
const LogonLogs = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Windows Logon Success', Username: 'System', Severity: 'Sucess', 'Remote Device': '-'},
];
const accountLogonLogs = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'eventlog-team', Severity: 'Sucess', 'Remote Device': 'ITSLOG360-2019'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'eventlog-team', Severity: 'Sucess', 'Remote Device': 'ITSLOG360-2019'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'administrator', Severity: 'Sucess', 'Remote Device': 'ITSLOG360-2019'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'eventlog-team', Severity: 'Sucess', 'Remote Device': 'ITSLOG360-2019'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'eventlog-team', Severity: 'Sucess', 'Remote Device': 'ADVENT-JAP'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'administrator', Severity: 'Sucess', 'Remote Device': 'ADVENT-JAP'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'administrator', Severity: 'Sucess', 'Remote Device': 'ADVENT-JAP'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'eventlog-team', Severity: 'Sucess', 'Remote Device': 'ADVENT-JAP'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'eventlog-team', Severity: 'Sucess', 'Remote Device': 'ELA-WIN2008-32'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'administrator', Severity: 'Sucess', 'Remote Device': 'ELA-WIN2008-32'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'eventlog-team', Severity: 'Sucess', 'Remote Device': 'ELA-WIN2008-32'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'administrator', Severity: 'Sucess', 'Remote Device': 'ELA-WIN2008-32'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'eventlog-team', Severity: 'Sucess', 'Remote Device': 'ELA-WIN2008-32'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'eventlog-team', Severity: 'Sucess', 'Remote Device': 'ADVENT-JAP'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'administrator', Severity: 'Sucess', 'Remote Device': 'ADVENT-JAP'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'eventlog-team', Severity: 'Sucess', 'Remote Device': 'ELA-WIN2008-32'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'administrator', Severity: 'Sucess', 'Remote Device': 'ELA-WIN2008-32'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'administrator', Severity: 'Sucess', 'Remote Device': 'ELA-WIN2008-32'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'administrator', Severity: 'Sucess', 'Remote Device': 'ELA-WIN2008-32'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'eventlog-team', Severity: 'Sucess', 'Remote Device': 'ELA-WIN2008-32'},
];
const accountManagementLogs = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ELANEW2014', 'Target User': 'hidden$'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'eventlog-team', Domain: 'ELANEW2014', 'Target User': 'hidden$'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'eventlog-team', Domain: 'ELANEW2014', 'Target User': 'S-1-5-21-2477490969-9'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ELANEW2014', 'Target User': 'S-1-5-21-2477490969-9'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ELANEW2014', 'Target User': 'S-1-5-21-2477490969-9'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ITSECBAS', 'Target User': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ITSECBAS', 'Target User': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ITSECBAS', 'Target User': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ITSECBAS', 'Target User': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ITSECBAS', 'Target User': 'hidden$'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ITSECBAS', 'Target User': 'hidden$'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ELANEW2014', 'Target User': 'hidden$'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ELANEW2014', 'Target User': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ELANEW2014', 'Target User': '-'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ELANEW2014', 'Target User': 'scotty'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'ELANEW2014', 'Target User': 'scotty'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'zymkasi.com', 'Target User': 'S-1-5-21-2477490969-9'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'zymkasi.com', 'Target User': 'scotty'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'zymkasi.com', 'Target User': 'S-1-5-21-2477490969-9'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Changes: '-', Username: 'Administrator', Domain: 'zymkasi.com', 'Target User': 'S-1-5-21-2477490969-9'},
];
const objectAccessLogs = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'EL-WIN2012-LAP$', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'scott', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'scott', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': '-', Username: 'scott', 'Object Type': 'File', 'Target User': 'C:\\ManageEngine\\EventLog\\pgsql\\bin'},
];
const systemEventsLogs = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'Administrator', 'Event Name': 'Windows Audit Log Cleared', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'ELANEW2017\\secGroup', 'Event Name': 'Windows Audit Log Cleared', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'ELANEW2017\\secGroup', 'Event Name': '-', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'Administrator', 'Event Name': '-', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'Administrator', 'Event Name': '-', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'ELANEW2017\\Administrator', 'Event Name': '-', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '0x3DE02', Username: 'Administrator', 'Event Name': 'Windows Audit Log Cleared', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'Administrator', 'Event Name': '-', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'ELANEW2017\\Administrator', 'Event Name': '-', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'Administrator', 'Event Name': '-', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '0x3DE02', Username: 'Administrator', 'Event Name': '-', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'Administrator', 'Event Name': '-', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'ELANEW2017\\Administrator', 'Event Name': 'Windows Audit Log Cleared', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'Administrator', 'Event Name': 'Windows Audit Log Cleared', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '0x3DE02', Username: 'ELANEW2017\\Administrator', 'Event Name': 'Windows Audit Log Cleared', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'Administrator', 'Event Name': 'Windows Audit Log Cleared', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'Administrator', 'Event Name': 'Windows Audit Log Cleared', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '0x3DE02', Username: 'Administrator', 'Event Name': '-', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'ELANEW2017\\secGroup', 'Event Name': '-', Source: 'Microsoft-Windows-Eventlog'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Logonid': '-', Username: 'ELANEW2017\\secGroup', 'Event Name': 'Windows Audit Log Cleared', Source: 'Microsoft-Windows-Eventlog'},
];
const policyChangesLogs = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'EL-WIN2012-LAP$', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'scott', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'scott', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'scott', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': '-', Username: 'scott', 'Event ID': '4719', 'Target User': 'Microsoft-Windows-Security-Auditing'},
];
const securityAssasmentLogs = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Network Setup Service service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The WMI Performance Adapter service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The WMI Performance Adapter service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Network Setup Service service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Network Setup Service service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The WMI Performance Adapter service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Network Setup Service service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Intelligent Transfer Service  entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Intelligent Transfer Service  entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Intelligent Transfer Service  entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Performance Adapter service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The WMI Performance Adapter service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Intelligent Transfer Service  entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Intelligent Transfer Service  entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Network Setup Service service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Performance Adapter service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Network Setup Service service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Intelligent Transfer Service  entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The Performance Adapter service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Message: 'The WMI Performance Adapter service entered the running state.', Source: 'Service Control Manager', Severity: 'Information'},
];
const userAccessLogs = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Event Name': 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
];
const successLogs = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Success', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Security-Auditing'},
];
const informationLogs = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Windows Error Reporting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Service Control Manager'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Windows Error Reporting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Service Control Manager'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Windows Error Reporting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Service Control Manager'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Windows Error Reporting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Service Control Manager'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Windows Error Reporting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Service Control Manager'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Windows Error Reporting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Service Control Manager'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Windows Error Reporting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Service Control Manager'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Windows Error Reporting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Service Control Manager'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: 'SYSTEM', 'Event ID': '4719', Source: 'Windows Error Reporting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Service Control Manager'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Windows Error Reporting'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Information', Username: '-', 'Event ID': '4719', Source: 'Service Control Manager'},
];
const warningLOogs = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Perflib'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Time-Service'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Perflib'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Time-Service'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Perflib'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Time-Service'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Perflib'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Time-Service'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Perflib'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Time-Service'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Perflib'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Time-Service'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Perflib'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Time-Service'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Perflib'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Time-Service'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Perflib'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Time-Service'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Perflib'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', Severity: 'Warning', Username: '-', 'Event ID': '4719', Source: 'Microsoft-Windows-Time-Service'},
];

const anamolyLogs = [
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'RENAMED',  'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name' : 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'Modified', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'Deleted', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'Permission changed', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'Modified', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'RENAMED', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'Deleted', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'RENAMED', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'Modified', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'RENAMED', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'Deleted', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'RENAMED', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'Permission changed', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'Deleted', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'RENAMED', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'Modified', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'RENAMED', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'Deleted', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'RENAMED', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
    { id: 1, Time: '2022-10-17 12:31:47', Device: 'itsl360-2k19-2', 'Change Type': 'RENAMED', 'File Name': 'c\\users\\administrator\\desktop\\fim\\logs\\upmgrlog - copy.props', 'Process Name': 'C:\\Windows\\explorer.exe', 'Location Type': 'File'},
]

const securityEventsTableData = [
    { id: 1, 'Report Name': 'Logon', Count: '25593', '':'2550 (1972.35%)', Action: 'View Report'},
    { id: 1, 'Report Name': 'Account Logon', Count: '17575', '':'17577', Action: 'View Report'},
    { id: 1, 'Report Name': 'Account Management', Count: '2844', '':'2839 (56780.00%)', Action: 'View Report'},
    { id: 1, 'Report Name': 'Object Access', Count: '1243', '':'1239 (30975.00%)', Action: 'View Report'},
    { id: 1, 'Report Name': 'System Events', Count: '4142650', '':'4142653 (207132650.00%)', Action: 'View Report'},
    { id: 1, 'Report Name': 'Policy Changes', Count: '67', '':'67', Action: 'View Report'},
    { id: 1, 'Report Name': 'Security Assessment', Count: '439', '':'437 (21850.00%)', Action: 'View Report'},
    { id: 1, 'Report Name': 'User Access', Count: '3885220', '':'3886041 (2170972.63%)', Action: 'View Report'},
]


const fetchData = async (pageID) => {
    
    return pageID === 'today-events-logs' 
    ? todayAllLogsData
    : pageID === 'today-dhcp-logs'
          ? todayDHCPLogsData
          :  pageID === 'today-dns-logs'
                ? todayDNSLogsData
                : pageID === 'today-ldap-logs'
                    ? todayLDAPLogsData
                    : pageID === 'logon-logs'
                        ? LogonLogs
                        : pageID === 'account-logon-logs'
                              ? accountLogonLogs
                              : pageID === 'account-management-logs'
                                   ? accountManagementLogs
                                   : pageID === 'object-access-logs'
                                      ? objectAccessLogs
                                      : pageID === 'system-events-logs'
                                          ? systemEventsLogs
                                          : pageID === 'policy-changes-logs'
                                              ? policyChangesLogs
                                              : pageID === 'security-assessment-logs'
                                                  ? securityAssasmentLogs
                                                  : pageID === 'user-access-logs'
                                                      ? userAccessLogs
                                                      : pageID === 'success-logs'
                                                          ? successLogs
                                                          : pageID === 'information-logs'
                                                              ? informationLogs
                                                              : pageID === 'anamoly-logs' 
                                                                    ? anamolyLogs
                                                                    : pageID === 'warning-logs'
                                                                        ? warningLOogs
                                                                        : pageID === 'securityEvents'
                                                                            ? securityEventsTableData
                                                                            : [];
};
