import React, { useState } from 'react';
import { 
  Home, LayoutDashboard, Target, LineChart as LineChartIcon, User, MessageCircle, X,
  Brain, DollarSign, TrendingUp, PieChart, Wallet, CheckCircle
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock Data
const mockPortfolioData = [
  { name: 'Jan', value: 40000 },
  { name: 'Feb', value: 42000 },
  { name: 'Mar', value: 41000 },
  { name: 'Apr', value: 44000 },
  { name: 'May', value: 45000 },
  { name: 'Jun', value: 48000 }
];

const mockInvestments = [
  { name: 'Stocks', value: 60, amount: 28800 },
  { name: 'Bonds', value: 25, amount: 12000 },
  { name: 'Cash', value: 10, amount: 4800 },
  { name: 'Crypto', value: 5, amount: 2400 }
];

// Components
const Card = ({ icon: Icon, title, value, subtitle, percentage, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center">
      <Icon className={`h-8 w-8 text-${color}-600`} />
      <h3 className="ml-2 text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-2xl font-bold">{value}</p>
    {percentage && <p className={`text-${color}-600 text-sm`}>+{percentage}% this month</p>}
    {!percentage && <p className="text-gray-600 text-sm">{subtitle}</p>}
  </div>
);

const AssetBar = ({ name, value, amount }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm text-gray-600">{value}% (${amount.toLocaleString()})</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${value}%` }} />
    </div>
  </div>
);

// Dashboard Page Component
const Dashboard = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card icon={DollarSign} title="Total Portfolio" value="$48,000" percentage="8.5" color="blue" />
      <Card icon={TrendingUp} title="Performance" value="+16.4%" percentage={null} color="green" />
      <Card icon={PieChart} title="Asset Mix" value="4" percentage={null} color="blue" />
      <Card icon={Wallet} title="Cash Balance" value="$4,800" percentage={null} color="blue" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Portfolio Growth</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockPortfolioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Asset Allocation</h3>
        {mockInvestments.map((item) => (
          <AssetBar key={item.name} {...item} />
        ))}
      </div>
    </div>
  </div>
);

// Planning Page Component
const Planning = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold">Investment Planning</h2>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Investment Goals</h3>
      <ul className="list-disc pl-6">
        <li>Grow portfolio by 20% annually</li>
        <li>Diversify into real estate and commodities</li>
        <li>Maintain 10% liquidity in cash</li>
      </ul>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Action Plan</h3>
      <p>We'll start by analyzing potential stocks, bonds, and ETFs that align with your goals.</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Start Planning</button>
    </div>
  </div>
);

// Analytics Page Component
const Analytics = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold">Investment Analytics</h2>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Portfolio Analytics</h3>
      <p>Analyze portfolio performance, risk, and diversification to make data-driven decisions.</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">View Analytics</button>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Risk Analysis</h3>
      <p>Risk level: Moderate. We will work towards reducing exposure to high-risk assets.</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Review Risk</button>
    </div>
  </div>
);

// Profile Page Component
const Profile = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold">Profile</h2>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Personal Info</h3>
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
      <p>Location: Portugal</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Edit Profile</button>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Investment Preferences</h3>
      <p>Risk Tolerance: Medium</p>
      <p>Investment Horizon: 5+ years</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Edit Preferences</button>
    </div>
  </div>
);

// AI Chat Assistant Component
const AIChatAssistant = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([{
    type: 'assistant',
    content: 'Hello! How can I help you with your investments today?'
  }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((msgs) => [...msgs, { type: 'user', content: userMessage }]);
    
    setTimeout(() => {
      setMessages((msgs) => [...msgs, {
        type: 'assistant',
        content: `Your portfolio is doing well in ${userMessage}. Do you need more information?`
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className={`fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl transition-transform duration-300 ${
      isOpen ? 'transform translate-y-0' : 'transform translate-y-full'
    }`}>
      <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-blue-600 rounded-t-lg">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <Brain className="text-blue-600" />
          </div>
          <span className="ml-2 text-white font-semibold">AI Assistant</span>
        </div>
        <button onClick={onClose} className="text-white"><X className="w-6 h-6" /></button>
      </div>

      <div className="p-4 space-y-4 max-h-72 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 rounded-lg ${msg.type === 'assistant' ? 'bg-gray-100' : 'bg-blue-100'}`}>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg"
            placeholder="Ask something..."
          />
          <button onClick={handleSend} className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const pages = [
    { name: 'Dashboard', path: 'dashboard', icon: LayoutDashboard },
    { name: 'Planning', path: 'planning', icon: Target },
    { name: 'Analytics', path: 'analytics', icon: LineChartIcon },
    { name: 'Profile', path: 'profile', icon: User }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white p-4">
        <nav>
          {pages.map((item) => (
            <button
              key={item.path}
              onClick={() => setCurrentPage(item.path)}
              className={`w-full text-left py-3 px-6 hover:bg-gray-100 ${currentPage === item.path ? 'bg-gray-200' : ''}`}
            >
              <item.icon className="inline-block w-5 h-5 mr-3" />
              {item.name}
            </button>
          ))}
        </nav>
        
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-10 right-4 p-3 bg-blue-600 rounded-full text-white shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      <main className="flex-1 p-8">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'planning' && <Planning />}
        {currentPage === 'analytics' && <Analytics />}
        {currentPage === 'profile' && <Profile />}
      </main>

      <AIChatAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;
