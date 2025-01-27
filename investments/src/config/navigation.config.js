import { routeConfig } from './routes.config';

export const navigationConfig = {
  mainNav: routeConfig.getMainNav(),
  footerNav: routeConfig.getFooterNav()
};

export default navigationConfig;