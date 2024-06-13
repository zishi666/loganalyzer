import React from 'react';
import { Outlet } from "react-router-dom";
import { CompilanceRoutesLinks } from '../../../components/SubpagesRoutes';
import MainPagesNavbar from '../../../components/mainPagesNavbar';
import './Compliance.css';

const compliancePage = () => {
  return (
    <>
    <div>Compliance</div>
    <MainPagesNavbar data={CompilanceRoutesLinks}/>
    <div className='Section'>
         <Outlet/>
      </div>
    </>
    
  )
}

export default compliancePage;
