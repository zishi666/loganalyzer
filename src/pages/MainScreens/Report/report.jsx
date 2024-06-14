import React from 'react';
import { Outlet } from "react-router-dom";
import { ReportRoutesLinks, ReportIconsData } from '../../../components/SubpagesRoutes';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import './Report.css';

const reportPage = () => {
  return (
    <div className='MainPage'>
      <MainPagesNavbar data={ReportRoutesLinks} iconImag={ReportIconsData}/>
      <div className='MainPageRightSection'>
          <Outlet/>
        </div>
    </div>
  )
}

export default reportPage;