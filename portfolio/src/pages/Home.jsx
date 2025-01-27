import React from 'react';
import Testimonial from '@/components/Testimonial';

const Home = () => (
    <div>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Pedro Fanica</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Full Stack Developer & Data Scientist</p>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Testimonial
            author="Alice Johnson"
            role="Tech Lead at TechCorp"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Testimonial
            author="Bob Smith"
            role="CTO at StartupX"
            content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Testimonial
            author="Carol White"
            role="Project Manager at BigTech"
            content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </div>
      </div>
    </div>
  );

export default Home;
  