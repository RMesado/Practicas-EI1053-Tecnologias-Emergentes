'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http');

/**************/
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
/***************/

//var app = require('connect')();
var app = express()
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = 9000;

/*******  EXTENSIONES NO SWAGGER ********/
const sse  = require('./utils/notifications')

//Ponemos en marcha el listener de eventos
sse.start()

app.use(cors())

//Contenido estático
app.use('/web',  express.static('public'))

//Registramos el stream de eventos
app.use('/news', sse.eventStream)

//Pasamos el listener de eventos por el objeto req a los controladores
app.use((req, res, next) => {req.sse = sse.emitter; next()})

/***************************************/

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });

  const mng = require('mongoose');
  const my_conn = "mongodb+srv://rafa:rafa1234@cluster0.lcw24.mongodb.net/EI1053?retryWrites=true&w=majority";
  mng.connect(my_conn_data);




});
