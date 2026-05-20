pipeline {
    agent any

    environment {
        IMAGE_NAME = "nikhil602/nexusdeploy-app"
        CLUSTER_NAME = "heavenly-dog-327uuw"
        SERVICE_NAME = "nexusapp-service-mdlb2zex"
        AWS_DEFAULT_REGION = "ap-south-1"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:latest .'
            }
        }

        stage('Push Docker Image') {
            steps {

                withCredentials([
                    string(credentialsId: 'dockerhub-token', variable: 'DOCKER_TOKEN')
                ]) {

                    bat 'docker login -u nikhil602 -p %DOCKER_TOKEN%'
                    bat 'docker push %IMAGE_NAME%:latest'
                }
            }
        }

        stage('Deploy to ECS') {
            steps {

                withCredentials([
                    string(credentialsId: 'aws-access-key', variable: 'AWS_ACCESS_KEY_ID'),
                    string(credentialsId: 'aws-secret-key', variable: 'AWS_SECRET_ACCESS_KEY')
                ]) {

                    bat '''
                    aws configure set aws_access_key_id %AWS_ACCESS_KEY_ID%
                    aws configure set aws_secret_access_key %AWS_SECRET_ACCESS_KEY%
                    aws configure set region %AWS_DEFAULT_REGION%

                    aws ecs update-service ^
                    --region %AWS_DEFAULT_REGION% ^
                    --cluster %CLUSTER_NAME% ^
                    --service %SERVICE_NAME% ^
                    --force-new-deployment
                    '''
                }
            }
        }
    }
}