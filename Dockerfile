# Use official Node.js image
FROM node:22

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package files first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
