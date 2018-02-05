const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');
 
const app = express();
 

 

  

app.get('/',function(req,res){

		res.sendfile("index.html");
	
    
});
 
server.listen(9090, function listening() {
  console.log('Listening on %d', server.address().port);
});