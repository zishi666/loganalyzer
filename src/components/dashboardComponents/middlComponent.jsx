import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeroBandSection } from '../HeroBandSection';
import { setPageName } from '../SubpagesRoutes';
import '../../pages/MainScreens/Dashboard/Dashboard .css';
import Previous from '../../Asset/TableImages/previousTable.svg';
import Next from '../../Asset/TableImages/nextTable.svg';
import Delete from '../../Asset/TableImages/delete.svg';
import MoreActions from '../../Asset/TableImages/moreOptions.svg';
import { TableData } from './TableData';
import { AlertData } from './AlertData';
import { DHCPBarChart } from './dashboardCharts';

export const TestComponent = () => {
    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(20);
    // const [preHide, setPreHide] = useState(false);
    // const [previousHide, setPreviousHide] = useState(false);

    const ldapLagends = [
      ['#366074', 'Information'],
      ['#aaf170', 'Success'],
      ['#ecaa30', 'Warning'],
      ['#F91010', 'Error'],
      ['#616161', 'Failure'],
    ]

    const totalPages = 43;
   
    const decreasePages = () => {
      // Decrease pages by 20, but don't go below page 1
      setStartPage(prev => Math.max(prev - 20, 1));
      setEndPage(prev => Math.max(prev - 20, 20));
  };

  const increasePages = () => {
      // Increase pages by 20, but don't go beyond the total number of pages
      setStartPage(prev => {
          const newStart = prev + 20;
          return newStart < totalPages ? newStart : prev;
      });
      setEndPage(prev => {
          const newEnd = prev + 20;
          return newEnd < totalPages ? newEnd : totalPages;
      });
  };

    const {id} = useParams();  //Getting the ID name of page from parameters in url
    
  return (
    <>
        <HeroBandSection text={setPageName(id)}/>
        <div className='mainPageLowerDataSection'>

            {/* //Give css only this Section tag in the Dasboard .css File */}
            <section className={'mainTableSection ' + (id === 'anamoly-logs' ? 'changeBG' : id === 'recent-alerts' ? 'alertBG' : id === 'all-dhcp-logs' ? 'blackBG' : id === 'all-ldap-logs' ? 'blackBG' : '')}>
              {
                id === 'recent-alerts' 
                ? <div> 
                      <AlertData />
                  </div>
                :
                  id === 'all-dhcp-logs' 
                  ? <div className='DHCPChartSection'>
                        <div className='dhcpChart'>
                            <DHCPBarChart/>
                        </div>
                        <div className='dhcpLagends'>
                            {
                              ldapLagends.map((lagend, index) => (
                                
                                  <div className='Lagend' key={index}>
                                    <div className='LagendIndication' style={{background: `${lagend[0]}`}}>
                                    </div>
                                        {lagend[1]}
                                  </div>
                                
                              ))
                            }
                        </div>
                  </div>
                  :
                    id === 'all-dns-logs'
                    ? <div className='DHCPChartSection'>
                            <div className='dhcpChart'>
                                <DHCPBarChart/>
                            </div>
                            <div className='dhcpLagends'>
                                {
                                  ldapLagends.map((lagend, index) => (
                                    
                                      <div className='Lagend' key={index}>
                                        <div className='LagendIndication' style={{background: `${lagend[0]}`}}>
                                        </div>
                                            {lagend[1]}
                                      </div>
                                    
                                  ))
                                }
                            </div>
                      </div>
                    :
                      id === 'all-ldap-logs'
                      ? <div className='DHCPChartSection'>
                            <div className='dhcpChart'>
                                <DHCPBarChart/>
                            </div>
                            <div className='dhcpLagends'>
                                {
                                  ldapLagends.map((lagend, index) => (
                                    
                                      <div className='Lagend' key={index}>
                                        <div className='LagendIndication' style={{background: `${lagend[0]}`}}>
                                        </div>
                                            {lagend[1]}
                                      </div>
                                    
                                  ))
                                }
                            </div>
                        </div>
                      :
                      <div>
                              <div className='tabeActionsSection'>

                                  <div className='Actions firstActions'>

                                    {
                                      totalPages <= 20 ? <div className="changePages">{totalPages}</div>
                                                      : <div className="changePages"> {startPage} to {endPage} from {totalPages}</div>
                                    } 

                                      <div className="changeBtns">
                                        <img src={Previous} alt="" onClick={decreasePages} disabled={startPage === 1}/>
                                        <img src={Next} alt="" onClick={increasePages} disabled={endPage >= totalPages}/>
                                      </div>

                                      <div className="deleteBtn">
                                        <img src={Delete} alt="" />
                                      </div>

                                      <div className="moreActionsBtn">
                                        <img src={MoreActions} alt="" />
                                      </div>

                                  </div>

                                  <div className='Actions secondActions'>
                                      <div className="changePages">
                                        Add/Remove Columns
                                      </div>
                                  </div>

                              </div>

                              <div className='tableDataSection'>
                                <TableData pageID={id}/>
                              </div>
                      </div>
              }
            </section>


        </div>
    </>
  )
}
