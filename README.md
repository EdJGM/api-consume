
# API Consume - React Project

Este proyecto es una aplicación web desarrollada en React que demuestra cómo consumir una API externa y mostrar los datos obtenidos en la interfaz de usuario. El objetivo principal es servir como ejemplo práctico para la materia "Desarrollo Web Avanzado".

## Contexto

La aplicación fue creada como parte de las clases del segundo parcial, y está orientada a mostrar buenas prácticas en el consumo de APIs REST utilizando React, manejo de estados y renderizado de componentes.

## Estructura del Proyecto

- `src/components/fetch.jsx`: Componente principal encargado de realizar la petición a la API y mostrar los datos.
- `src/App.js`: Componente raíz de la aplicación.
- `public/`: Archivos estáticos y de configuración.

## ¿Cómo funciona?

La aplicación realiza una petición HTTP a una API pública (puedes modificar la URL en el componente `fetch.jsx`) y muestra los resultados en pantalla. Utiliza `fetch` para obtener los datos y React para renderizarlos dinámicamente.

## Instalación y uso

1. Clona el repositorio:
	```bash
	git clone <url-del-repositorio>
	```
2. Instala las dependencias:
	```bash
	npm install
	```
3. Inicia la aplicación:
	```bash
	npm start
	```
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la app en acción.

## Scripts disponibles


En el directorio del proyecto puedes ejecutar:

- `npm start`: Ejecuta la app en modo desarrollo.
- `npm test`: Lanza el test runner en modo interactivo.
- `npm run build`: Construye la app para producción en la carpeta `build`.
- `npm run eject`: Elimina la configuración predeterminada y te da control total sobre las dependencias y scripts.

Para más detalles sobre cada script, consulta la [documentación oficial de Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

## Personalización

Puedes modificar el componente `fetch.jsx` para consumir cualquier API pública o privada, cambiar la estructura de los datos y el diseño de la interfaz según tus necesidades.

## Recursos útiles

- [Documentación de React](https://reactjs.org/)
- [Documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started)

---

Desarrollado para la materia Desarrollo Web Avanzado - Segundo Parcial (2024)
