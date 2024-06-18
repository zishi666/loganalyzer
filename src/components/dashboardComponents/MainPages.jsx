import React from 'react';
import countUp from '../../Asset/TableImages/countUp.svg';
import countDown from '../../Asset/TableImages/countDown.svg';
import allDevicesImg from '../../Asset/dashboardImages/cardAllDevicesImages.svg';
import { AlertData, CardAlertData } from './AlertData';
import { TableData } from './TableData';
import { DHCPBarChart } from './dashboardCharts';
// import { TodayLogsCharts } from './dashboardCharts';

export const MainPage = () => {
  return (
    <div className='MainPageSection'>
            <div className='upperSectionMainPage'>
              
              <div className='MainCard'>
                    <div className='CardHeaderText'>
                            All Events
                    </div>
                    
                    <div className="CardBody">

                        <div className='logDataSection'>
                              76276k
                              <div className="dataTrendSection">
                                <img src={countUp} alt="" />
                                  7259856 (1972.35%)
                              </div>
                        </div>

                    </div>

              </div>

              <div className='MainCard'>
                    <div className='CardHeaderText'>
                            Today Logs
                    </div>
                    
                    <div className="CardBody">

                        <div className='logDataSection'>
                                276k
                              <div className="dataTrendSection">
                                  <img src={countDown} alt="" />
                                  267395 (8129.98%)
                              </div>
                         </div>

                        <div className='visualSection'>
                              {/* <TodayLogsCharts /> */}
                        </div>

                    </div>
              </div>

              <div className='MainCard'>
                    <div className='CardHeaderText'>
                            All Devices
                    </div>
                    
                    <div className="CardBody">
                        
                          <div className='logDataSection'>
                                44
                          </div>

                          <div className='visualSection'>
                               <img src={allDevicesImg} alt="" />
                          </div>

                    </div>
              </div>

            </div>

            <div className='lowerSectionMainPage'>
                  
                  <div className='lowerSectionMainPageLeftSide'>

                        <div className='LeftSideRecentLogs'>
                              <div className='CardHeaderText'>
                              Recent Logs
                              </div>  

                              <div className='LowerSectionsCardBody'>
                                    
                              </div>   
                        </div>

                        <div className='LeftSideRecentAlerts alertBG'>
                              <div className='CardHeaderText'>
                              Recent Alerts
                              </div>  

                              <div className='LowerSectionsCardBody'>
                                    <CardAlertData/>
                              </div>
                        </div>

                  </div>

                  <div className='lowerSectionMainPageRightSide'>

                        <div className='RightSideAnamolyLogs'>
                              <div className='CardHeaderText'>
                                    Anomaly Logs
                              </div>

                              <div className='LowerSectionsCardBody'>
                                    <TableData pageID='today-events-logs' />
                              </div>  
                        </div>

                        <div className='RightSideGraphsSection'>

                              <div className='RSGSGrap'>
                                          <DHCPBarChart />
                              </div>

                              <div className='RSGSGrap'>

                              </div>

                              <div className='RSGSGrap'>
                           
                              </div>

                        </div>

                  </div>

            </div>
    </div>
  )
}


