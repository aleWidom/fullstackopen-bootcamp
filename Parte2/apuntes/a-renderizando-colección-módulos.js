//RENDERIZADO COLECCION DE MODULOS

/*¿Cuál es la diferencia entre un programador de JavaScript experimentado y un novato? El experimentado usa console.log de 10 a 100 veces más.*/


//REFACTORIZANDO MODULOS

/*El elemento key debe encontrarse donde se esta realizando el mapeo*/



//MIDUDEV

//*RENDERIZADO DE LISTAS
//*Recomendo usar typeOf para condicional y no !true (a veces no sirve)
//* El estado y las props lo ideal es siempre que mantenga el mismo tipo de datos.
//*Las keys recomendo usar siempre el id, debe estar donde esta iterando el elemneto sino no funciona, si por ej lo separo en componente y le pongo la key al elemento separado que no esta haciendo el map.
//*Recomendo al pasar props a otro componente pasar el minimo nro de props (en vez de pasar el objeto entero pasar cada una de las propiedades)
//*Recomendo hacer la exportaciòn en forma nombrada como prioridad. Si o si tengo que saber el nombre de lo que estoy importando y va entre llaves (contrario a exportarlo por default). En cambio por default si bien puedo safar de colocar las llaves puedo cambiarle el nombre y eso puede traerme problemas luego.
//*No usar màs los defaultsProps estan obsoletos. Si quiero cuando me llega una prop le doy un valor por defecto y ya esta (defaultValue).
//*Se puede pasar como estado inicial una props
//*el spread operator crea un array nuevo, no modifica el array existente