# Use official Node LTS on a small base
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy dependency manifests first (better layer caching)
COPY package*.json ./

# Install production dependencies only
RUN npm install --omit=dev

# Copy the rest of the app source
COPY . .

# Expose the port the app listens on
EXPOSE 3000

# Start command
CMD ["node", "src/server.js"]