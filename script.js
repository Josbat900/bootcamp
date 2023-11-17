/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cómo te llamas? ', (answer) => {
  console.log(`Hola , ${answer}!`);
  rl.close();
});
*/


const fs = require("fs") 

const http = require('http');

const PORT = 3000;
// request
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const nombre = req.url.split("?")[1]
    const edad = req.url.split("?")[2]
    const crearArchivo = req.url.split("?")[3]
    console.log(nombre)
    console.log(edad)

    if(edad>18){
      res.end(`hola ${nombre}, eres mayor de edad y tienes ${edad}.`)
      
    }else
    res.end(`${nombre } aun tienes ${edad}, lastimosamente no puedes acceder\n`);
    
    
    if(crearArchivo == "si"){
      fs.writeFile(`${nombre}.txt`, `${edad} tu edad es ${edad}`,()=>{
        
        console.log("funciona")
      })
      
    }

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});