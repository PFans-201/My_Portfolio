import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, LayoutDashboard, Target, LineChart as LineChartIcon, User, MessageCircle, X,
  Brain, DollarSign, TrendingUp, PieChart, Wallet, CheckCircle, Moon, Sun, Menu, Settings
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

// Custom Hooks
const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

const usePortfolioData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData([
        { name: 'Jan', value: 40000 },
        { name: 'Feb', value: 42000 },
        { name: 'Mar', value: 41000 },
        { name: 'Apr', value: 44000 },
        { name: 'May', value: 45000 },
        { name: 'Jun', value: 48000 }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return { data, loading };
};

// Components
const Card_port = ({ icon: Icon, title, value, subtitle, percentage, color }) => {
  const COLORS = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    red: 'bg-red-100 text-red-600'
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-lg ${COLORS[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
        <span className={`text-sm ${percentage ? 'text-green-500' : 'text-gray-500'}`}>
          {percentage && <><TrendingUp className="inline mr-1" />+{percentage}%</>}
        </span>
      </div>
      <h3 className="mt-4 text-gray-500 dark:text-gray-300 text-sm font-medium">{title}</h3>
      <p className="mt-1 text-2xl font-bold dark:text-white">{value}</p>
      {subtitle && <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">{subtitle}</p>}
    </div>
  );
};

const AssetAllocationChart = () => {
  const data = [
    { name: 'Stocks', value: 60 },
    { name: 'Bonds', value: 25 },
    { name: 'Cash', value: 10 },
    { name: 'Crypto', value: 5 }
  ];

  const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

// Pages
const Dashboard = () => {
  const { data: portfolioData, loading } = usePortfolioData();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card_port icon={DollarSign} title="Total Portfolio" value="$48,000" percentage="8.5" color="blue" />
        <Card_port icon={TrendingUp} title="YTD Return" value="+16.4%" color="green" />
        <Card_port icon={PieChart} title="Asset Classes" value="4" color="blue" />
        <Card_port icon={Wallet} title="Cash Balance" value="$4,800" color="blue" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Portfolio Growth</h3>
          <div className="h-64">
            {loading ? (
              <div className="animate-pulse h-full w-full bg-gray-100 dark:bg-gray-700 rounded" />
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={portfolioData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                    dot={{ fill: '#2563eb', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Asset Allocation</h3>
          <AssetAllocationChart />
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, toggleDarkMode, darkMode }) => {
  const location = useLocation();
  const links = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Planning', path: '/planning', icon: Target },
    { name: 'Analytics', path: '/analytics', icon: LineChartIcon },
    { name: 'Profile', path: '/profile', icon: User }
  ];

  return (
    <div className={`fixed lg:relative lg:block w-64 h-full bg-white dark:bg-gray-900 p-4 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold dark:text-white">WealthOS</h1>
        <button onClick={() => toggleDarkMode()} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          {darkMode ? <Moon className="text-yellow-400" /> : <Sun className="text-gray-600" />}
        </button>
      </div>

      <nav className="space-y-1">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center p-3 rounded-lg transition-colors ${
              location.pathname === link.path 
                ? 'bg-blue-100 text-blue-600 dark:bg-gray-800 dark:text-white'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            <link.icon className="h-5 w-5 mr-3" />
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

const AIChatAssistant = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([{
    id: 1,
    type: 'assistant',
    content: 'Hello! How can I help you with your investments today?',
    timestamp: new Date()
  }]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'assistant',
        content: `I'm analyzing your portfolio... Here's some insights about ${input.trim()}`,
        timestamp: new Date()
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className={`fixed bottom-20 right-4 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center bg-blue-600 rounded-t-xl">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <Brain className="text-blue-600" />
          </div>
          <span className="ml-2 text-white font-semibold">AI Assistant</span>
        </div>
        <button onClick={onClose} className="text-white"><X className="w-6 h-6" /></button>
      </div>

      <div className="p-4 space-y-4 h-72 overflow-y-auto">
        {messages.map((msg) => (
          <div 
            key={msg.id}
            className={`p-3 rounded-lg ${
              msg.type === 'assistant' 
                ? 'bg-gray-100 dark:bg-gray-700' 
                : 'bg-blue-100 dark:bg-blue-900'
            }`}
          >
            <p className="text-sm dark:text-gray-200">{msg.content}</p>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
              {format(msg.timestamp, 'HH:mm')}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t dark:border-gray-700">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-4 py-2 border dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Ask something..."
          />
          <button 
            onClick={handleSend}
            className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

import PropTypes from 'prop-types';

const Card = ({ title, description, children, image, hoverEffect, shadow, className }) => {
  return (
    <div 
      className={`card ${className || ''}`}
      style={{
        background: '#fff',
        borderRadius: '8px',
        padding: '1.5rem',
        transition: hoverEffect ? 'transform 0.2s, box-shadow 0.2s' : 'none',
        boxShadow: shadow ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        margin: '1rem 0',
      }}
    >
      {image && (
        <div className="card-image" style={{ marginBottom: '1rem' }}>
          <img 
            src={image} 
            alt={title} 
            style={{ 
              width: '100%', 
              height: '200px', 
              objectFit: 'cover',
              borderRadius: '4px',
            }} 
          />
        </div>
      )}
      <div className="card-content">
        {title && <h3 style={{ margin: '0 0 0.5rem 0' }}>{title}</h3>}
        {description && <p style={{ color: '#666', margin: '0 0 1rem 0' }}>{description}</p>}
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.string,
  hoverEffect: PropTypes.bool,
  shadow: PropTypes.bool,
  className: PropTypes.string,
};

import { Plus } from 'lucide-react';

const Button = ({ 
    children, 
    onClick, 
    variant = 'primary', 
    size = 'medium', 
    disabled, 
    type = 'button', 
    icon, 
    className 
  }) => {
    const variants = {
      primary: {
        background: '#007bff',
        color: 'white',
        hover: '#0056b3'
      },
      secondary: {
        background: '#6c757d',
        color: 'white',
        hover: '#5a6268'
      },
      outline: {
        background: 'transparent',
        color: '#007bff',
        border: '2px solid #007bff',
        hover: 'rgba(0,123,255,0.1)'
      }
    };
  
    const sizes = {
      small: '0.5rem 1rem',
      medium: '0.75rem 1.5rem',
      large: '1rem 2rem'
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`btn ${className || ''}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: sizes[size],
          border: 'none',
          borderRadius: '4px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.7 : 1,
          transition: 'background-color 0.2s, opacity 0.2s',
          ...variants[variant],
          ...(disabled ? { 
            background: '#e9ecef', 
            color: '#6c757d',
            hover: '#e9ecef' 
          } : {})
        }}
        onMouseOver={(e) => {
          if (!disabled) {
            e.target.style.backgroundColor = variants[variant]?.hover;
          }
        }}
        onMouseOut={(e) => {
          if (!disabled) {
            e.target.style.backgroundColor = variants[variant]?.background;
          }
        }}
      >
        {icon && <span style={{ display: 'inherit' }}>{icon}</span>}
        {children}
      </button>
    );
  };
  
  Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    icon: PropTypes.element,
    className: PropTypes.string,
  };

// Add to your existing file where other components are defined
const Planning = () => {
    const goals = [
      {
        title: "Retirement Savings",
        target: "$500,000",
        progress: 65,
        deadline: "2035",
        icon: <Target className="w-5 h-5" />
      },
      {
        title: "Education Fund",
        target: "$100,000",
        progress: 28,
        deadline: "2028",
        icon: <CheckCircle className="w-5 h-5" />
      },
      {
        title: "Real Estate Investment",
        target: "$250,000",
        progress: 45,
        deadline: "2030",
        icon: <Home className="w-5 h-5" />
      }
    ];
  
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold dark:text-white">Financial Planning</h2>
          <Button 
            variant="primary" 
            icon={<Plus className="w-4 h-4" />}
            onClick={() => console.log("Add new goal")}
          >
            New Goal
          </Button>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((goal, index) => (
            <Card
              key={index}
              title={goal.title}
              className="hover:transform hover:scale-105 transition-all"
              hoverEffect
              shadow
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Target:</span>
                  <span className="font-semibold dark:text-white">{goal.target}</span>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-600">
                      Progress ({goal.progress}%)
                    </span>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                    <div
                      style={{ width: `${goal.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    />
                  </div>
                </div>
  
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    {goal.icon}
                    <span className="text-gray-500 dark:text-gray-400">Deadline:</span>
                  </div>
                  <span className="font-medium dark:text-white">{goal.deadline}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
  
        <Card 
          title="Investment Strategy" 
          shadow 
          className="mt-6 dark:bg-gray-800"
        >
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Current strategy focuses on long-term growth through diversified assets:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>60% Equity Investments</li>
              <li>25% Fixed Income</li>
              <li>10% Alternative Assets</li>
              <li>5% Cash Reserves</li>
            </ul>
            
            <div className="flex gap-4 mt-6">
              <Button variant="outline" onClick={() => console.log("Edit strategy")}>
                Edit Strategy
              </Button>
              <Button variant="secondary" onClick={() => console.log("Analyze risk")}>
                Risk Analysis
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  };
  
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

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 p-2 lg:hidden z-50 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
        >
          <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="flex">
          <Sidebar 
            isOpen={isMobileMenuOpen} 
            toggleDarkMode={() => toggleDarkMode(!darkMode)}
            darkMode={darkMode}
          />

          <main className="flex-1 p-6 lg:p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/planning" element={<Planning />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>

          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="fixed bottom-6 right-6 p-4 bg-blue-600 rounded-full text-white shadow-lg hover:bg-blue-700 transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>

        <AIChatAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </Router>
  );
};

// Additional Page Components (Planning, Analytics, Profile) would follow similar patterns...

export default App;