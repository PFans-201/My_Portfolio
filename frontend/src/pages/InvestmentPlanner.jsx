import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const InvestmentPlanner = () => {
  const [investment, setInvestment] = useState('');
  const [years, setYears] = useState('');
  const [rate, setRate] = useState('');
  const [result, setResult] = useState(null);

  const calculateInvestment = async () => {
    try {
      const response = await fetch('/api/calculate-investment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ investment, years, rate })
      });
      const data = await response.json();
      setResult(data.futureValue);
    } catch (error) {
      console.error('Error calculating investment:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Investment Strategy Planner</h1>
      <Card className="mb-6">
        <CardHeader>
          <h2 className="text-xl font-semibold">Calculate Future Investment Value</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="number"
              placeholder="Initial Investment"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Number of Years"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Annual Interest Rate (%)"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <Button onClick={calculateInvestment}>Calculate</Button>
          </div>
        </CardContent>
      </Card>
      {result && (
        <Card>
          <CardContent>
            <p className="text-lg">Future Value: ${result}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default InvestmentPlanner;
