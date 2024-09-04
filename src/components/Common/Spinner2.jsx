import React from 'react';
import SyncLoader from "react-spinners/SyncLoader";

const Spinner2 = ({ isLoading }) => {
  if (!isLoading) return null;
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <SyncLoader
        color="#fff"
        size={15}
      />
    </div>
  );
};

export default Spinner2;
