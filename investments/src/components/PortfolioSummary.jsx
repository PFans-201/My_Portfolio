import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';

const PortfolioSummary = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Card>
      <CardHeader>
        <h3>Total Value</h3>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">${data.totalValue}</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <h3>Total Return</h3>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{data.totalReturn}%</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <h3>Risk Score</h3>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{data.riskScore}/10</p>
      </CardContent>
    </Card>
  </div>
);

export default PortfolioSummary;
