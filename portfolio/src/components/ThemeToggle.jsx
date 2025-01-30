import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import SunIcon from '../icons/sun.png';
import MoonIcon from '../icons/moon.png';
import ZenIcon from '../icons/zen.png';

const themeIcons = {
  light: { src: SunIcon, alt: 'Light mode icon, created by Good Ware at https://www.flaticon.com/free-icon/sun_702459?term=sun&page=1&position=17&origin=search&related_id=702459' },
  dark: { src: MoonIcon, alt: 'Dark mode icon, created by Good Ware at https://www.flaticon.com/free-icon/moon_702471?term=moon&page=1&position=3&origin=search&related_id=702471' },
  zen: { src: ZenIcon, alt: 'Zen mode icon, created by Freepik at https://www.flaticon.com/free-icon/zen_2291561?term=zen&page=1&position=13&origin=search&related_id=2291561' },
};

const nextTheme = {
  light: 'dark',
  dark: 'zen',
  zen: 'light',
};

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => setTheme(nextTheme[theme]);

  return (
    <button
      onClick={handleToggle}
      aria-label={`Switch to ${nextTheme[theme]} theme`}
      aria-pressed={theme}
      >
      <img
        src={themeIcons[theme].src}
        alt={`${themeIcons[theme].alt} icon`}
        width="24"
        height="24"
      />
    </button>
  );
};

export default ThemeToggle;