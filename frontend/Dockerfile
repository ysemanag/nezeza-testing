# Use a simple web server (nginx)
FROM nginx:alpine

# Copy frontend content to nginx default root folder as expected by ngnix docker image
COPY . /usr/share/nginx/html

# Expose frontend port
EXPOSE 80

# FROM node:18

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# EXPOSE 80
# CMD ["npm", "start"]  
# # React development server command

