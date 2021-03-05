const personaje = {
    nombre: 'Pepe',
    apellido: 'Argento',
    profesion: 'Zapatero',
    getDescripcion() {
        return `${nombre} ${apellido} es ${profesion}`
    }
}

/*const nombre = personaje.nombre;
const apellido = personaje.apellido;
const profesion = personaje.profesion;*/

// const {nombre, apellido, profesion} = personaje;
// console.log(nombre, apellido, profesion);


//const {nombre, apellido, profesion, edad = 50} = personaje;

/*const imprimirPersonaje = (personaje) => {
    console.log(personaje.nombre, personaje.apellido, personaje.profesion, personaje.edad = 50);
}

imprimirPersonaje(personaje);
*/

/*const imprimirPersonaje = (nombre, apellido, profesion, edad = 50) => {
    console.log(nombre, apellido, profesion, edad);
}
imprimirPersonaje(personaje); */

const personajes = ['Pepe', 'Moni', 'Koki'];
/*
const p1 = personajes[0];
const p2 = personajes[1];
const p3 = personajes[2];
console.log(p1, p2, p3); */

const[p1,p2, p3] = personajes;

//console.log(p1, p2, p3);
console.log(p3);



console.log(nombre, apellido, profesion, edad);