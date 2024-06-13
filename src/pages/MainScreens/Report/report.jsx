import React from 'react';
import { Outlet } from "react-router-dom";
import { ReportRoutesLinks } from '../../../components/SubpagesRoutes';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import './Report.css';

const reportPage = () => {
  return (
    <div className='MainPage'>
      <MainPagesNavbar data={ReportRoutesLinks}/>
      <div className='MainPageRightSection'>
          <Outlet/>
        </div>
    </div>
  )
}

export default reportPage;