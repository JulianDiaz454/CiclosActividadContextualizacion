// Ejercicio 2

let bandera = false;

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`Multiplica 5 x ${j}`);

        let resultado = prompt("Ingrese el resultado: ")
        
        if ((5 * j) == resultado) {
            console.log("Resultado correcto");
        } else {
            console.log("Resultado incorrecto");
            bandera = true;
            break;
        }
    }
    if (bandera) {
        break;
    }
}