import React from "react";
import ProjectCard from '@/components/ProjectCard';

  const Projects = ({ setCurrentPage }) => (
    <div>
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Investment Strategy Planner"
          description="Advanced tool for planning and analyzing investment strategies using ML"
          image="/api/placeholder/400/300"
          setCurrentPage={setCurrentPage}
        />
        <ProjectCard
          title="E-commerce Platform"
          description="Full-stack e-commerce solution with React and Node.js"
          image="/api/placeholder/400/300"
          setCurrentPage={setCurrentPage}
        />
        <ProjectCard
          title="AI Image Generator"
          description="Deep learning model for generating artistic images"
          image="/api/placeholder/400/300"
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );

export default Projects;