import React from 'react';
import { Outlet } from "react-router-dom";
import { ReportRoutesLinks } from '../../../components/SubpagesRoutes';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import './Report.css';

const reportPage = () => {
  return (
    <>
    <div>Report</div>
    <MainPagesNavbar data={ReportRoutesLinks}/>
    <div className='Section'>
         <Outlet/>
      </div>
    </>
    
  )
}

export default reportPage;