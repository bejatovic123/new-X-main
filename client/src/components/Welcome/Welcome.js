import React from 'react';
import logo from './logo.svg';

const Welcome = () => {
  return (
    <>
      <div className='welcome fade-out'></div>
      <img className='logo' src={logo} alt='logo' />
    </>
  );
};

export default Welcome;
