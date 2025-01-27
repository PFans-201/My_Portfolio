import React, { useEffect, useState } from 'react';
import AlertCard from '@/components/AlertCard';
//import api from '../services/api';

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  //useEffect(() => {
  //  api.get('/alerts/').then((response) => setAlerts(response.data));
  //}, []);
  const alert = {id : 1, message : "Alert is working", timestamp : "2021-09-01T12:00:00Z"};
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Alerts</h1>
      <div className="space-y-4">
        {/*alerts.map((alert) => (
          <AlertCard key={alert.id} alert={alert} />
        ))*/}
        <AlertCard key={alert.id} alert={alert} />
      </div>
    </div>
  );
};

export default Alerts;