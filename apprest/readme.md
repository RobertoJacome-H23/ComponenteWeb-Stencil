# Componente web en stencil para renderizar una api rest en hacia una tabla
El componente es reutilizable, toma como entrada una URL de una API REST y muestra los datos devueltos por la solicitud en una tabla

## Requisitos del componente

1. Propiedad de entrada (prop) : el componente recibe una propiedad llamada apiUrl que contendrá la url de la api rest. 

2. Estructura de datos : la api devolverá un array de objetos json. Cada objeto representa una fila.

3. Renderización de la tabla : la tabla debe tener un encabeado (thead) y un cuerpo (tbody) donde se mostrará los datos obtenidos de la api. 

4. Manejo de errores : se deben manejar los errores mostrando un mensaje adecuado en caso de que falle la petición de la api.

5. Estilo y diseño : la tabla debe ser legible y visualmente atractiva, aplicando css grid o flexbox para un diseño responsivo.


Clona este repositorio en un nuevo directorio

```bash
git clone aquielenlace-github
cd tarea
```

Para iniciar el componente:

```bash
npm install
npm start
```

Para instalar el componente publicado en npmjs
```
npm i apprestdemo
```

Para usar el componente publicado en npmjs
```
<my-component api-url="https://reqres.in/api/users?page=2"></my-component>
```
