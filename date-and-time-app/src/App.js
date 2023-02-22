import React from 'react';

function CurrentDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  return (
    <div>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  );
}

export default CurrentDateTime;
