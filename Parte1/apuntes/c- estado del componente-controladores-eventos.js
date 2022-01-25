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
    const [ counter, setCounter ] = useState(0)
  
    const increaseByOne = () => setCounter(counter + 1)
    const setToZero = () => setCounter(0)
  
    return (
      <div>
        <Display counter={counter}/>
        <button onClick={increaseByOne}>
          plus
        </button>
        <button onClick={setToZero}> 
          zero
        </button>
      </div>
    )
  } 

