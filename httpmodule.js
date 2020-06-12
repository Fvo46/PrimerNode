const http = require ("http");

const colors = require("colors");

const handleServer = function (req, res) {
    res.writeHead(200, {"content-type": "text/plain"})
    res.write("Solo texto");
    res.end();
}

const server = http.createServer (handleServer);

server.listen(3000, function () {
    console.log("server on port 3000".yellow);
});

/*  
- no se utiliza nodeJs con javascript puro sino con
frameworks, aqui aparecen los NPN (node package manager)
administrador paquetes NODE
npmjs.com es el repositorio mas grande de internet
- normalmente se crea lista de todos los modulos que
se usaran, con el comnado npm init en la consola
este gaurda todos los package bajados, y los linkea 
juntos a traves de un archivo json, para que sea mas facil
requerirlos
*/
