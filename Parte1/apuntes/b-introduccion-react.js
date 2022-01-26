//JSX

/* al escribir JSX, la etiqueta debe estar cerrada, inclusive por ej <br/> */


//ALGUNAS NOTAS

/*Al menos al principio, avanzar en pasos muy pequeños y asegurarse de que cada cambio funcione como se desea.
La consola siempre debe estar abierta. Si el navegador reporta errores, no es recomendable seguir escribiendo más código, esperando milagros. En su lugar, debe intentar comprender la causa del error y, por ejemplo, volver al estado de trabajo anterior*/

/*Los compoenentes debe ser la primera letra en mayúscula, sino en el navegador intentara crear una etiqueta html*/





//APUNTES MIDUDEV



//* Javascript es de tipado débil y dinámico: Debil porque a una variable cuando le asigno un valor luego le puedo cambiar el tipo de valor, y dinámico porque sabe sin especificarle de que tipo es la variable

//*Las variables de tipo primitivas son inmutables, esto quiere decir por ej el string tiene métodos por defecto pero si utilizo sobre un valor este metodo no va a cambiar (inmutable), lo que si puedo hacer es generar una nueva variable y guardar dicho. 

const first = "Alejandro"
first.toUpperCase() //esto no va a hacer lo que quiero
const firstWithUpper = first.toUpperCase() //usando una nueva variable puedo asignar y obtener el resultado en máyuscula, obtengo un nuevo string


//*Por el contrario en los objetos si es mutable puede cambiar el valor. Igual hay metodos también en los objetos que hacen que sean inmutables, por ej el concat

const list = [];
list.push(1)    //Esto va a agregarle el 1 dentro del array [1]. 

const list2 = [];
const list2CWithConcat = list.concat(1)

//* Las constantes no se pueden reasignar PERO ESO no significa que no pueda cambiar el valor


//*LO MEJOR ES TRATAR DENTRO DE LO POSIBLE NO MUTAR

const person = {
    name: "ale",
    edad: 37,
    equipo: 'river',
    isIntelligent: true
}


//forma tradicional
console.log(person.edad)


//forma dinámica
const prueba = 'edad';
console.log(person[prueba]);



//Funciones: las funciones como se llama en la jerga son ciudadanos de primiera clase, se pueden asignar a una variable, puedo pasarlas como parametro, etc

//expresion

const sumar = (operando1, operando2) => {
    console.log(operando1, operando2);
    return operando1 + operando2
}


const resultadoResta = restar(34, 70) //solo a modo de ejemplo

//declaración (este tipo de funciones las podría llevar a ejecutar antes de declararla), igual no es recomendable
function restar(operando1, operando2) {
    return operando2 - operando1
}

const op1 = 10;
const op2 = 15;

console.log(sumar(op1, op2))
console.log(resultadoResta);


//MIDUDEV

//*React biblioteca para interfaces de usuario (puede ser web, app, o inclusive terminal). Si usams react.dom es para web por ej
//*React es declarativo: declaramos (no tengo que decirle paso a paso lo que tiene que hacer). Daba el ejemplo de que Quiero comer Suhi. Lo contrario es imperativo (acciones), llamo al restaurante, hago el pedido, espero el delivery como el sushi
//*Basado en componentes, trocitos que van formando un todo. Todo es un componente.
//*le podemos cambiar cualquier comportamiento a nuestro componente a travès de las props
//*Cada vez que las props cambian o cambia el estado react vuelve a renderizar el componente
//*React renderiza solo lo que le hace falta volver a renderizar no renderiza toda la web nuevamente
//*Puedo hacer renderizado condicional, si pasa esto haz esto sino haz lo otro. Se puede hacer fuera del return o dentro del mismo (y esto se puede hacer ya sea con el estado o con las props)
//*Un componente puede tener màs de un estado
//*No recomienda todo en store global si lo puedo hacer en el componente el estado mejor, es màs escalable
//*En el estado, puede ir lo que quiera un objeto, arrays, numbers, strings,  etc.

//*Al poner return() lo que hace es devolver todo el contenido que esta dentro de return, sino devuelve solo la primera linea
//* El jsx es javascript (se puede ver esto en babel)
//* Dentro del componenete puedo poner entre {} lo que se llama evaluaciones, no puede evaluar todo solo cosas que puedas renderizar, un objeto en s+i no puede renderizar (ej new Date no me lo evalua)
//*No se deben poner componentes dentro de otro componente
//*Los componenentes van en mayuscula porque sino piensa que es una etiqueta html
//*A los componenetes se le pueden pasar parametros (llamados props), para pasar los mismos se pasan como si fuesen atributos cuando uso el compoennte
//*recomendo dos libros de javascript que estan en español (1-You-Dont-Know-Js, 2-Javascript.info). Se encuentran en el apartado javascript materials del bootcamp fs
//*el componente se vuelve a renderizar cada vez que cambia su estado, o le llega una prop nueva ya sea con valor igual o diferente,
//*No se debe poner setTimeOut ni setInterval dentro de un compoenente