import React from 'react';
import { Button } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';

const ProjectCard = ({ title, description, image, setCurrentPage }) => (
    <Card 
      className="card overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-800"
      style={{ borderColor: 'var(--nav-border)' , backgroundColor: 'var(--nav-bg)', textColor: "--text-color" }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <Button 
          onClick={() => setCurrentPage('investment-planner')}
          className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          View Project
        </Button>
      </CardContent>
    </Card>
  );

export default ProjectCard;