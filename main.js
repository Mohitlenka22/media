const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3211;
const home = fs.readFileSync('./ind.html')
const About = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/home'){

        res.end(home);
    }
  else if(url == '/About'){

        res.end(About);
    }
   else if(url == '/contact'){

        res.end(contact);
    }
   else if(url == '/services'){

        res.end(services);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 NOT FOUND</h1>");

    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
