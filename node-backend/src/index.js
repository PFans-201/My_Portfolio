import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/calculate-investment', (req, res) => {
  const { investment, years, rate } = req.body;
  const principal = parseFloat(investment);
  const time = parseFloat(years);
  const interestRate = parseFloat(rate) / 100;
  
  if (isNaN(principal) || isNaN(time) || isNaN(interestRate)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const futureValue = principal * Math.pow((1 + interestRate), time);
  res.json({ futureValue: futureValue.toFixed(2) });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Node server running on port ${PORT}`);
});
