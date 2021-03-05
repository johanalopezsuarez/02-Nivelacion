/*setTimeout(): funcion de javascrit que va a ejecutar una funcion callback despues de un determinado tiempo.
 setTimeout(function Callback, tiempo en que se ejecutara);    */ 
//Callbacks: 

/* setTimeout(() => {   //se ejecutara despus de 2 seg
    console.log('Hola Mundo');

} ,2000);  */

/*const saludar = () => {
    console.log('Hola Mundo');
}

setTimeout(saludar, 2000);  */

/* const getUsuarioById = (id) => {
    const user = {
        id,
        nombre: 'Johana'
    }

    setTimeout(() => {
        console.log(user.nombre);
    },1000);
}

getUsuarioById(10);   */




/*const getUsuarioById = (id) => {
    const user = {
        id,
        nombre: 'Johana'
    }

    setTimeout(() => {
        return user;
    },1000);
}

const usuario = getUsuarioById(10);
console.log(usuario);  //Undefined (Porque retorna algo que no existe, la funcion devuelve despues de 1 seg)
*/


//Callbacks
const getUsuarioById = (id, Callback) => {
    const user = {
        id,
        nombre: 'Johana'
    }

    setTimeout(() => {
        Callback(user);
    },1000);
}

/*const usuario = getUsuarioById(10, (usuario) => {  //asincronico
    console.log(usuario.nombre);
});  */

//o

/*const imprimirUsuario = (usuario) => {
    console.log(usuario.nombre);
}

getUsuarioById(10, imprimirUsuario);  */

getUsuarioById(10, ({nombre, id}) => {
    console.log(`nombre: ${nombre.toUpperCase()} + Id: ${id}`);
});