FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
RUN apk add --no-cache xdg-utils


# Expose the default port for Nginx
EXPOSE 80

CMD ["npm", "start"]

