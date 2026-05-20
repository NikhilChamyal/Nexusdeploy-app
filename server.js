const express = require('express');
const app = express();

const PORT = 3088;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>NexusDeploy CI/CD</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                background: linear-gradient(135deg, #0f172a, #1e293b);
                font-family: Arial, sans-serif;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }

            .container {
                text-align: center;
                background: rgba(255,255,255,0.05);
                padding: 50px;
                border-radius: 20px;
                box-shadow: 0 0 25px rgba(0,255,170,0.3);
                width: 80%;
                max-width: 700px;
            }

            h1 {
                font-size: 3rem;
                color: #00ffae;
                margin-bottom: 20px;
            }

            p {
                font-size: 1.2rem;
                color: #d1d5db;
                line-height: 1.8;
            }

            .pipeline {
                margin-top: 30px;
                font-size: 1.1rem;
                color: #38bdf8;
            }

            .success {
                margin-top: 25px;
                font-size: 1.4rem;
                color: #22c55e;
                font-weight: bold;
            }

            .footer {
                margin-top: 30px;
                color: #94a3b8;
                font-size: 0.9rem;
            }

            .glow {
                animation: glow 2s infinite alternate;
            }

            @keyframes glow {
                from {
                    text-shadow: 0 0 10px #00ffae;
                }
                to {
                    text-shadow: 0 0 25px #00ffae;
                }
            }
        </style>
    </head>

    <body>

        <div class="container">
            <h1 class="glow">🚀 Full CI/CD Pipeline Working Successfully!</h1>

            <p>
                This application has been automatically built, containerized,
                pushed to Docker Hub, and deployed on AWS ECS Fargate
                using a Jenkins CI/CD Pipeline.
            </p>

            <div class="pipeline">
                GitHub → Jenkins → Docker → Docker Hub → AWS ECS → ALB
            </div>

            <div class="success">
                ✅ Automated Deployment Successful
            </div>

            <div class="footer">
                Built by Nikhil Chamyal
            </div>
        </div>

    </body>
    </html>
    `);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});