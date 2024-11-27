Proyecto: Nitro Karts
Autor: John Edisson Lozano Vivas
CC: 1013598107
Talento Tech
 




Descripción del Proyecto
Nitro Karts es una aplicación web desarrollada como parte del proyecto final para el bootcamp de Desarrollo Web Full Stack (DWFSV2-177) en Talento Tech. Su objetivo principal es gestionar usuarios y turnos para una pista de karts. Los usuarios pueden:
•	Crear un perfil personal.
•	Agendar turnos especificando fecha y hora para sus carreras.
•	Consultar los turnos reservados por otros usuarios.
•	Cancelar o modificar sus turnos agendados.
La aplicación tiene como propósito optimizar la organización de la pista, ofreciendo a los usuarios una experiencia interactiva y fácil de usar.
 




Tecnologías Utilizadas
Frontend
Construido con herramientas modernas que permiten una interfaz interactiva y funcional:
•	Librerías y Frameworks: React, Redux Toolkit, Formik.
•	Routing: React Router Dom.
•	Estilización: Styled Components.
•	Gestión de estados: Redux.
•	Validaciones de formularios: Formik y validadores personalizados.
Backend
El backend está diseñado para manejar la lógica del servidor y las operaciones de base de datos:
•	Framework: Express.
•	Base de datos: PostgreSQL, gestionada con TypeORM.
•	Herramientas auxiliares:
o	CORS: para manejar solicitudes entre dominios.
o	Dotenv: para la configuración de variables de entorno.
o	Morgan: para el registro de solicitudes HTTP.
•	Tipos y validaciones: TypeScript.
 



Resumen del Funcionamiento
Frontend
El componente principal es el archivo App.js, que estructura las vistas y rutas principales de la aplicación:
1.	Inicio (Home): Presenta un mosaico visual con información general.
2.	Registro/Login: Permite a los usuarios registrarse o iniciar sesión para acceder a sus funcionalidades personalizadas.
3.	Gestión de Turnos: Los usuarios pueden programar y cancelar turnos desde vistas específicas.
4.	Perfil del Usuario: Acceso a opciones personales como cerrar sesión y consultar turnos.
5.	Validaciones y Formularios: Implementados con Formik, aseguran que los datos ingresados sean correctos antes de enviarlos al backend.
Backend
El backend maneja operaciones críticas como la gestión de usuarios, turnos y autenticación:
1.	Usuarios:
o	Registro de usuarios con credenciales asociadas.
o	Relación entre usuarios y turnos.
2.	Turnos:
o	Creación, consulta y cancelación de turnos.
o	Validaciones para evitar conflictos de horarios.
3.	Autenticación:
o	Registro y validación de credenciales.
o	Seguridad básica para el manejo de contraseñas.
Interacción
•	Agendar Turno:
Un usuario completa un formulario con la fecha y hora deseada, que es enviado al backend para validación y almacenamiento.
•	Cancelar Turno:
Desde la interfaz del usuario, un botón permite cancelar el turno, actualizando el estado en la base de datos.
•	Consultar Turnos:
Los usuarios pueden visualizar turnos disponibles y los ya reservados en el calendario.
![image](https://github.com/user-attachments/assets/52db6dfe-18fe-4e9d-a700-5724aa23a69c)
