import React from 'react';
import PullToRefresh from 'react-simple-pull-to-refresh';

const PullToRefreshComponent = ({ onRefresh, children }) => {
  return (
    <PullToRefresh onRefresh={onRefresh}>
      <div className="pull-to-refresh-content">
        {children}
      </div>
    </PullToRefresh>
  );
};

export default PullToRefreshComponent;
