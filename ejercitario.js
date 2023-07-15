/* Variables y tipo de datos
Lee las instrucciones de cada comentario y escribí el código para realizar la tarea */


//Crea una variable numero y asígnale un valor de tipo number.
// var a = 1;

//Crea una variable texto y asígnale un valor de tipo string.
// let miVariable='Mi casa'

//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera.
// let verdadero=true 

//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa.
// let falso=false

//Crea una variable nulo y asígnale un valor de tipo null.
// let vacio=null

//Crea una variable indefinido y asígnale un valor de tipo undefined.
// let indefinido=undefined

//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos.


//Imprime en la consola el valor de la variable número y el tipo de dato que almacena.
// console.log(a, typeof a)

//Imprime en la consola el valor de la variable texto y el tipo de dato que almacena.
// console.log(miVariable, typeof miVariable)

//Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena.
// console.log(verdadero, typeof verdadero)

//Imprime en la consola el valor de la variable falso y el tipo de dato que almacena.
// console.log(falso, typeof falso)

//Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena.
// console.log(vacio, typeof vacio)

//Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena.
// console.log(indefinido, typeof indefinido)

//Imprime en la consola el valor de la variable arreglo y el tipo de dato que almacena.




/*Decisiones en javascript (if,if else, switch)*/

//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
// let number=parseInt(prompt('Ingrese un numero'))
// if(number>10){console.log (mayor)}
// else if (number<10){console.log(menor)}
// if(number===10){console.log(igual)}

//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.
// let numero=parseInt(prompt('Ingrese el numero'))
// let par= 'es par'
// let impar= 'es impar'
// if((numero%2) ===0){console.log(numero=par)}
// else {console.log(numero=impar)}
//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
// let caracter = (prompt('ingrese una letra'))
// caracter=caracter.toLowerCase()
// console.log(caracter)
// if (caracter=== 'a'||
// caracter === 'e'||
// caracter === 'i'||
// caracter==='o'||
// caracter=== 'u'){
//     console.log('es vocal')
// } else {console.log('es consonante')}
//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.

//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
// let number=parseInt(prompt('Ingrese su edad'))
// if(number>18){console.log ('mayor de edad')}
// else if (number<18){console.log('menor de edad')}
// if(number===18){console.log('mayor de edad')}

//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.
// const DIAS = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
//     'Sabado',
//     'Domingo']
// let input = 2
// console.log (dias(input-1))       

//Funciones

//Escribe una función que tome dos números como argumentos y devuelva su suma.
// let numero1=parseInt(prompt('Ingrese un numero'))
// let numero2=parseInt(prompt('Ingrese otro numero'))
// function sumar (numero1,numero2){
//     let resultado = numero1+numero2
//     return resultado}
//     console.log(sumar(numero1,numero2))


//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
// function isPar (numero){
//     if ((numero%2)===0){return(true);}
//     else {return(False)}
// }
// console.log(isPar(8))

//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.
// let array = [1,2,3]
// function sumarArray (arr){
//     let suma=0
//     for (let i=0; i<arr.length; i++){
//         console.log(arr[i])
//         suma = suma + arr[i]
//     }
//     console.log(suma)
// }
// sumarArray(array)

//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.

//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.





//Vectores

//Escribe una función que tome un array de números como argumento y devuelva el número más grande.

//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.

//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos.

//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas.

//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos.




//Bucles

//Escribe un bucle for que imprima en la consola los números del 1 al 10.
// for(let i = 0; i<=10; i++){
//     console.log(i);
// }
// console.log('termino')

//Escribe un bucle while que imprima en la consola los números del 1 al 5.
// let i=1
// while (i<6) {
//     console.log(i);
//     i++;
    
// }

//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.

//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.

//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.





//DOM y eventos

//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón.

//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento.
