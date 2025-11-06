// Ejercicio 3

for (let i = 1; i <= 10; i++) {
    let niño_con_dulce = prompt("El niño tiene dulce? si / no");

    if (niño_con_dulce == "si") {
        console.log("Dulce entregado");
    } else {
        console.log("No se entrega dulce");
        continue;
    }
}