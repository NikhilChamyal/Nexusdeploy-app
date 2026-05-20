pipeline {
    agent any

    environment {
        IMAGE_NAME = "nikhil602/nexusdeploy-app"
        CLUSTER_NAME = "heavenly-dog-327uuw"
        SERVICE_NAME = "nexusapp-service-mdlb2zex"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:latest .'
            }
        }

        stage('Push Docker Image') {
            steps {

                withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DOCKER_TOKEN')]) {

                    bat 'docker login -u nikhil602 -p %DOCKER_TOKEN%'
                    bat 'docker push %IMAGE_NAME%:latest'
                }
            }
        }

        stage('Deploy to ECS') {
            steps {
                bat '''
                aws ecs update-service ^
                --cluster %CLUSTER_NAME% ^
                --service %SERVICE_NAME% ^
                --force-new-deployment
                '''
            }
        }
    }
}