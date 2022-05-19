import React from 'react';
import Loading from '../../assets/loading.gif'

function LoadingState() {
    return (
      <div className="empty-state">
        <img src={Loading} alt="loading" />
        <p>Searching...</p>
      </div>
    );
  }
  
export default LoadingState;