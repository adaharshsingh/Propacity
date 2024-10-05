// src/Components/TimeBasedStoreComponent.jsx
import React, { useState, useEffect } from 'react';
import TimeBasedStore from './TimeBasedStore';

const TimeBasedStoreComponent = () => {
  const [storedValue, setStoredValue] = useState(null);
  const timeBasedStore = new TimeBasedStore();

  useEffect(() => {
    // Example usage of the store
    timeBasedStore.set('exampleKey', 'Hello World!', 10); // Expires in 10 seconds

    const value = timeBasedStore.get('exampleKey');
    setStoredValue(value);

    // Cleanup expired keys every 5 seconds
    const interval = setInterval(() => {
      timeBasedStore.cleanup();
      const updatedValue = timeBasedStore.get('exampleKey');
      setStoredValue(updatedValue);
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Time-Based Key-Value Store Example</h1>
      <p>Stored Value: {storedValue || 'Value has expired or not set yet.'}</p>
    </div>
  );
};

export default TimeBasedStoreComponent;
