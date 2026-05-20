const express = require('express');

const app = express();
const PORT = 3088;

app.get('/', (req, res) => {

    const html = `
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
                width: 80%;
                max-width: 700px;
                box-shadow: 0 0 25px rgba(0,255,170,0.3);
            }

            h1 {
                color: #00ffae;
                font-size: 3rem;
            }

            p {
                color: #d1d5db;
                font-size: 1.2rem;
                line-height: 1.8;
            }

            .pipeline {
                margin-top: 25px;
                color: #38bdf8;
                font-size: 1.1rem;
            }

            .success {
                margin-top: 25px;
                color: #22c55e;
                font-size: 1.4rem;
                font-weight: bold;
            }

            .footer {
                margin-top: 30px;
                color: #94a3b8;
                font-size: 0.9rem;
            }
        </style>
    </head>

    <body>

        <div class="container">

            <h1>🚀 Full CI/CD Pipeline Working Successfully!</h1>

            <p>
                This application was automatically built,
                containerized, pushed to Docker Hub,
                and deployed to AWS ECS Fargate
                using Jenkins CI/CD Pipeline.
            </p>

            <div class="pipeline">
                GitHub → Jenkins → Docker → Docker Hub → AWS ECS → ALB
            </div>

            <div class="success">
                ✅ Automated Deployment Successful
            </div>

            <div class="footer">
                Built by Nikhil Chamyal 🚀
            </div>

        </div>

    </body>
    </html>
    `;

    res.send(html);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server running on port ' + PORT);
});