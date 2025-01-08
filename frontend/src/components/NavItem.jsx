import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Menu Item */}
      <Link
        to={item.path}
        onClick={onClick}
        className="block px-4 py-2 hover:underline"
      >
        {item.name}
      </Link>

      {/* Dropdown for Sub-items */}
      {item.subItems && (
        <div
          className={`absolute left-0 bg-white shadow-lg ${
            isHovered ? 'block' : 'hidden'
          }`}
        >
          {item.subItems.map((subItem) => (
            <Link
              key={subItem.name}
              to={subItem.path}
              onClick={onClick}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
