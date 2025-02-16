# AI-Powered CI/CD Demo with Dynatrace Observability

This repository demonstrates an advanced CI/CD pipeline that leverages AI tools and Dynatrace observability. The project implements a three-phase approach to modern software delivery.

## Project Overview

This demo uses a simple Node.js application to showcase:
- Automated CI/CD pipeline with GitHub Actions
- Kubernetes deployment with Argo CD
- Observability with Dynatrace
- AI-powered testing and deployment decisions

## Phase 1: Baseline Pipeline Setup

### Sample Application
The repository includes a basic Node.js application that serves a "Hello AI/CI/CD!" message. Key files:
- `app.js` - Express.js application
- `test/app.test.js` - Basic tests
- `Dockerfile` - Container image definition
- `kubernetes/` - Kubernetes manifests

### Setting up CI with GitHub Actions

1. Create a GitHub Actions workflow in `.github/workflows/ci.yml`
2. Configure secrets in GitHub repository:
   - `DOCKER_USERNAME`
   - `DOCKER_PASSWORD`
   - `SNYK_TOKEN`

### Setting up CD with Argo CD

1. Install Argo CD in your Kubernetes cluster:

