let verbo = 'Soy';
let nombre = 'José';
const saludo = '¡Hola Mundo!';
console.log(saludo, verbo, nombre);

const mayúsculas = 'Mi nombre en Mayúsculas es:';
console.log(mayúsculas, nombre.toUpperCase());
const minúsculas = 'Mi nombre en Minúsculas es:';
console.log(mayúsculas, nombre.toLocaleLowerCase());

const mensaje = 'El mesaje de ';
let verboirregular = ' tiene';
let palabra = ' Caracteres.';
console.log(mensaje,
    saludo,
    verboirregular,
    saludo.length,
    palabra);

let lista = [0, 1, 2, 3, 4, 5];
let text = ' El tercer número del array con los valores';
let palabra2 = 'es:';
console.log(text,
    lista,
    palabra2,
    lista[3]);

let text2 = ' Se añade el número que sigue en el orden final del arreglo y es:'
console.log(text2, lista.push());


let text3 = 'Se encontró el patrón';
let rain = `'lluvia'`;
let text4 = 'en el texto';
let main = `'La lluvia en Sevilla es una maravilla'`;
let text5 = ', por lo que el resultado es:';
let match = main.match(/\blluvia\b/);
if (match) {
    let palabraLluvia = match[0];
    console.log(text3, rain, text4, main, text5, palabraLluvia);
};








