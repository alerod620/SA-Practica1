pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                nodejs('node'){
                    sh 'npm install'
                    //sh 'node index.js'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                nodejs('node'){
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
