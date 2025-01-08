import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { ThemeContext } from './ThemeContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import navigationConfig from '../config/routes.config'; //has the path's for each page
import ThemeToggle from './ThemeToggle'; //has the light, dark and zen mode toggle

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = navigationConfig.getMainNav();

  return (
    <nav className={`fixed w-full ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} transition-all duration-300`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} isScrolled={isScrolled} />
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
          <div className="md:hidden ml-4">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          {navItems.map((item) => (
            <NavItem key={item.name} item={item} isScrolled={isScrolled} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;