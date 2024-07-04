import React from 'react';

const TableauDashboard = ({ url }) => {
  return (
    <div>
      <button className='upload-section__buton-Redirect'><a href={url} target="_blank" rel="noopener noreferrer">Ver Dashboard</a></button>
    </div>
  );
};

export default TableauDashboard;