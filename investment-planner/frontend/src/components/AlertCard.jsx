import React from 'react';

const AlertCard = ({ alert }) => (
  <div className="p-4 border rounded shadow">
    <p>{alert.message}</p>
    <span className="text-gray-500 text-sm">{new Date(alert.timestamp).toLocaleString()}</span>
  </div>
);

export default AlertCard;