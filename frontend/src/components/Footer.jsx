import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { navigationConfig } from '@/config/navigation.config';

const Footer = () => {
  return (
    <footer className="mt-auto border-t transition-colors duration-300 w-full py-6">
      <div className="container mx-auto px-4">
        {/* Top section with Contact and Connect */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          {/* Contact Section */}
          <div className="mb-4 md:mb-0">
            <Link 
              to="/contact" 
              className="font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
            >
              GET IN TOUCH!
            </Link>
            <p className="text-gray-600 max-w-md">
              Feel free to reach out through any of the social links or use the contact form.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">SOCIAL LINKS</h3>
            <div className = 'flex space-x-6'>
              <a 
                href="https://www.linkedin.com/in/pedro-fanica" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large"/>
              </a>
              <a 
                href="https://github.com/PFans-201/My_Portfolio" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="large"/>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section with Quick Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t">
          {/* Quick Links */}
          <div className="mb-4 md:mb-0">
            {navigationConfig.footerNav.map((item, index) => (
              <React.Fragment key={item.path}>
                <Link
                  to={item.path}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
                {index < navigationConfig.footerNav.length - 1 && (
                  <span className="mx-2 text-gray-400">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-600">
            Copyright © {new Date().getFullYear()} Pedro Fanica - All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
