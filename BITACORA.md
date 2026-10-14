## P0. 

Cliente: es el navegador que usamos en nuestro computador o celular, porque es quien solicita la página.

Servidor: es el equipo donde está guardada la página web y que responde a la solicitud.

Entrada: viaja la solicitud que hacemos, por ejemplo, la dirección de la página que queremos abrir.

Salida: viaja la respuesta del servidor, como el código HTML, CSS, JavaScript, imágenes y demás elementos necesarios para mostrar la página.

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

### P6

Mi predicción: Creo que voy a recibir el código 200 y los datos de la actividad con id 1.
Lo que pasó: Al principio la búsqueda no encontraba la actividad porque el id llegaba como texto y en el arreglo está guardado como número.
Por qué pasó:`req.params.id` recibe el valor como texto. Por eso tuve que convertirlo con `Number()` para compararlo correctamente.

## P7

Mi predicción:Si quito el `return` y pido `/actividades/99`, creo que va a aparecer un error porque esa actividad no existe.
Lo que pasó: La ruta envía la respuesta 404, pero como no tiene `return`, la función sigue ejecutándose y trata de enviar otra respuesta. En la terminal aparece un error relacionado con el envío de encabezados después de enviar la respuesta.
Por qué pasó: `return` detiene la ejecución de la función después de enviar la respuesta de error y evita que intente responder dos veces.

## P8

Mi predicción:
  * `?tipo=agua`: recibo el código 200 y una lista con las dos actividades acuáticas.
  * `?tipo=AGUA`: con el código original, recibo el código 200 y una lista vacía porque las mayúsculas no coinciden con `agua`.
  * `?tipo=fuego`: recibo el código 200 y una lista vacía porque no hay actividades de ese tipo.

Lo que pasó:Al convertir el tipo recibido a minúsculas, tanto `agua` como `AGUA` permiten encontrar las dos actividades acuáticas. Con `fuego`, la lista sigue vacía.

Por qué pasó: La comparación distingue entre mayúsculas y minúsculas si no normalizamos el texto. El código 200 es correcto para `fuego` porque la petición se procesó correctamente, aunque no haya resultados. Un 404 se usaría cuando no se encuentra una ruta o un recurso específico.

## P9

Mi predicción: Creo que me va a salir el código 201, que significa que se creó algo nuevo. Pero pienso que puede haber un problema con los datos, porque todavía no he configurado Express para recibir el JSON. En la terminal creo que va a aparecer `Body recibido: undefined`.

Lo que pasó: Al enviar los datos desde Thunder Client, la aplicación no pudo recibirlos correctamente porque faltaba una configuración.

Por qué pasó: Porque tenía que agregar `app.use(express.json())` antes de las rutas para que Express pudiera leer los datos que envío.


## P10

Mi predicción: Creo que, si hago un cambio en app.js, guardo el archivo y vuelvo a consultar las actividades, la actividad que creé ya no aparecerá si el servidor se reinició.

Lo que pasó: Al reiniciar el servidor, la actividad que había creado desapareció de la lista.

Por qué pasó: Porque las actividades están guardadas en un arreglo en memoria y no en una base de datos. Cuando el servidor se reinicia, los datos nuevos se pierden.


## P11

Mi predicción: Predigo que enviara inmediatamente un error 404 ya que etsa justo al comienzo y como el codigo se lee line por linea vera eso y dira inmediatamente que no hay mas codigo abajo y dejara de leer el codigo 

Lo que pasó: Al probarlo, el navegador me devolvió de inmediato un JSON con el error: {"mensaje": "No existe la ruta GET /actividades"} y nunca me mostró la lista de actividades.

Por qué pasó: Porque Express lee el código de arriba a abajo como una fila. Como coloqué el bloque del 404 al principio y no tiene la función next(), actuó como un muro sin salida que atrapó la petición, respondió de golpe y cortó el camino, haciendo que mis rutas reales de /actividades y /actividades/:id quedaran ocultas y jamás fueran alcanzadas.


## P12 

Predicción: /actividades/gratis funcionará aunque esté debajo de /actividades/:id.

Resultado: La ruta dinámica puede interpretar gratis como un ID y devolver 404.

Explicación: La ruta específica debe declararse antes de la ruta dinámica.