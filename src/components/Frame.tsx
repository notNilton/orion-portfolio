// src/components/Frame.tsx
import React from 'react';
import MainContent from './MainContent';
import '../styles/Frame.scss';

const Frame: React.FC = () => {
  return (
    <div className="frame">
      <MainContent />
    </div>
  );
};

export default Frame;
