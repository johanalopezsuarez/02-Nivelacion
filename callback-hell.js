const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Marta'
    },
    {
        id: 3,
        nombre: 'Manuel'
    }
]

const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    },
]

/* funcion que recibe como parametro un callback y devuelve el
  empleado del id que recibe por parametro*/

  const getEmpleadoById = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id);

    if(empleado) {
        callback(null, empleado);
        return;
    }
    callback(new Error('El empleado no existe'));
}


//funcion que devuelve le sueldo de un empleado por id
const getEmpleadoBySueldo = (id, callback) => {
    const sueldo = sueldos.find((s) => s.id === id);

    if(sueldo) {
        callback(null, sueldo);
        return;
    }
    callback(`El sueldo con id ${id} no existe`);
}

  const id = 2;

  getEmpleadoById(id, (error, empleado)  => {   //en general se pone un sola letra
    if(error) {
        console.log('ERROR!!!!! ....');
        console.log(error);
            return;
    }
  //console.log(`El empleado: ${empleado.nombre}....`);
  //});

  getEmpleadoBySueldo(id, (error, s) => {
 
    if(error) {
        console.log('ERRROR!!!! ...');
        console.log(error);
        return;
    }
   console.log(`El empleado: ${empleado.nombre} tiene un sueldo de: ${s.sueldo}`);
    });
});
