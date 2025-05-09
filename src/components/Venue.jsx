import React from 'react';

const Venue = ({ location, address }) => {
  return (
    <div className="venue">
      <h2>Venue</h2>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default Venue;