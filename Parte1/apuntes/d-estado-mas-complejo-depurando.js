//ESTADO COMPLEJO

/* En nuestro ejemplo anterior el estado de la aplicación era simple ya que estaba compuesto por un solo entero. ¿Y si nuestra aplicación requiere un estado más complejo?
En la mayoría de los casos, la manera más fácil y mejor de lograr esto es usando la función useState varias veces para crear "partes" de estado separadas. Aunque también podríamos usar un estado con un objeto por ej en algunas aplicaciones*/

/*Está prohibidoen React mutar el state directamente, ya que puede provocar efectos secundarios inesperados. Por eso por ej el uso de Map() que devuelve un nuevo array, no lo muta sino que es uno nuevo. O utilizar el metodo concat, en vez del push*/


//RENDERIZADO CONDICIONAL

/*Podemos mostrar una cosa u otra*/

//DEPURACION DE APLICACIONES

/* Una gran parte del tiempo de un desarrollador típico se dedica a depurar y leer el código existente. De vez en cuando podemos escribir una línea o dos de código nuevo, pero una gran parte de nuestro tiempo se dedica a tratar de averiguar por qué algo está roto o cómo funciona algo. Las buenas prácticas y herramientas para depurar son extremadamente importantes por este motivo:

a) Mantenga la consola de desarrollador del navegador abierta en todo momento.

b) La Consola, en particular, debería estar siempre abierta, a menos que haya una razón específica para ver otra pestaña.

c) Mantén tu código y la página web abiertos juntos al mismo tiempo, todo el tiempo. 

d) Si su código falla al compilarse no escriba más código, sino busque y solucione el problema inmediatamente. 

e)es útil comenzar a imprimir sus variables en la consola. Para hacer esto de manera efectiva, debemos transformar nuestra función en la forma menos compacta y recibir el objeto props completo sin desestructurarlo inmediatamente

f)Se puede pausar la ejecución del código de su aplicación en el depurador de la consola de desarrollador de Chrome, escribiendo el comando debugger en cualquier parte de su código

g) Se recomienda agregar las herramientas de desarrollo de React para Chrome */


//REGLAS DE LOS HOOKS

/*La función useState (así como la función useEffect presentada más adelante en el curso) no se debe llamar desde dentro de un ciclo, una expresión condicional o cualquier lugar que no sea una función que defina un componente.
En resumen, los hooks solo se pueden llamar desde el interior de un cuerpo de función que define un componente de React
*/


//FUNCION QUE DEVUELVE UNA FUNCION

/*El valor de retorno de la función es otra función. Esto si se puede. Ejs a continuación*/

//Ej1
const App = () => {
    const [value, setValue] = useState(10)

    /*   const hello = (who) => {
          const handler = () => {
                console.log('hello', who)
          }
          console.log(handler)
          return handler
        } 
       
         const hello = (who) => {
          return () => {
            console.log('hello', who)
          }
        }  */

    const hello = (who) => () => {
        console.log('hello', who)
    }


    return (
        <div>
            {value}
            <button onClick={hello('world')}>button</button>
        </div>
    )
}

//Ej 2
const App2 = () => {
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => () => {
        setValue(newValue)
    }

    return (
        <div>
            {value}
            <button onClick={setToValue(1000)}>thousand</button>
            <button onClick={setToValue(0)}>reset</button>
            {/*    <button onClick={() => setToValue(0)}>reset</button> es lo mismo que la de arriba depende de gustos*/}
            <button onClick={setToValue(value + 1)}>increment</button>
        </div>
    )
}



  //NO DEFINIR COMPONENTES DENTRO DE OTRO COMPONENTE

/*No crear componentes dentro de otros componentes*/




  //MIDUDEV

  //*el use effect se ejecuta cada vez que se renderiza el componente
///el use effect recibe dos parametros, el primero la función, el segundo las dependencias (las variables o información que si cambian debe ejecutar el efecto, tiene que ser un array)
//*recomienda sacar del componente lo que va dentro del useEffect, y llevarlo a otro archivo