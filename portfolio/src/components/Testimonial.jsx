import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const defaultAvatar = 'https://www.gravatar.com/avatar/?d=mp'; // Default avatar

const Testimonial = ({ author, role, content, avatar = defaultAvatar }) => (
  <Card hoverEffect shadow className="h-full">
    <Card.Body className="flex flex-col justify-between">
      <div className="flex items-center space-x-3">
        <img 
          src={avatar} 
          alt={author} 
          className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600" 
        />
        <div>
          <Card.Title>{author}</Card.Title>
          <Card.Subtitle>{role}</Card.Subtitle>
        </div>
      </div>
      <Card.Text className="text-lg italic mb-4">"{content}"</Card.Text>
    </Card.Body>
  </Card>
);

Testimonial.propTypes = {
  author: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default Testimonial;
