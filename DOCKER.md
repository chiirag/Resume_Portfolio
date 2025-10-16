# Docker Deployment Guide

This guide explains how to build and run the Gen AI Portfolio application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, but recommended)

## Building the Docker Image

### Option 1: Using Docker Compose (Recommended)

```bash
docker-compose up -d
```

This will build the image and start the container in detached mode.

### Option 2: Using Docker Commands

Build the image:
```bash
docker build -t genai-portfolio .
```

Run the container:
```bash
docker run -p 3000:3000 genai-portfolio
```

## Access the Application

Once the container is running, access the application at:
```
http://localhost:3000
```

## Docker Commands Reference

### View running containers
```bash
docker ps
```

### View logs
```bash
docker logs genai-portfolio
```

### Stop the container
```bash
docker-compose down
# OR
docker stop genai-portfolio
```

### Rebuild the image (after code changes)
```bash
docker-compose up -d --build
# OR
docker build -t genai-portfolio . && docker run -p 3000:3000 genai-portfolio
```

### Remove container and image
```bash
docker-compose down --rmi all
# OR
docker stop genai-portfolio
docker rm genai-portfolio
docker rmi genai-portfolio
```

## Docker Image Details

- **Base Image**: Node.js 18 Alpine (lightweight)
- **Multi-stage Build**: Optimized for smaller image size
- **Non-root User**: Runs as unprivileged user for security
- **Port**: 3000 (configurable)
- **Output Mode**: Standalone for optimal Docker deployment

## Environment Variables

You can customize the deployment by setting environment variables in `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - PORT=3000
  - HOSTNAME=0.0.0.0
```

## Production Deployment

For production deployment to cloud platforms:

### Docker Hub
```bash
docker tag genai-portfolio your-username/genai-portfolio:latest
docker push your-username/genai-portfolio:latest
```

### AWS ECR, Google Container Registry, etc.
Follow the respective platform's documentation for pushing and deploying container images.

## Troubleshooting

**Issue: Build fails with dependency errors**
- Run `docker-compose down --rmi all` to clean up
- Rebuild with `docker-compose up -d --build`

**Issue: Port already in use**
- Change the port mapping in `docker-compose.yml` from `"3000:3000"` to `"3001:3000"` (or any available port)

**Issue: Changes not reflected**
- Rebuild the image after making code changes
- Use `docker-compose up -d --build` to force rebuild
