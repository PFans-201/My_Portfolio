import React from 'react';
import { Button, TextField } from '@mui/material';

const Contact = () => (
  <div>
    <h1 className="text-4xl font-bold mb-8">Contact</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <TextField 
              placeholder="Your Name" 
              variant="outlined" 
              fullWidth
              className="dark:bg-gray-800"
            />
          </div>
          <div>
            <TextField 
              type="email" 
              placeholder="Your Email" 
              variant="outlined" 
              fullWidth
              className="dark:bg-gray-800"
            />
          </div>
          <div>
            <TextField 
              placeholder="Your Message" 
              variant="outlined" 
              multiline
              rows={4}
              fullWidth
              className="dark:bg-gray-800"
            />
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
            Send Message
          </Button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <div className="space-y-4">
          <p>
            <strong>Email:</strong><br />
            admin@pedrofanica.com
          </p>
          <p>
            <strong>Location:</strong><br />
            Lisbon, Portugal
          </p>
          <div className="pt-4">
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <div className="flex gap-4">
              <Button variant="outlined" className="dark:border-gray-700">LinkedIn</Button>
              <Button variant="outlined" className="dark:border-gray-700">GitHub</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
