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
                bat "npm install"
            }
        }
        stage("Build dockefile"){
            steps{
                bat "docker build -t my-backend ."
            }
        }
        stage("Run dockerfile container"){
            steps{
                bat "docker run -d  -p 3008:3008 my-backend"
            }
        }

    }
}