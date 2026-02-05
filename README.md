# Build & Deploy Node.js App with CI/CD Pipeline  
## Docker + GitHub Actions + AWS EC2

This repository demonstrates a **real-world CI/CD pipeline** for deploying a **Node.js application** using **Docker**, **GitHub Actions**, and **AWS EC2**.

The objective of this project is to show how modern DevOps teams **build, containerize, and automatically deploy applications** using industry-standard tools in a production-style workflow.

---

## 📺 Video Walkthrough

This project is explained step-by-step in a full practical video:

🔗 https://youtu.be/WwxSNIrW8bk

Watching the video is highly recommended to understand the complete flow and decision-making behind the setup.

---

## 🚀 What This Project Covers

- Building a Node.js application
- Containerizing the app using Docker
- Creating a CI/CD pipeline with GitHub Actions
- Automatically deploying the application to AWS EC2
- Managing deployments in a production-style environment

This setup closely reflects how CI/CD pipelines are implemented in real DevOps teams.

---

## 🧱 Tech Stack

- **Node.js** – Backend application
- **Docker** – Application containerization
- **GitHub Actions** – Continuous Integration & Deployment
- **AWS EC2** – Cloud compute for hosting the app
- **Linux (Ubuntu)** – Server operating system

---

## 🏗️ Architecture Overview

```text
Developer Pushes Code
        ↓
GitHub Repository
        ↓
GitHub Actions CI/CD Pipeline
  - Build Docker Image
  - Push Image
  - Deploy to EC2
        ↓
Docker Container Running on EC2
        ↓
Application Accessible to Users


Youtube Video link: https://youtu.be/WwxSNIrW8bk
