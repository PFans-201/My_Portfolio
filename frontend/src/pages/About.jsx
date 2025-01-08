import React from 'react';


const About = () => (
    <div>
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/api/placeholder/400/400" alt="Profile" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-lg mb-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div>
              <h3 className="font-semibold mb-2">Skills</h3>
              <ul className="space-y-2">
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>Machine Learning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Education</h3>
              <ul className="space-y-2">
                <li>MS in Computer Science</li>
                <li>BS in Software Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default About;