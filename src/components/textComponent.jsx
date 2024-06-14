import React from 'react';
import { useParams } from 'react-router-dom';
import { HeroBandSection } from './HeroBandSection';

export const TestComponent = () => {
    const {id} = useParams();
  return (
    <>
        <HeroBandSection text='Main Events'/>
        <div className='mainPageLowerDataSection'>Test Screen here {id}</div>
    </>
  )
}
