let usuario = {
    nombre: 'Aitana',
    edad: 25
}

.then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('Error en la peticion API POST');
    console.log(error);
});