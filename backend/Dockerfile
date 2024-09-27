FROM node:slim

WORKDIR /app

# Install project's dependencies
COPY package*.json ./

# Install all dependencies, including devDependencies
RUN npm install --legacy-peer-deps

# Copy the project source code into the current working dir (app)
COPY . .

# Expose the backend port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev"]