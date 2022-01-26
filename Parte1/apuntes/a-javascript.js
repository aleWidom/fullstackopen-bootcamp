//VARIABLES

/*A const no le puedo asignar un nuevo valor, si puede cambiar el contenido en los objetos y arrays ya que no estoy asignandolo nuevamente. Si lo ponemos a pensar como el array y el objeto son objetos, la variable siempre apunta al mismo objeto aunque cambie el contenido */

//ARRAYS

/* Cuando se usa React, a menudo se usan técnicas de programación funcional. Una característica del paradigma de programación funcional es el uso de estructuras de datos inmutables. En el código de React, es preferible usar el método concat, que no agrega el elemento al array, pero crea un nuevo array en la que se incluyen el contenido del array anterior y el nuevo elemento.
El método Map() devuelve un nuevo array. */

//OBJETOS

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}


console.log(object1.name)         // se imprime Arto Hellas
const fieldName = 'name'
console.log(object1[fieldName])    // es otra forma se imprime Arto Hellas también


//También puedes agregar propiedades o reemplazar a un objeto sobre la marcha usando notación de puntos o corchetes:
object1.address = 'Helsinki'
console.log(object1)



//FUNCIONES FLECHA (este tipo de funciones no van a la pila hasta no llegar a la línea, a diferencia de la declaración de la función que va la pila y cuando la invoco se ejecuta)


/*Si hay un solo parámetro, podemos excluir los paréntesis de la definición
  Si la función solo contiene una expresión, entonces las llaves no son necesarias y el return tampoco. */

  /* const square = (p) => {
    return p * p
  } */

  
  const square = p => p * p
  console.log(square(5))



//MATERIALES JAVASCRIPT DE REFERENCIA

/* 1) You-Dont-Know-JS, 2)  javascript.info */ 



//MIDUDEV

//*asincrono (por ej fetch), nuestra aplicacion va a seguir funcionando, la aplicaciòn no va a esperar, no va a bloquear la pàgina. Javascript bloquea pero cuando es asincrono no.
//*Promesa: objeto que guarda un valor futuro
//*Primero se renderiza (sin ejecutar el useEffect(), luego ejecuta el efecto), y luego sigue renderizando