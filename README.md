# Node.js Background Worker (Cloud Native)

A specialized background service (Worker) built with **Node.js**, designed for asynchronous task processing and deployed to **Google Cloud Platform (GCP)**.

## 🚀 Overview

This repository demonstrates a secure and automated deployment flow for background microservices. Unlike traditional web apps, this **Worker** is optimized for serverless execution on **Cloud Run**, focusing on resource efficiency and robust logging.

## 🛠 Tech Stack

- **Runtime:** Node.js (Latest LTS)
- **Containerization:** Docker
- **Cloud Provider:** Google Cloud Platform (Cloud Run, Artifact Registry)
- **CI/CD:** GitHub Actions
- **Security Tools:** Gitleaks, Hadolint, Trivy

---

## 🏗 CI/CD & DevSecOps Pipeline

The automation workflow (`ci.yml`) ensures that the worker is audited for security before it starts processing data:

### 🛡️ Security & Quality Gates
* **Secret Auditing (Gitleaks):** Prevents accidental leakage of sensitive environment variables or cloud credentials.
* **Container Linting (Hadolint):** Checks the `Dockerfile` for best practices, ensuring the image is lightweight and secure.
* **Vulnerability Scanning (Trivy):** Scans the Node.js runtime and dependencies for known vulnerabilities (CVEs) before deployment.

### 📦 Deployment Flow
* **Workload Identity Federation:** Implements secure, keyless authentication to GCP.
* **Automated Packaging:** Builds the Docker image and pushes it to **Google Artifact Registry** tagged with the Git SHA.
* **Serverless Execution:** Deploys as a **Cloud Run** service, configured for background processing with managed scaling.

### 🔥 Verification
* **Post-Deployment Check:** The pipeline verifies that the service has successfully started in the GCP environment and is ready to process tasks.

---

## 🚦 Local Setup

### Installation
```bash
npm install

Running Locally
Bash

npm start

Docker
Bash

docker build -t node-worker .
docker run node-worker
