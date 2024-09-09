// src/components/Frame.tsx
import React from 'react';
import MainContent from './MainContent';
import Header from './Header'; 
import Footer from './Footer'; 
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import '../styles/Frame.scss';

const Frame: React.FC = () => {
  return (
    <div className="frame">
      <Header /> 
      <LeftSidebar /> 
      <MainContent /> 
      <RightSidebar /> 
      <Footer />
    </div>
  );
};

export default Frame;
