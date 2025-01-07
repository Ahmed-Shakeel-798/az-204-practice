# Use Node.js base image
FROM node:22

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose the app port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]