import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from './routes.config';

const AppRoutes = () => {
  const renderRoutes = (routes) => {
    return routes.flatMap(route => [
      // Main route
      <Route key={route.path} path={route.path} element={route.element} />,
      // Alias routes
      ...(route.aliases?.map(alias => (
        <Route key={alias} path={alias} element={route.element} />
      )) || []),
      // Subroutes
      ...(route.subItems?.map(subRoute => (
        <Route key={subRoute.path} path={subRoute.path} element={subRoute.element} />
      )) || [])
    ]);
  };

  return (
    <Routes>
      {renderRoutes(routeConfig.routes)}
    </Routes>
  );
};

export default AppRoutes;