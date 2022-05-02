# Proyecto Abracadabra Modulo 8 "Framework Express".

Capítulos
El proyecto está basado en los siguientes capítulos de la lectura:
- ¿Qué es Express?.
- Express vs Node puro.
- Creación de rutas.
- Objetos Request y Response.
- Middlewares.
- Devolución de sitios web estáticos

Descripción

Los sitios web en la actualidad son la cara visible de las empresas en el mundo digital, por ello, requieren disponer de un espacio de fácil navegación e interesante para los usuarios.

En este contexto, el instituto recreativo más conocido de la ciudad, contrató recientemente una asesoría de marketing para aumentar el tráfico en su sitio web. La consultora, en base al análisis realizado a la empresa contratante, les propone aumentar la interacción con los usuarios que visitan su sitio web, a través de la creación de juegos de azar con temáticas relacionadas a los diferentes shows que ofrece el instituto. Además, propone que estos juegos solo puedan realizarlos usuarios registrados, con el fin de generar más fidelidad con su público.

En este desafío, deberás desarrollar un servidor con Express que sirva un sitio web estático con temática de magia, donde se presenten 4 sombreros y al hacer click en uno de estos encontrar el conejo oculto.

El servidor deberá disponibilizar las siguientes rutas:
1. /abracadabra/usuarios: Se debe devolver un JSON con un arreglo de nombres alojado en el servidor.
2. /abracadabra/juego/:usuario: A través de un middleware, verificar que el usuario escrito como parámetro existe en el arreglo alojado en el servidor.
3. /abracadabra/conejo/:n: Basado en un número aleatorio del 1 al 4, devolver la foto del conejo en caso de coincidir con el número recibido como parámetro ó devolver la
foto de Voldemort en caso de no coincidir.

Las siguientes imágenes representan las interacciones que debe tener el sitio web una vez terminado.

![image](https://user-images.githubusercontent.com/96355317/166338752-200df1e8-944c-41e9-aeee-336ecbc83189.png)

![image](https://user-images.githubusercontent.com/96355317/166338769-fc29a403-827f-404d-9c0e-509f56c40081.png)

![image](https://user-images.githubusercontent.com/96355317/166338783-4b915496-7fe1-46e4-ab90-8adc3dc512f5.png)

Si se hace click en un sombrero cuyo número no coincide con el número generado en el servidor de forma aleatoria, se debe devolver la imagen de Voldemort.

![image](https://user-images.githubusercontent.com/96355317/166338819-6b7afdbb-d373-4461-9db8-a0c3420b8125.png)

Si se hace click en un sombrero cuyo número sí coincide con el número generado en el servidor de forma aleatoria, se debe devolver la imagen del Conejo.

![image](https://user-images.githubusercontent.com/96355317/166338851-6a549675-a2a2-4164-8166-bfeef7d4c379.png)

Se debe devolver un mensaje diciendo “Esta página no existe” en caso de consultar una ruta que no esté definida en el enrutador de express.

Requerimientos
1. Crear un servidor con Express en el puerto 3000.
2. Definir la carpeta “assets” como carpeta pública del servidor.
3. Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios.
4. Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado
en el servidor. En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario devolver la imagen “who.jpeg”.

5. Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria. En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort.

6. Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al consultar una ruta que no esté definida en el servidor.
