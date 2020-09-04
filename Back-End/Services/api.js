const http = require ('http');
const port = process.env.PORT || 3000;
const {calcas, blusas, chapeus} = require ('./data.json');

const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

    //Adicionando os endpoints

    const url = req.url;
    console.log(url);
    if (url === "/home"){
        //Mostrando o JSON
        res.write("<h1>Bem vindo à página principal</h1>")
        res.end();
    } else if (url === "/calcas"){
        //Mostrando o JSON
         res.write(JSON.stringify(calcas), "utf-8")
        res.end();
    }else if (url === "/blusas"){
        //Mostrando o JSON
        res.write(JSON.stringify(blusas), "utf-8")
        res.end();
    }else if (url === "/chapeus"){
        //Mostrando o JSON
        res.write(JSON.stringify(chapeus), "utf-8")
        res.end();
    }
});

server.listen(port, ()=>{
    console.log(`Server se iniciou utilizando a porta ${port}...`);
});