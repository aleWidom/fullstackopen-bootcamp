//FUNCIONES AUXILIARES DEL COMPONENTE

/*. En JavaScript,a difenrencia de Java por ej, definir funciones dentro de funciones es una técnica de uso común.*/


//COMPONENTE CON ESTADO

/* Cuando se llama a la función de modificación de estado setCounter (cambio de estado), React vuelve a renderizar el componente, lo que significa que el cuerpo de la función del componente se vuelve a ejecutar.*/


//EL CONTROLADOR DE EVENTOS ES UNA FUNCION

/* un controlador de eventos es una función o una referencia de función. Por eso por ej dentro del evento onClcik no debo invocar la función, a menos que esta función retorne otra función  */


//PASANDO EL ESTADO A COMPONENTES HIJOS

/*Se recomienda escribir componentes de React que sean PEQUEÑOS y REUTILIZABLES en toda la aplicación*/
/*Una de las mejores prácticas en React es levantar el estado en la jerarquía de componentes. Recomendamos elevar el estado compartido a su ancestro común más cercano*/


/*Cuando se hace clic en los botones y la App se vuelve a renderizar, todos sus elementos secundarios, incluido el componente Display, también se vuelven a renderizar. Ej a continuación*/

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}




  //MIDUDEV

/* const [contador, setContador] = useState(1)
Otra forma de actualizar el contador serìa pasandole una funciòn (es màs segura para algunos casos),
setContador(prevContador => {
  return prevContador +1
})*/
/*Siempre hay que intentar usar el estado lo mìnimo posible, solo cuando es necesario no llenar todo de estados por todos lados sino sirve el estado ahì*/

//*No solo los valores que tiene un estado cambia, sino también puedo poner una constante y hacer una condicional de acuerdo a lo que quiera mostrar
//*No se puede poner un hook dentro de un condicional
//*Se puede poner una función ejecutandala dentro del onClick pero esta debe retornar otra función (callback sino me equivoco).

//*Un Componente se va a volver a ejecutar siempre que le lleguen nuevas props, aunque no cambie el valor. En cambio con el cambio de estado si no cambia el valor no vuelve a ejecutar el componente.

//*Cuando cambia el estado de un compoenente se renderiza todo el componente (renderizado de react ocurre, en el dom No react se da cuenta que no cambia en el dom entonces no lo actualiza)

//*Es mejor tener el estado de un compoenente en partes pequeñas (varios estados, siempre que sea necesario) a tenelos todos en uno solo (en el estado con un objeto, hay veces que si tiene sentidos. En este caso usar el spread operator para que no se sobreescriba la informaciòn. Hace una copia de las propiedades del objeto no ocurre la mutaciòn).

/*Nunca debemos hacer mutar nosotros el estado ni las props (las props y los estados son inmutables) con javascript puro por ej asignando un valor por ej .
No debemos hacer setState(contador++) ((contador = contador + 1). ESTO NO se debe  hacer en tal caso setState(contador + 1). Por ej si el estado es un array no debo usar el push NO DEBO MUTARLO, si el concat() o el spread operator. Por eso por ejemplo para recorrer un array se usa el map que devuelve un nuevo array*/

//*Se puede usar un if ternario dentro del jsx

//*Poniendo debugger debugeo la aplicaciòn, otra buena es usar la extensiòn de react para google o firefox (puedo jugar en vivo cambiando los valores)

//*Las constantes que por ej puedo usarla como estado inicial, recomienda ponerlas afuera porque sino cada vez que renderizo el componente se va a volder a crear.