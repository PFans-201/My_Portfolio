import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card } from '@mui/material';
import { Alert, AlertDescription } from '@mui/material';

const PortfolioComponent = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const response = await fetch('/api/portfolio/performance/');
      const data = await response.json();
      setPortfolioData(data);
    } catch (err) {
      setError('Failed to load portfolio data');
    }
  };

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!portfolioData) {
    return <div className="text-center p-4">Loading portfolio data...</div>;
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Portfolio Overview</h2>
        <div className="text-xl mb-4">
          Total Value: ${portfolioData.total_value.toLocaleString()}
        </div>
        
        <div className="h-96">
          <LineChart width={800} height={300} data={portfolioData.holdings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            {portfolioData.holdings.map((holding, index) => (
              <Line
                key={holding.symbol}
                type="monotone"
                dataKey="value"
                name={holding.symbol}
                stroke={`hsl(${index * 30}, 70%, 50%)`}
              />
            ))}
          </LineChart>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioData.holdings.map((holding) => (
          <Card key={holding.symbol} className="p-4">
            <h3 className="text-lg font-bold">{holding.symbol}</h3>
            <p className="text-gray-600">{holding.type}</p>
            <p className="text-xl mt-2">
              ${holding.current_value.toLocaleString()}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PortfolioComponent;
