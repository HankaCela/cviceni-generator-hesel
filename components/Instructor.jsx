import React from 'react';

const Instructor = ({ name, bio }) => {
  return (
    <div className="instructor">
      <h2>Instructor</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
};

export default Instructor;