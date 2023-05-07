# Mock E-commerce - Tienda de usados de Playstation™ 🎮

__Proyecto final de la comisión 39655 de React.js ⚛️ de Coderhouse__

## Pre-requerimientos 🤓

_Instalar React:_ 
```
  npx create-react-app
```

_Y las siguientes dependencias:_
```
  npm i firebase
  npm i react-router-dom
  npm i react-hook-form
  npm i react-toastify
  npm i react-icons
  npm i react-loader-spinner
  npm i sass
```

## Ejecutar la app 🖥️

_Existen dos maneras de implementar esta app de manera local:_

1. La aplicacion puede ser compilada a traves de _webpack_ ingresando el siguiente comando en la consola:
```
  npm start
```
  Lo que lanzará el modo de desarrollo en el puerto [localhost:3000](http://localhost:3000). 

2. Alternanativamente, una vez descargado o clonado el repositorio, puede compilarse a traves de un ambiente artificial en node.js mediante el siguiente comando:
  ```
    npm run build
  ```
  Esto creará una produccion local, para poder acceder a ella deberá instalar la dependecia `serve`_(para mas informacion sobre esta dependencia, dirigirse a [Vercel/Serve](https://github.com/vercel/serve))_ mediante el siguiente comando en la consola:
  ```
  npm install -g serve
  ```
  Una vez hecho esto, y con el comando `build` previamente ejecutado, para acceder a la produccion local debera ejecutar éste último comando:
  ```
    serve -s build
  ```
  Lo cual ejecutara la app por defecto en el puerto [localhost:3000](http://localhost:3000/), hasta su terminacion en la terminal del usuario.

_(Para mas informacion sobre como implementar la app de diversos modos, remitirse a la pagina oficial de "create-react-app": [deployment-info](https://create-react-app.dev/docs/deployment/))._

_(Se recomienda utilizar el complemento de Chrome ["React-Dev-Tools"](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), de esa manera se tendrá acceso a la pestaña "Componentes" a la izquierda del resto de los elementos de las herramientas de desarrollador)_

## Creado con 📝

* [React](https://react.dev/) - Frontend JavaScript Framework.
* [Firebase](https://console.firebase.google.com/?hl=es) - Base de datos y server de Google™.
* [React-Hook-Form](https://react-hook-form.com/) - Libreria usada cómo template del Checkout.
* [React-icons](https://react-icons.github.io/react-icons/) - Extensa libreria de iconos en formato .svg
* [React-toastify](https://fkhadra.github.io/react-toastify/introduction/) - Libreria con notificaciones pop-up usadas para devolver informacion al usuario en pantalla.
* [React-router-dom](https://reactrouter.com/en/main) - Habilita el "Client side routing", para poder desarrollar SPAs navegables.
* [React-loader-spinner](https://mhnpd.github.io/react-loader-spinner/) - Para implementar un cargador en aquellas paginas que hagan un request a la base de datos en Firebase.
* [SASS](https://sass-lang.com/) - Para estilizar cada componente se utilizo el compilador SASS, cada componente tiene su hoja de estilos `component.scss`, excepto para `index.css`.