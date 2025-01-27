import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import SunIcon from '../icons/sun.png';
import MoonIcon from '../icons/moon.png';
import ZenIcon from '../icons/zen.png';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'zen' : 'light';
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'zen' : 'light'} theme`}
      //className="p-2 rounded hover:ring focus:ring ring-gray-400 transition-all"
    >
      {theme === 'light' ? (
        <img src={SunIcon} alt="Light mode icon, created by Good Ware at https://www.flaticon.com/free-icon/sun_702459?term=sun&page=1&position=17&origin=search&related_id=702459" width="24" height="24" />
      ) : theme === 'dark' ? (
        <img src={MoonIcon} alt="Dark mode icon, created by Good Ware at https://www.flaticon.com/free-icon/moon_702471?term=moon&page=1&position=3&origin=search&related_id=702471" width="24" height="24" />
      ) : (
        <img src={ZenIcon} alt="Zen mode icon, created by Freepik at https://www.flaticon.com/free-icon/zen_2291561?term=zen&page=1&position=13&origin=search&related_id=2291561" width="24" height="24" />
      )}
    </button>
  );
};

export default ThemeToggle;