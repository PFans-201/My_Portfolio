import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppRoutes from '@/config/routes';

const App = () => {
  return (
    <Router>
      {/* <ThemeProvider> */}
        <Header/>
        <main className="container mx-auto px-4 pt-24 pb-16">
          <AppRoutes />
        </main>
        <Footer />
      {/* </ThemeProvider> */}
    </Router>
  );
};

export default App;
