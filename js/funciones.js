let comentarios = "";
let cantidad = suma = puntuacion = 0;
let usuario = "";

const logout = () => {
    alert("Gracias por tu visita " + usuario + ", ojala vuelvas pronto.");
    usuario = "";
}
const comentario = (usuario, texto) => {
    alert(comentarios = "El usuario: " + usuario + ", comento " + texto + "\n" + comentarios);
}
const calificacion = (punto) => {
    cantidad++;
    suma = suma + punto;
    puntuacion = (suma/cantidad);
    alert(puntuacion);
}
const login = () => {
    usuario = prompt("Por favor ingrese su nombre para iniciar y asi poder realizar algun comentario y puntuar alguna receta o producto");
    while(usuario == "" || usuario.length <= 2){
        usuario = prompt("Por favor ingrese su nombre para iniciar y asi poder realizar algun comentario y puntuar alguna receta o producto");
    }
    let op = parseInt(prompt("Bienvenido " + usuario +"\nElija una opcion\n 1- Cerrar Sesión\n 2- Comentar\n 3- Calificar\nCualquier tecla para salir."));
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
let op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Ver Productos \n 3- Ver Recetas\nCualquier otra tecla para salir."));
while(op >=1 && op <= 3){
    switch (op) {
        case 1:
            login();
            op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Ver Productos \n 3- Ver Recetas"));
            break;
        case 2:
            alert("Producto 1\nProducto 2\nProducto 3\nProducto 4\nProducto 5\n");
            op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Ver Productos \n 3- Ver Recetas"));
            break;
        case 3:
            alert("Receta 1\nReceta 2\nReceta 3\nReceta 4\nReceta 5");
            op = parseInt(prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Ver Productos \n 3- Ver Recetas"));
            break;
        default:
            op = prompt("por favor elija una opcion \n 1- Iniciar Sesión \n 2- Ver Productos \n 3- Ver Recetas");
            break;
    }
}