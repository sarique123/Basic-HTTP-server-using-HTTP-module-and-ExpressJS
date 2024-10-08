const http = require('http');   // require the http module


const PORT = 3000;

// Using the createServer function we can actually create a basic http server using http module.
// This function returns a server object, and takes a callback as an argument.
// This function created a server object but didn't start the server.
const server = http.createServer(function listener(request,response){

    // request --> we will be able to see details of incoming http request --> object
    // response --> we will be able to configure what response we need to send for an incoming http request --> object


    // this callback is a kind of listener function that is going to collect 
    // every http request that we will make to our server.

    // todo..
    // console.log("Incoming request Details : ",request);
    // console.log("Response object details : ",response);

    if(request.url == '/home'){
        console.log(request.method);
        
        response.write("first response");
        response.write("second completed");
        response.end("Completed");
        //response.end("Welcome to home");


        // how can we send a HTML code or json from this setup ?
    } 
    
    
    console.log("Request received");
    
}); 

server.listen(PORT, function exec(){
    // Once we successfully boot up the server on the given port , this callback will be executed.

    console.log(`Server is Up and running on PORT : ${PORT}`);
})