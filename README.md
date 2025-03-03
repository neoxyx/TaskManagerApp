# TaskManagerApp
# Aplicación Ionic para Gestión de Tareas

## Descripción
Esta aplicación móvil desarrollada con Ionic y Angular permite a los usuarios gestionar sus tareas de manera eficiente. Incluye funcionalidades como registro de usuarios, login, creación, edición y eliminación de tareas, y visualización de tareas por estado.

## Requisitos
Antes de instalar la aplicación, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión recomendada: 16 o superior)
- [Ionic CLI](https://ionicframework.com/docs/cli/installation)
- [Angular CLI](https://angular.io/cli)
- [Capacitor](https://capacitorjs.com/)

## Instalación

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/neoxyx/TaskManagerApp
   cd nombre-del-proyecto
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Configurar el entorno en el archivo `src/environments/environment.ts`:
   ```ts
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8000/api'
   };
   ```

## Ejecución de la aplicación

Para ejecutar la aplicación en el navegador:
```sh
ionic serve
```

Para compilar y probar en un dispositivo móvil:
```sh
ionic capacitor run android
```
```sh
ionic capacitor run ios
```

## Estructura del Proyecto
```
/src
│── app/
│   ├── pages/
│   │   ├── login/
│   │   ├── register/
│   │   ├── tasks/
│   │   ├── task-create/
│   │   ├── task-edit/
│── services/
│── assets/
│── environments/
│── theme/
│── global.scss
│── main.ts
```

## Características
- **Registro e inicio de sesión de usuarios**
- **Gestión de tareas** (crear, editar, eliminar)
- **Listado de tareas agrupadas por estado**
- **Interfaz optimizada para dispositivos móviles**
- **Almacenamiento local del usuario autenticado**

## Tecnologías utilizadas
- **Ionic Framework**
- **Angular**
- **Capacitor**
- **TypeScript**

## Autor
JHON JAIRO VALDÉS ARSITIZABAL

## Licencia
Este proyecto está bajo la licencia MIT.

