# Start with Alpine as the base image
FROM alpine:latest

# Set the working directory
WORKDIR /app

# Install necessary tools and Node.js with npm using Alpine's package manager
RUN apk add --no-cache curl nodejs npm xdg-utils

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Expose the default application port
EXPOSE 80

# Start the application using npm
CMD ["npm", "start"]
