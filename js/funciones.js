let comentarios = [];
let cantidad = suma = puntuacion = 0;
let usuarios = [];
let usuarioLog = "";
const producotos = [];
const recetas = [];
class Usuario{
    constructor(nombre, apellido, usuario, fechaDia, fechaMes, fechaYear){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.fechaDia = fechaDia;
        this.fechaMes = fechaMes;
        this.fechaYear = fechaYear;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    setApellido(apellido){
        this.apellido = apellido;
    }
    setUsuario(usuario){
        this.usuario = usuario;
    }
    setDia(dia){
        this.fechaDia = dia;
    }
    setMes(mes){
        this.fechaMes = mes;
    }
    setYear(year){
        this.fechaYear = year;
    }
    getNombre(){
        return this.nombre;
    }
    getApallido(){
        return this.apallido;
    }
    getUsuario(){
        return this.usuario;
    }
    getDia(){
        return this.fechaDia;
    }
    getMes(){
        return this.fechaMes;
    }
    getYear(){
        return this.fechaYear;
    }

}


const logout = () => {
    alert("Gracias por tu visita " + usuarioLog + ", ojala vuelvas pronto.");
    usuarioLog = "";
}
/*
const comentario = (usuario, texto) => {
    alert(comentarios = "El usuario: " + usuario + ", comento " + texto + "\n" + comentarios);
}
const calificacion = (punto) => {
    cantidad++;
    suma = suma + punto;
    puntuacion = (suma/cantidad);
    alert(puntuacion);
}*/
const registrar = () => {
    let nombre = prompt("Por favor ingrese su nombre: ");
    while(nombre == "" || nombre == " "){nombre = prompt("Por favor ingrese su nombre: ");}
    let apellido = prompt("Por favor ingrese su apallido: ");
    while(apellido == "" || apellido == " "){apellido = prompt("Por favor ingrese su apellido");}    
    let usuario = prompt("Por favor ingrese su usuario: ");
    while(usuario == "" || usuario == " "){usuario = prompt("Por favor ingrese su usuario: ");}
    //let fechaDia = parseInt(prompt("Por favor ingrese su día de nacimimiento: "));
    //let fechaMes = parseInt(prompt("Por favor ingrese su mes de nacimimiento: "));
    //let fechaYear = parseInt(prompt("Por favor ingrese su año de nacimimiento: "));
    if(usuarios.length == 0){ 
        const user = new Usuario(nombre, apellido, usuario, 1, 1, 2000);
        usuarios.push(user);
    }else{
        for (let index = 0; index < usuarios.length; index++) {
            while(usuarios[index].nombre === nombre && usuarios[index].apellido === apellido){
                alert("Nombre y apellido ya existente, por favor ingrese su nombre y apellido correcto");
                nombre = prompt("Por favor ingrese su nombre: ");
                apellido = prompt("Por favor ingrese su apallido: ");
            }
            while(usuarios[index].usuario === usuario) {
                alert("Usuario existente!");
                usuario = prompt("Por favor ingrese su usuario: ");
            }
        }    
        const user = new Usuario(nombre, apellido, usuario, 1, 1, 1990);
        usuarios.push(user); 
    }
    console.log(usuarios);   
}

const login = () => {
    if(usuarios.length == 0) {
        alert("No existen usaurios registrados, por favor registrese!");
        return;
    }
    let us = prompt("Por favor ingrese su usuario para iniciar");
    for (let index = 0; index < usuarios.length; index++){
        while(usuarios[index].usuario == us) {
            alert("El usuario no existe!");
            us = prompt("Por favor ingrese su usuario: ");
        }
        usuarioLog = us
    }
    let op = parseInt(prompt("Bienvenido " + usuarioLog +"\nElija una opcion\n 1- Cerrar Sesión\n 2- Comentar\n 3- Calificar\nCualquier tecla para salir."));
    while(op >=1 && op <= 3){
        switch (op) {
            case 1:
                logout();
                op = 4;
                break;
            case 2:
                comentario(usuario,prompt("Ingrese su comentario"));
                op = parseInt(prompt("Bienvenido " + usuario +"\nElija una opcion\n 1- Cerrar Sesión\n 2- Comentar\n 3- Calificar"));
                break;
            case 3:
                let p = parseInt(prompt("Ingrese su puntuacion"));
                while(isNaN(p)){
                    p = parseInt(prompt("Ingrese su puntuacion"));
                }
                calificacion(p);
                op = parseInt(prompt("Bienvenido " + usuario +"\nElija una opcion\n 1- Cerrar Sesión\n 2- Comentar\n 3- Calificar"));
                break;
        }
    }
}
let op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Registrar \n 3- Ver Productos \n 4- Ver Recetas\nCualquier otra tecla para salir."));
while(op >=1 && op <= 4){
    switch (op) {
        case 1:
            login();
            op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Registrar \n 3- Ver Productos \n 4- Ver Recetas\nCualquier otra tecla para salir."));
            break;
        case 2:
            registrar();
            op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Registrar \n 3- Ver Productos \n 4- Ver Recetas\nCualquier otra tecla para salir."));
            break;
        case 3:
            alert("Producto 1\nProducto 2\nProducto 3\nProducto 4\nProducto 5");
            op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Registrar \n 3- Ver Productos \n 4- Ver Recetas\nCualquier otra tecla para salir."));
            break;
        case 4:
            alert("Receta 1\nReceta 2\nReceta 3\nReceta 4\nReceta 5");
            op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Registrar \n 3- Ver Productos \n 4- Ver Recetas\nCualquier otra tecla para salir."));
            break;
        default:
            op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Registrar \n 3- Ver Productos \n 4- Ver Recetas\nCualquier otra tecla para salir."));
            break;
    }
}