function validateForm(){
		
	function validarNom (){
		
		var nombre = document.getElementById('name').value;
		var larg = nombre.length;
		
		if (nombre === null || nombre.length===0){ //El campo no puede quedar vacío
			//alert ('Ingrese nombre');
			var contenedor = document.getElementsByClassName('name-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('ingrese nombre, el campo no puede quedar vacío');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
			return false;
		}else if (/[0-9]/.test(nombre)){ // No permite números
			var contenedor = document.getElementsByClassName('name-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Este campo no debe tener números');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
			//alert ('Este campo no debe tener números');
			return false;
		}else if (nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){ //La primera letra debe ser con mayúscula
			var contenedor = document.getElementsByClassName('name-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('La primera letra debe ser con mayúscula');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
			//alert ('La primera letra debe ser con mayúscula');
			return false;
		}else if (nombre.substring(1,larg).toUpperCase() == nombre.substring(1,larg)){ //No acepta que todas sean mayúsculas
			var contenedor = document.getElementsByClassName('name-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Sólo la primera letra debe ser con mayúscula. Ej: José');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
			//alert ('Ingrese con minúscula Ej: José');
			return false;
		
		}else{
			//alert ('Perfeh');
			return true;
		}
		
	} 
	validarNom();

	function validarApel (){
		var apellido = document.getElementById('lastname').value;
		var largo = apellido.length;
		if (apellido === null || apellido.length===0){ //El campo debe no debe estar vacío
			var contenedor = document.getElementsByClassName('lastname-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Ingrese apellido, el campo no puede quedar vacío');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
			//alert ('Ingrese apellido');
			return false;
		}else if (/[0-9]/.test(apellido)){ //No acepta números
			var contenedor = document.getElementsByClassName('lastname-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Este campo no debe tener números');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
			//alert ('Este campo no debe tener números');
			return false;
		}else if (apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()){ //La primera letra debe ser mayúscula
			var contenedor = document.getElementsByClassName('lastname-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('La primera letra debe ser con mayúscula');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
			//alert ('La primera letra debe ser con mayúscula');
			return false;
		}else if (apellido.substring(1,largo).toUpperCase() == apellido.substring(1,largo)){ //No permite que todas sean mayúsculas
			var contenedor = document.getElementsByClassName('lastname-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Sólo la primera letra debe ser con mayúscula. Ej: González');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
			//alert ('Ingrese con minúscula Ej: Carrera');
			return false;
		}else{
			//alert ('Perfeh');
			return true;
		}
		
	} 
	validarApel();

	function validarCorreo(){
		var correo = document.getElementById('input-email').value;
		var caracteres = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
		if (correo === null || correo.length===0){ // El campo no debe estar vacío.
			//alert ('Ingrese correo');
			var contenedor = document.getElementsByClassName('email-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Ingrese correo, este campo no puede quedar vacío');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
			return false;
		}else if (caracteres.test(correo)){ // Verifica el que contenga @ y .com ó .cl
			return true;
		}else{
			//alert('Ingrese su email válido');
			var contenedor = document.getElementsByClassName('email-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Ingrese email válido');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
			return false;
		}
	}
	validarCorreo();

	function validarContrasena(){
		var contrasena = document.getElementById('input-password').value;
		if (contrasena === null || contrasena.length===0){ // El campo no debe estar vacío
			//alert ('Ingrese contraseña');
			var contenedor = document.getElementsByClassName('form-group')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Ingrese contraseña, este campo no puede quedar vacío');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
			return false;
	    }else if (contrasena.length <  6){ // Verifica que lo ingresado tenga más de 6 caracteres
		    //alert ('Ingrese contraseña de mínimo 6 caracteres');
		    var contenedor = document.getElementsByClassName('form-group')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Ingrese contraseña de mínimo 6 caracteres');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
		    return false;
	    }else if (contrasena === "123456"  || contrasena === "password" || contrasena === "098754"){ // Comprueba que la contraseña ingresada sea distinta de "123456","password" y "098754".
	    	//alert ('Ingrese contraseña válida');
	    	var contenedor = document.getElementsByClassName('form-group')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Ingrese contraseña válida');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
	    	return false;
	    }else{
	    	//alert ('Bieen');
	    	return true;

	    }
	}
	    validarContrasena();

	function validarLista(){
		var lista = document.getElementsByTagName('select')[0].selectedIndex;
		
		if( lista == null || lista == 0 ) { // El campo no debe estar vacío.
			//alert ('Selecione un elemento de la lista')
			var contenedor = document.getElementsByClassName('form-group')[1];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Seleccione un elemento de la lista');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);
 		  return false;
		}else{
			return true;
		}
	}
	validarLista();
}