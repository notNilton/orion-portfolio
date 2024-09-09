// src/components/Frame.tsx
import React from 'react';
import MainContent from './MainContent';
import Topbar from './Topbar'; 
import Footer from './Footer'; 
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import '../styles/Frame.scss';

const Frame: React.FC = () => {
  return (
    <div className="frame">
      <Topbar /> 
      <LeftSidebar /> 
      <MainContent /> 
      <RightSidebar /> 
      <Footer />
    </div>
  );
};

export default Frame;
