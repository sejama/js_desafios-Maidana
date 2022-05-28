let edad = parseInt(prompt("Ingrese su edad"));
if(edad < 18){
    console.log("Ud es menor de edad, pero puede acceder igual a la página");
    alert("Ud es menor de edad, pero puede acceder igual a la página");
}else{
    console.log("Ud es mayor de edad, pero puede acceder igual a la página");
    alert("Ud es mayor de edad, pero puede acceder igual a la página");
}

for (let i = 1; i <= 10; i++) {
    console.log("Tabla del " + i);
    for (let j = 1; j <= 10; j++) {
        console.log(i +" x " + j + " = " + i*j);        
    }
}

let leer = parseInt(prompt("Ingrese el numero de la tabla que desea consultar"));

while (leer <= 0 || isNaN(leer)){
    alert("Por favor ingrese un número y que sea mayor a cero ");
    leer = prompt("Ingrese el numero de la tabla que desea consultar");
}
console.log("Tabla del " + leer);
for (let i = 1; i <= 10; i++) {
    console.log(leer + " x " + i + " = " + leer*i); 
}

let op = prompt("Ingrese el operador que desea utilizar \n/ para Dividir.\n * para Multiplicar\n - para Restar\n + para Sumar\n Cualquier tecla para salir");
while (op === "/" || op === "*" || op === "-" || op === "+" ) {
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    switch (op) {
        case "/":
            console.log(num1/num2)
            break;
        case "*":
            console.log(num1*num2)            
            break;
        case "-":
            console.log(num1-num2)
            break;
        case "+":
            console.log(num1+num2)
            break;
        default:
            break;
    }
    op = prompt("Ingrese el operador que desea utilizar \n/ para Dividir.\n * para Multiplicar\n - para Restar\n + para Sumar\n Cualquier tecla para salir");
}
