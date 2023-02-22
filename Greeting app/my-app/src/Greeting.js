import React from 'react';

const Greeting = () => {
  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  let greeting;

  if (currentHour >= 6 && currentHour < 12) {
    greeting = 'Good Morning Have A Nice Day';
  } else if (currentHour >= 12 && currentHour < 19) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Night';
  }

  return (
    <h1 style={{ color: greeting === 'Good Morning' ? 'green' : greeting === 'Good Afternoon' ? 'blue' : 'purple' }}>
      Hello! {greeting}
    </h1>
  );
};

export default Greeting;
