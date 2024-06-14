import React from 'react';
import { Outlet } from "react-router-dom";
import { CompilanceRoutesLinks, ComplianceIconsData } from '../../../components/SubpagesRoutes';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import './Compliance.css';

const compliancePage = () => {
  return (
    <div className='MainPage'>
      <MainPagesNavbar data={CompilanceRoutesLinks} iconImag={ComplianceIconsData}/>
      <div className='MainPageRightSection'>
          <Outlet/>
        </div>
      </div>
  )
}

export default compliancePage;
