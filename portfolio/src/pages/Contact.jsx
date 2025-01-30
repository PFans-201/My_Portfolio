import React, { useState } from 'react';
import TextField from '@/components/TextField2';
import Button from '@/components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isRequired
            />
            
            <TextField
              label="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              isRequired
            />
            
            <TextField
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              isRequired
            />
            
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Contact Info</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-opacity-10 bg-gray-500">
              <p className="font-medium">Email:</p>
              <p>admin@pedrofanica.com</p>
            </div>
            
            <div className="p-4 rounded-lg bg-opacity-10 bg-gray-500">
              <p className="font-medium">Location:</p>
              <p>Lisbon, Portugal</p>
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Button
                  as="a"
                  href="https://linkedin.com/in/yourprofile"
                  variant="outline"
                  className="flex-1"
                >
                  LinkedIn
                </Button>
                <Button
                  as="a"
                  href="https://github.com/yourusername"
                  variant="outline"
                  className="flex-1"
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
