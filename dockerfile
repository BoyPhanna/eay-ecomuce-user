# Step 1: Build the Vue.js app with Vite
FROM node:14 as build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app with Vite
RUN npm run build

# Step 2: Serve the built app with Nginx
FROM nginx:alpine

# Copy the built files from the build stage to the Nginx web root
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
