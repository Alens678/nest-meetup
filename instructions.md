## 1. Creamos nuestro directorio

Para iniciar, crearemos un directorio donde alojaremos nuestro proyecto nest. Desde nuestro command line y ubicandonos en el directorio deseado escribimos mkdir nest-meetup, en este caso es el directorio que hemos creado previamente.

## 2. Instalamos nest

Para instalar nest, nos dirijimos al directorio que acabamos de crear, <cd nest-meetup>, y
con el siguiente comando <npm i -g @nestjs/cli> instalamos el framework.

## 3. Generamos el template de nuestra API

Una vez se complete la instalación, enviamos el comando <nest new .>, he usado el punto para que mi proyecto se cree dentro del directorio que creeamos previamente y evitar generar un directorio adicional anidado dentro del mismo, si quisiera un directorio en especifico, el punto se remplazaría con el nombre del proyecto.
El framework nos preguntará que package manager queremos usar antes de completar la instalación del framework, en este caso seleccionaremos npm

El proceso para configurar el template, tardará un par de segundos, es totalmente normal. Por favor quienes completen la instalación van poniendo check verde para saber que estamos en el mismo punto.

Podemos verificar la documentacion de Nest donde nos indica los pasos a seguir y distintas configuracion que queramos agregar:
https://docs.nestjs.com/

## La estructura inicial del proyecto contiene:

\*\* Un directorio test, pues ya incluye el framework de testing Jest, de igual manera, aqui se crean y almacenan todos los test que se crearan.

\*\* El framework, contiene unas configuraciones de eslint y prettier iniciales para conservar un codigo más limpio. Estas configuraciones también podemos modificarlas segun nuestras preferencias. Dado que el tiempo es limitado, este es un punto que les inivitamos a investigar un poco, pues es uuna muy buena practica a la hora de trabajar en equipos, nos aseguramos de escribir todos bajo las mismas reglas y estandares.

\*\* nest-cli.json En resumen, este archivo de configuración es usado por el framework para especificar las configuraciones relacionadas con la generación y compilación del codigo. Este le dice que colecciones esquematicas usar, donde esta el codigo fuente, y como compilarlo.

\*\*package-lock.json es un archivo de bloqueo (lockfile) que se utiliza en proyectos de Node.js y npm (Node Package Manager) para registrar y bloquear las versiones exactas de las dependencias de un proyecto. Su principal propósito es garantizar la reproducibilidad de las instalaciones de paquetes y mantener la consistencia en el entorno de desarrollo y producción de una aplicación.

\*\*El archivo package.json es un archivo fundamental en proyectos de Node.js y npm (Node Package Manager). Tiene varias funciones esenciales en el desarrollo de aplicaciones Node.js. Gestion de dependencias, scripts, metadatos del proyecto (nombre, información, versiones), Scripts de Post-Instalación, Control de Versiones de Node.js, Configuración de npm, Scripts de Publicación

\*\*tsconfig.json y tsconfig.build.json utilizado en proyectos TypeScript. Este archivo se utiliza para configurar y ajustar el comportamiento del compilador de TypeScript (tsc) cuando se transpila el código TypeScript a JavaScript.

\*\*Finalmente, el directorio src, el directorio raiz o fuente de nuestro proyecto. Inicialmente, contiene un file main, que usualmente no modificamos o que hoy no modificaremos, donde especificamos el puerto donde correra nuestro API, y el codigo que corre el framework.
main.ts The entry file of the application which uses the core function NestFactory to create a Nest application instance.
The main.ts includes an async function, which will bootstrap our application:
To create a Nest application instance, we use the core NestFactory class. NestFactory exposes a few static methods that allow creating an application instance. The create() method returns an application object, which fulfills the INestApplication interface. This object provides a set of methods which are described in the coming chapters. In the main.ts example above, we simply start up our HTTP listener, which lets the application await inbound HTTP requests.

Tenemos nuestro modulo app, que corre y contiene nuestra app inicial. Y es este directorio donde trabajaremos.
app.controller.ts A basic controller with a single route.
app.controller.spec.ts The unit tests for the controller.
app.module.ts The root module of the application.
app.service.ts A basic service with a single method.

## 4. Correr el servidor

Con el comando <npm run start> iniciamos el servidor y podremos confirmar que todo se ha instalado correctamente. <npm run start:dev> nos permitirá correr el servidor en modo watch, lo que significa que actualizara los cambios aplicados automaticamente, sin necesidad de detenerlo.
No dirijimos al navegador y abrimos el localhost en el puerto 3000. Podremos observar un hello world, lo que indica que el servidor esta corriendo de manera adecuada.

## 5. Conecatando a la base de datos

Para conctar la base de datos usaremos MongoDB como nuestra base de datos de ejemplo, podemos verificar la informacion en la documentacion para seguir paso a paso la coneccion:
https://docs.nestjs.com/techniques/mongodb#model-injection

password:NestMeetUp2023
username: NestMeetUp

Primero, instalamos mongodb <npm install mongodb> y mongoose <npm i @nestjs/mongoose mongoose>
Ahora que se ha instalado, podemos importar este modulo en app.module y editar el import de este modulo con el address de nuestra base de datos.

Una vez que se completa el proceso de instalación, podemos importar MongooseModule al AppModule raíz.

##

import { MongooseModule } from '@nestjs/mongoose';

@Module({
imports: [MongooseModule.forRoot('mongodb+srv://NestMeetUp:NestMeetUp2023@cluster0.otb7oar.mongodb.net/?retryWrites=true&w=majority')],
})
export class AppModule {}

##

Con Mongoose, todo se deriva de un esquema. Cada esquema se asigna a una colección de MongoDB y define la forma de los documentos dentro de esa colección. Los esquemas se utilizan para definir modelos. Los modelos son responsables de crear y leer documentos de la base de datos MongoDB subyacente.

Los esquemas se pueden crear con decoradores NestJS o con la propia Mongoose manualmente. El uso de decoradores para crear esquemas reduce en gran medida el texto repetitivo y mejora la legibilidad general del código.

    5.1 Creemos un esquema para las tareas, lo llamaremos task.
    5.2 Creemos el dto para crear una tarea.
    Para esto instalaremos <npm install class-validator class-transformer --save-dev> como dependencia de desarrollo, esta dependencia, nos permitirá crear las validaciones correspondientes a cada campo de nuestra tabla en la base de datos.
    Configuramos el estado de las tareas como un enum con 3 opciones, y le asignamos un valor default al momento de crear una nueva tarea por medio del dto.
    5.3 creamos el task.module
    5.4 creamos el task.service
