# Mock E-commerce - Tienda de usados de Playstation™

_Proyecto final de la comisión 39655 de React.js de Coderhouse_

## Pre-requerimientos:

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

## Ejecutar la app:

La aplicacion fue compilada a traves del comando `npm run build`. Luego de lo cual se instaló el environment de Node.js con el comando `npm install -g serve`.

Es decir, una vez instalado React y sus dependencias, mediante la terminal ejecutar el siguiente codigo:
```
  serve -s build
```
Lo cual ejecutara la app por defecto en el puerto [localhost:3000](http://localhost:3000/), hasta su terminacion en la terminal del usuario.
_(para mas informacion sobre como implementar la app de diversos modos, remitirse a la pagina oficial de "create-react-app": [Deployment-info](https://create-react-app.dev/docs/deployment/))._

## Creado con:

* [React](https://react.dev/) - Frontend JavaScript Framework.
* [Firebase](https://console.firebase.google.com/?hl=es) - Base de datos y server de Google™.
* [React-Hook-Form](https://react-hook-form.com/) - Libreria usada cómo template del Checkout.
* [React-icons](https://react-icons.github.io/react-icons/) - Extensa libreria de iconos em formato .svg
* [React-toastify](https://fkhadra.github.io/react-toastify/introduction/) - Libreria con notificaciones pop-up usadas para devolver informacion al usuario en pantalla.
* [React-router-dom](https://reactrouter.com/en/main) - Habilita el "Client side routing", para poder desarrollar SPAs navegables.
* [React-loader-spinner](https://mhnpd.github.io/react-loader-spinner/) - Para implementar un cargador en aquellas paginas que hagan un request a la base de datos en Firebase.
* [SASS](https://sass-lang.com/) - Para estilizar cada componente se utilizo el compilador SASS, cada componente tiene su hoja de estilos `component.scss`, excepto para `index.css`. 