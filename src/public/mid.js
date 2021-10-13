'use strict'

// Def var

function tokengen(){
	var gent =  Math.random().toString(36).substr(2);
	var today = new Date();
	var datet = today.getDate()+ ' - ' + (today.getMonth() + 1) + '-' + today.getFullYear();
	var hora = today.getHours() + '-' + today.getMinutes() + ':' + today.getSeconds();
	var fechayhora = datet + ' ' + hora;

	var username = prompt("Enter name ");
	var typedata = prompt("Enter your page link");
	var mdocp = prompt("Enter your code");

	if (username == "" | typedata=="" | mdocp == ""){
		alert("Error, no data");
		return
	}else{
			document.getElementById('token').innerHTML="Token de seguridad >>>>>>>> " + gent;
			document.getElementById('namedata').innerHTML="Data generate for: >>>>>   " + username;
			document.getElementById('mdo').innerHTML="Website host >>>>>> " + typedata;
			document.getElementById('metaxp').innerHTML="Navigator name >>>>>>> " + "wind";
			document.getElementById('timevalidate').innerHTML='Time validation: 5 minutes';
			document.getElementById('generate-on').innerHTML= fechayhora;	
	}


};


function generate(){
	console.log('run command generate');

	

	tokengen()


}