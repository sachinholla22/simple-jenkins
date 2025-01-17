pipeline{
    agent any
    stages{
        stage("Checkout from github"){
            steps{
                checkout scm
            }
        }
        stage("Build project node js backend"){
            steps{
                sh "npm install"
            }
        }
        stage("Build dockefile"){
            steps{
                sh "docker build -t my-backend ."
            }
        }
        stage("Run dockerfile container"){
            steps{
                sh "docker run -d  -p 3008:3008 my-backend"
            }
        }

    }
}