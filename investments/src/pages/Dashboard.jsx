import React from 'react';
import PortfolioSummary from '@/components/PortfolioSummary';
import Chart from '@/components/Chart';
import { Card, CardHeader, CardContent } from '@mui/material';

const Dashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <PortfolioSummary data={{
        totalValue: 100000,
        totalReturn: 15.5,
        riskScore: 7
      }} />
      <Card>
        <CardHeader>
          <h3>Portfolio Performance</h3>
        </CardHeader>
        <CardContent>
          <Chart data={[]} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;