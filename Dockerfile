# Multi-stage Dockerfile for Inventory Management Tool

# Stage 1: Build Frontend
FROM node:18-alpine AS frontend-builder

# Set working directory for frontend
WORKDIR /app/frontend

# Copy frontend package files
COPY Frontend/package*.json ./

# Install frontend dependencies
RUN npm i

# Copy frontend source code
COPY Frontend/ ./

# Build the frontend
RUN npm run build

# Stage 2: Setup Backend
FROM node:18-alpine AS backend-setup

# Set working directory for backend
WORKDIR /app/backend

# Copy backend package files
COPY Backend/package*.json ./

# Install backend dependencies
RUN npm i

# Copy backend source code
COPY Backend/ ./

# Copy built frontend files to backend/public
COPY --from=frontend-builder /app/frontend/dist ./public

# Stage 3: Final production image
FROM node:18-alpine AS production

# Create app directory
WORKDIR /app

# Copy backend with frontend files from previous stage
COPY --from=backend-setup /app/backend ./

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeuser -u 1001

# Change ownership of the app directory
RUN chown -R nodeuser:nodejs /app
USER nodeuser

# Expose the port that the app runs on
EXPOSE 4000

# Health check
# HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
#   CMD node -e "require('http').get('http://localhost:4000/api/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })" || exit 1

# Start the backend server
CMD ["node", "server.js"]