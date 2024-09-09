import React from 'react';
import Header from './Header';
import Content from './Content';
import "../styles/MainContent.scss";

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <Header />
      <Content />
    </div>
  );
};

export default MainContent;
