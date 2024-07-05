import React, { useState } from 'react';
import TableauVisualization from './TableauVisualization';

const TableauDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button className='upload-section__buton-Redirect' onClick={toggleVisibility}>
        {isVisible ? 'Ocultar Dashboard' : 'Ver Dashboard'}
      </button>
      {isVisible && <TableauVisualization />}
    </div>
  );
};

export default TableauDashboard;