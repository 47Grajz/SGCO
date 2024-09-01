# Introduccion

El sistema de gestion para consultorios odontologicos o SGCO tiene como funcionalidad principal facilitar las tareas diarias que realizan los odontologos en su dia a dia y cuenta con las siguientes caracteristicas:
        
* Gestion de pacientes con sus respectivos datos
* Agendamiento de citas y control de las mismas
* Manejo de historias clinicas
        



# Instalacion SGCO

A continuacion se procedera a explicar el proceso de instalacion para el Sistema de Gestion para Consultorios Odontologicos (SGCO-Shiny-Desk)



## Tecnologias Previas 📋

* [Instalacioón de Fork](https://gist.github.com/villanuevand/xxxxxx) - Para la instalación y configuracion de Fork (Este paso se realiza una vez este clonado el repositorio)
* [Git](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git) - Control de Versiones
* [npm](https://www.npmjs.com/package/download?activeTab=readme) - 18.16 en adelante
* [NodeJS](https://nodejs.org/en/download) - 18.16 en adelante



    

    

## Instalacion 🔧

Primero debemos de asegurarnos que nuestra configuracin git sea correcta para evitar errores

- Configurar las credenciales con correo y usuario validos
        
        git config --global user.name "Tu nombre completo"
        git config --global user.email "tucorreo@example.com"
        git config user.name "Tu nombre completo"
        git config user.email "tucorreo@example.com"



- Ejecutar el siguiente comando en la consola

        git clone https://github.com/47Grajz/adso-ShinyDesk.git

- Movernos hacia la carpeta del proyecto con el siguiente comando

        cd adso-ShinyDesk

- Acceder a la carpetea dependiendo de nuestro rol Backend o Frontend

        cd {frontendShinyDesk | backendShinyDesk }

 
- Ejecutar el comando para instalar las dependencias

        npm i

- En caso de faltar dependencias instalarlas con el comando

        npm install "nombre dependencia faltante"


- Crear un archivo en la raiz llamado .env.local donde se añadira la siguiente linea

        JWT_SECRET=ADSO_SHINY_DESK

- Moverse a la rama develop y crear una nueva rama saliendo de esta

        git checkout develop 
        git checkout -b "nombre de la rama"

- Inicializar proyecto

        npm run dev


### Es necesario el uso de un JWT para ver la aplicacion y este sera suministrado por el dueño del proyecto




## Commits y despliegue 📦

### Convencion de los commits

    feat: nueva característica
    fix: arreglo de bug
    style: estilo y maquetación
    docs: documentación al respecto



### Push a las ramas

Antes de hacer un push debes asegurarte que todo funciona utilizando el comando 

    npm run build



El commit debera subirse hacer su debido push donde se creara un predespliegue para visualizar los cambios hechos, una vez se genere este predespliegue y todos los cambios sean correctos estos deberan ser enviados como pull request a la rama develop


## Authors

- [@Juan Jose Grajales](https://www.github.com/47Grajz)


## License

[MIT](https://choosealicense.com/licenses/mit/)

