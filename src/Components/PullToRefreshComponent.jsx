import React from 'react';
import PropTypes from 'prop-types';
import PullToRefresh from 'react-simple-pull-to-refresh';

const PullToRefreshComponent = ({ onRefresh, children }) => {
  return (
    <PullToRefresh onRefresh={onRefresh}>
      <div className="pull-to-refresh-content w-[85%] mx-auto">
        {children}
      </div>
    </PullToRefresh>
  );
};

PullToRefreshComponent.propTypes = {
  onRefresh: PropTypes.func.isRequired,  // Ensures onRefresh is a function
  children: PropTypes.node.isRequired,   // Ensures children are valid React nodes
};

export default PullToRefreshComponent;
