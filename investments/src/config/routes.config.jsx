import React from 'react';
import Home from '@/pages/Home';
import Portfolio from '@/pages/Portfolio';
import Alerts from '@/pages/Alerts';
import Analysis from '@/pages/Analysis';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import CookiePolicy from '@/pages/CookiePolicy';
import NotFound from '@/pages/NotFound';
// import InvestmentPlanner from '@/investment-planner/InvestmentPlanner';

export const routeConfig = {
  routes: [
    {
      name: 'HOME',
      path: '/',
      element: <Home />,
      showInNav: true,
      showInFooter: false,
      aliases: ['/home']
    },
    {
      name: 'PORTFOLIO',
      path: '/portfolio',
      element: <Portfolio />,
      showInNav: true,
      showInFooter: false,
      subItems: [
        {
          name: 'Alerts',
          path: '/portfolio/alerts',
          element: <Alerts />,
          showInNav: false,
          showInFooter: false
        },
        {
          name: 'Dashboard',
          path: '/portfolio/dashboard',
          element: <Dashboard />,
          showInNav: false,
          showInFooter: false
        },
        {
          name: 'Analysis',
          path: '/portfolio/analysis',
          element: <Analysis />,
          showInNav: false,
          showInFooter: false
        }
      ]
    },
    {
      name: 'PROFILE',
      path: '/profile',
      element: <Profile />,
      showInNav: true,
      showInFooter: false
    },
    {
      name: 'Privacy Policy',
      path: '/privacy_policy',
      element: <PrivacyPolicy />,
      showInNav: false,
      showInFooter: true
    },
    {
      name: 'Terms of Service',
      path: '/terms_of_service',
      element: <TermsOfService />,
      showInNav: false,
      showInFooter: true
    },
    {
      name: 'Cookie Policy',
      path: '/cookie_policy',
      element: <CookiePolicy />,
      showInNav: false,
      showInFooter: true
    },
    {
      name: 'Not Found',
      path: '*',
      element: <NotFound />,
      showInNav: false,
      showInFooter: false
    }
  ],

  // Helper functions
  getNavItems: () => routeConfig.routes.filter(route => route.showInNav),
  getFooterItems: () => routeConfig.routes.filter(route => route.showInFooter),
  getMainNav: () => routeConfig.getNavItems(),
  getFooterNav: () => routeConfig.getFooterItems()
};

export default routeConfig;