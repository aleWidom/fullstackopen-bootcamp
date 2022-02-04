//OBTENIENDO DATOS DEL SERVIDOR JSON SERVER

/*
archivo llamado db.json en el directorio raíz del proyecto
json-server almacena todos los datos en el archivo db.json, que reside en el servidor. 
En el mundo real, los datos se almacenarían en algún tipo de base de datos. Sin embargo, json-server es una herramienta útil que permite el uso de la funcionalidad del lado del servidor en la fase de desarrollo sin la necesidad de programar nada de eso

no es necesaria una instalación global. Desde el directorio raíz de su aplicación, podemos ejecutar json-server usando el comando npx:
npx json-server --port 3001 --watch db.json 
*/



//EL NAVEGADOR COMO ENTORNO DE EJECUCION

/*fetch, que se basa en las llamadas promesas (promises)*/

/* el código Javascript no se ejecuta de forma síncrona "de arriba a abajo", sino que lo hace asincrónicamente. Ej JavaScript llama al controlador de eventos que se registró para la solicitud en algún momento.
*/

/* Cuando se completa una operación asincrónica, o más específicamente, en algún momento después de su finalización, el motor de JavaScript llama a los controladores de eventos registrados en la operación. Actualmente, los motores de JavaScript son de un solo subproceso, lo que significa que no pueden ejecutar código en paralelo*/

/*es un requisito en la práctica utilizar un modelo sin bloqueo para ejecutar operaciones IO ( En informática , entrada/salida ( I/O , o informalmente io o IO ) es la comunicación entre un sistema de procesamiento de información, como una computadora , y el mundo exterior, posiblemente un ser humano u otro sistema de procesamiento de información). 
De lo contrario, el navegador se "congelaría" durante, por ejemplo, la obtención de datos de un servidor. Otra consecuencia de esta naturaleza de un solo subproceso de los motores de JavaScript es que si la ejecución de algún código lleva mucho tiempo, el navegador se atascará mientras dure la ejecución.


setTimeout(() => {
  console.log('loop..')
  let i = 0
  while (i < 50000000000) {
    i++
  }
  console.log('end')
}, 5000)

*/



//NPM

/*NPM: adminitrador de paquetes de Node. Un indicador claro de que un proyecto usa npm es el archivo package.json ubicado en la raíz del proyecto */ 

/* los comandos de npm siempre deben ejecutarse en el directorio raíz del proyecto, que es donde se puede encontrar el archivo package.json*/

/*Podemos innstalar json-server como una dependencia de desarrollo (solo se usa durante el desarrollo) ejecutando el comando:

npm install json-server --save-dev*/

/*Puedo modificar el script por ej: 

{
  // ... 
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server -p3001 --watch db.json"
  },
}



hora podemos convenientemente, sin definiciones de parámetros, iniciar json-server desde el directorio raíz del proyecto con el comando 

npm run server*/


/*
npm install axios
npm install json-server --save-dev
Hay una pequeña diferencia en los parámetros. axios se instala como una dependencia de tiempo de ejecución de la aplicación, porque la ejecución del programa requiere la existencia de la librería. Por otro lado, json-server se instaló como una dependencia de desarrollo (-- save-dev), ya que el programa en sí no lo requiere. Se utiliza como ayuda durante el desarrollo de software. */





//AXIOS

/*El método de Axios get devuelve una promesa (Una promesa es un objeto que representa la eventual finalización o falla de una operación asincrónica.).*/


/*Una promesa puede tener tres estados distintos:
1)La promesa está pendiente: significa que el valor final (uno de los dos siguientes) aún no está disponible.
2)La promesa está cumplida: Significa que la operación se ha completado y el valor final está disponible, que generalmente es una operación exitosa. Este estado a veces también se denomina resuelto.
3)La promesa es rechazada: Significa que un error impidió determinar el valor final, que generalmente representa una operación fallida.
*/


/*Si, y cuando, queremos acceder al resultado de la operación representada por la promesa, debemos registrar un controlador de eventos en la promesa. Esto se logra usando el método then:


const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2) //Daría error que no existe pero no para la ejecución de la otra promesa que esta a continuación. No existe como propiedad foobar en el db.json que es como toma el json server la info


const promise = axios.get('http://localhost:3001/notes') //Trae los datos de db.json lo que está en la propiedad notes

promise.then(response => {
  //el response trae todos los datos que trae el HTTP Get tradicional.
  console.log(response)
})

//Esto es lo mismo (no es necesario guardarlo en una variable lo que trae el axios):

axios.get('http://localhost:3001/notes').then(response => {
    console.log(response)
})
*/



//USEEFFECT

/*Effect Hook le permite realizar efectos secundarios en componentes de funciones. Obtener datos, configurar una suscripción y cambiar manualmente el DOM en los componentes de React son todos ejemplos de efectos secundarios*/

/*
El segundo parámetro de useEffect se usa para especificar la frecuencia con la que se ejecuta el efecto. Si el segundo parámetro es una matriz vacía [], entonces el efecto solo se ejecuta junto con el primer renderizado del componente y luego no se ejecuta (forma predeterminada).
*/



//ENTORNO DE EJECUCION DE DESARROLLO

/* El código JavaScript que compone nuestra aplicación React se ejecuta en el navegador. El navegador obtiene el JavaScript del servidor de desarrollo React, que es la aplicación que se ejecuta después de ejecutar el comando npm start. El servidor de desarrollo transforma el JavaScript en un formato comprendido por el navegador. Entre otras cosas, une JavaScript de diferentes archivos en un solo archivo. Analizaremos el servidor de desarrollo con más detalle en la parte 7 del curso.

La aplicación React que se ejecuta en el navegador obtiene los datos formateados JSON desde json-server que se ejecuta en el puerto 3001 de la máquina. El servidor del que consultamos los datos - json-server - obtiene sus datos del archivo db.json.

En este punto del desarrollo, todas las partes de la aplicación residen en la máquina del desarrollador de software, también conocida como localhost. */


/*Tuve que reiniciar servidor para que funcione la varialbe de entorno (para que me actualice el nuevo valor)*/