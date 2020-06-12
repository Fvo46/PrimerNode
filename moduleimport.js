/* const os = require ("os");

console.log(os.platform());
console.log(os.release());
console.log("free mem:", os.freemem(), "bytes");
*/

/* codigo asincrono = mientras espera terminar la
ejecucion, continua ejecutando abajo, mientras el os
le avisa que termina 
tambien llamado codigo no bloqueante*/

/* const fs = require("fs");

fs.writeFile("./Texto.txt", "Linea 1", function (err) {
    if (err) {
        console.log(err);    }
    console.log("Archivo creado");
 })

console.log("ultimo escrito") */

/* gracias a esto banca muchos usuarios juntos, porque
continua mientras espera respuestas, y delega 
para ello es clave la function al final
*/
const fs = require("fs");

fs.readFile("./Texto.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
})

//ambos metodos validos para lo mismo

fs.readFile("./Texto.txt", function(err, data) {
    if (err) {console.log(err)};
    console.log(data.toString())
})