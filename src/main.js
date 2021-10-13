'use strict'

// Var definitions

var namebrow = '';
var defbrow = '';
var identi =  '';
var tokenuser = '';
//var token = require('./data/token.js');
/* 
#####   #####                       
#     # #     #   ##   ###### ###### 
#     # #        #  #  #      #      
#     #  #####  #    # #####  #####  
#   # #       # ###### #      #      
#    #  #     # #    # #      #      
 #### #  #####  #    # #      ###### 
 */

// Test server running, this option is not require
/*
	The system not require this function or anyone arguments, don't use.}




*/
const express = require('express');
const server = express();
const port = 9292;
const host = '127.0.0.1';


server.use(express.static('public'));
server.listen(port,()=>{
	console.log('Server running in port' + port);
});
