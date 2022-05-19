import React from 'react';
import EmptyStateImage from '../../assets/empty_state.svg'
import './EmptyState.scss'

function EmptyState() {
    return (
      <div className="empty-state">
        <img src={EmptyStateImage} alt="man with umbrella" />
        <p>Nothing here. Search again...</p>
      </div>
    );
  }
  
export default EmptyState;