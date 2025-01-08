FROM node:22.12.0
WORKDIR /app
COPY package*.json ./
RUN npm install
# Install xdg-utils using apt for Debian-based images
RUN apt-get update && apt-get install -y xdg-utils && apt-get clean
COPY . .
EXPOSE 3000
CMD ["npm", "start"]