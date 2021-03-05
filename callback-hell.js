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


  const id = 5;

  getEmpleadoById(id, (error, empleado)  => {     //en general se pone un sola letra
    if(error) {
        console.log('ERROR!!!!! ....');
        console.log(error);
            return;
    }
  console.log(`El empleado: ${empleado.nombre}....`);
  });