import React from 'react';
import { ImpulseSpinner } from 'react-spinners-kit';

const Spinner = ({ isLoading }) => {
  if (!isLoading) return null;
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ImpulseSpinner size={50} frontColor="#102C97" backColor="#000A33" />
    </div>
  );
};

export default Spinner;
