import React from 'react';
import { Card, CardContent } from '@mui/material';

const Testimonial = ({ author, role, content }) => (
    <Card className="card">
      <CardContent className="pt-6">
        <p className="italic mb-4">{content}</p>
        <h3 className="font-semibold">{author}</h3>
        <h4 className="text-sm text-gray-600 dark:text-gray-400">{role}</h4>
      </CardContent>
    </Card>
  );

export default Testimonial;