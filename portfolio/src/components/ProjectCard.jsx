import React from 'react';
import Button from './Button';
import Card from './Card';

const ProjectCard = ({ title, description, image, URL}) => {
    const currentDomainURL = "pfanica.com"
    
    return (
        <Card 
            image = {image}
            title = {title}
            description = {description}
        >
            <Card.Image
                src={image}
                alt={"Image for: " + title}
            />
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <a href={URL} target="_blank" rel="noopener noreferrer">
                <Button 
                    className="mt-4 w-full"
                    variant="primary"
                    size="medium"
                >
                     VIEW PROJECT
                </Button>
            </a>
        </Card>
    );
    /*URL can be a subdomain (app.example.com), a path inside the current domain (example.com/app), or even an external url (https://? www.app.com)*/
};

export default ProjectCard;