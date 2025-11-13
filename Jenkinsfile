pipeline {
    agent any

    stages {
        // Parar todos los servicios
        stage('Parando todos los servicios') {
            steps {
                bat '''
                    echo Parando todos los servicios...
                    docker compose -p adj-demo down || exit /b 0
                '''
            }
        }

        // Eliminar las imágenes anteriores
        stage('Borrando imágenes anteriores') {
            steps {
                bat '''
                    echo Borrando imágenes anteriores...
                    for /f "tokens=*" %%i in ('docker images --filter "label=com.docker.compose.project=adj-demo" -q') do (
                        docker rmi -f %%i || echo No se pudo eliminar la imagen %%i
                    )
                    echo Limpieza de imágenes completada.
                '''
            }
        }

        // Obtener las actualizaciones del repositorio
        stage('Actualizando...') {
            steps {
                checkout scm
            }
        }

        // Construir y desplegar el proyecto
        stage('Construyendo y desplegando') {
            steps {
                bat '''
                    echo Construyendo y desplegando servicios...
                    docker compose -p adj-demo up --build -d
                '''
            }
        }
    }

    post {
        success {
            echo '======== Pipeline ejecutado con éxito ========'
        }
        failure {
            echo '======== Falló la ejecución del pipeline ========'
        }
        always {
            echo '======== Pipeline finalizado ========'
        }
    }
}
