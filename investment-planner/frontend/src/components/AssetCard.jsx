import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';

const AssetCard = ({ asset }) => (
  <Card>
    <CardHeader>
      <h3>{asset.name}</h3>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <p>Current Value: ${asset.value}</p>
        <p>Return: {asset.return}%</p>
        <p>Allocation: {asset.allocation}%</p>
      </div>
    </CardContent>
  </Card>
);

export default AssetCard;