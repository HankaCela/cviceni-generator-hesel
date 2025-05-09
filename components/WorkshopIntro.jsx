import React from 'react';

const WorkshopIntro = ({ title, description }) => {
  return (
    <div className="workshop-intro">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default WorkshopIntro;