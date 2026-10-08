## P0. 

*Cliente:* es el navegador que usamos en nuestro computador o celular, porque es quien solicita la página.

*Servidor:* es el equipo donde está guardada la página web y que responde a la solicitud.

*Entrada:* viaja la solicitud que hacemos, por ejemplo, la dirección de la página que queremos abrir.

*Salida:* viaja la respuesta del servidor, como el código HTML, CSS, JavaScript, imágenes y demás elementos necesarios para mostrar la página.

## P1. 

creo que  en las tres rutas vamos a ver lo mismo osea "hola desde el servidos "

Porque el código del servidor no está revisando por cuál ruta entra el usuario; simplemente responde lo mismo con res.end() sin importar qué le pidan.

## P2. 

Aunque abra una sola página, creo que en la terminal van a salir dos peticiones (o más de una).

porque el servidor va a pedir cosas que aun no tiene por ejemplo el icono etc. 

## P3.

Seguro que las dos me van a tirar error 404 ("Ruta no encontrada").

Porque el código compara el texto exacto con el ===. Si le pongo un slash de más al final (/actividades/) o lo escribo en mayúsculas (/ACTIVIDADES), ya no es idéntico a lo que pide el if, así que nos manda derecho al else.

## Reflexión
1.Nos pareció tedioso tener que revisar manualmente el método y la URL para saber qué debía responder el servidor.

2.También fue un poco complicado manejar las diferentes rutas con varios if y else.

3.Otra cosa que me pareció incómoda fue tener que configurar manualmente el JSON y el código de estado cuando una ruta no existe.

## P4

1.Mi predicción:
Yo creo que si entro a `/no-existe`, Express va a mostrar un error 404 porque esa ruta no está creada en el código.

2.Lo que pasó:
Cuando entré a `/no-existe`, Express respondió con un error 404 porque no encontró una ruta que coincidiera con esa dirección.

3.Por qué pasó:
Pasó porque solamente creamos la ruta `/` y no creamos ninguna ruta llamada `/no-existe`. Express busca una ruta que coincida y, como no la encuentra, responde con 404.

## Reflexión

De las tres cosas que me parecieron tediosas en el Momento 1, Express me ayudó a resolverlas casi todas. Ya no tengo que hacer tantos `if` y `else` para revisar las rutas, tampoco tengo que convertir el JSON manualmente y el manejo del 404 es más sencillo. Lo que sigue igual es que tengo que crear las rutas correctamente y decidir qué debe responder cada una.
