import React from 'react';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
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
      name: 'ABOUT',
      path: '/about',
      element: <About />,
      showInNav: true,
      showInFooter: false
    },
    {
      name: 'PROJECTS',
      path: '/projects',
      element: <Projects />,
      showInNav: true,
      showInFooter: false,
      subItems: [
        {
          name: 'Investment Planner APP',
          path: '/investment-planner',
          // element: <InvestmentPlanner />,
          showInNav: false,
          showInFooter: false
        }
      ]
    },
    {
      name: 'CONTACT',
      path: '/contact',
      element: <Contact />,
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