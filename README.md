# 🚀 NexusDeploy - Cloud Native DevOps CI/CD Pipeline

A complete Cloud Native DevOps project demonstrating automated CI/CD deployment, containerization, AWS ECS hosting, and real-time monitoring using Prometheus and Grafana.

---

# 📌 Project Overview

NexusDeploy is a Dockerized Node.js web application deployed on AWS ECS Fargate using a fully automated Jenkins CI/CD pipeline.

The project includes:

- Automated build and deployment pipeline
- Docker containerization
- AWS ECS Fargate deployment
- Application Load Balancer (ALB)
- GitHub Webhook integration
- Prometheus monitoring
- Grafana dashboards
- cAdvisor container monitoring

---

# 🏗️ Architecture

```text
GitHub
   ↓
GitHub Webhook
   ↓
Jenkins CI/CD Pipeline
   ↓
Docker Build
   ↓
Docker Hub
   ↓
AWS ECS Fargate
   ↓
Application Load Balancer
   ↓
Prometheus Monitoring
   ↓
Grafana Dashboards

⚙️ Tech Stack
DevOps Tools
Jenkins
Docker
Docker Hub
GitHub
Prometheus
Grafana
cAdvisor
Cloud Services
AWS ECS Fargate
AWS Application Load Balancer (ALB)
AWS IAM
Backend
Node.js
Express.js
✨ Features

✅ Automated CI/CD Pipeline using Jenkins
✅ Dockerized Node.js Application
✅ Automated Docker Hub Push
✅ AWS ECS Fargate Deployment
✅ Application Load Balancer Integration
✅ GitHub Webhook Automation
✅ Real-time Monitoring with Prometheus
✅ Grafana Visualization Dashboards
✅ Container Monitoring using cAdvisor

📂 Project Structure
Nexusdeploy-app/
│
├── monitoring/
│   ├── docker-compose.yml
│   └── prometheus.yml
│
├── Dockerfile
├── Jenkinsfile
├── server.js
├── package.json
├── package-lock.json
└── README.md

🚀 CI/CD Workflow
Developer pushes code to GitHub
GitHub Webhook triggers Jenkins Pipeline
Jenkins builds Docker image
Docker image pushed to Docker Hub
Jenkins triggers AWS ECS deployment
ECS updates running containers automatically
Prometheus collects metrics
Grafana visualizes monitoring dashboards

🐳 Docker Setup

Build Docker Image
docker build -t nexusdeploy-app .

Run Container
docker run -p 3088:3088 nexusdeploy-app

☁️ AWS ECS Deployment

The application is deployed on:

AWS ECS Fargate
Application Load Balancer
Public Internet-facing architecture
📊 Monitoring Setup
Prometheus

Used for:

Node.js metrics
Container metrics
System monitoring
Grafana

Used for:

Real-time dashboards
CPU monitoring
Memory monitoring
Container visualization
cAdvisor

Used for:

Docker container monitoring
Container resource usage tracking
📸 Screenshots

Add screenshots here:

Jenkins Pipeline
ECS Service
ALB Application Page
Grafana Dashboard
Prometheus Targets

🔥 Future Enhancements
Terraform Infrastructure as Code
Kubernetes Deployment
HTTPS with Route53 & ACM
SonarQube Integration
Trivy Security Scanning
CloudWatch Monitoring

👨‍💻 Author
Nikhil Chamyal

MCA Student | Cloud & DevOps Enthusiast

⭐ Conclusion

This project demonstrates a complete real-world DevOps workflow including CI/CD automation, containerization, cloud deployment, and monitoring using industry-standard tools and services.
