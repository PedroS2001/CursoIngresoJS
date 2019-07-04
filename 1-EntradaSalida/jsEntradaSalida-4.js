/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{

	var nombre;

			//pido el nombre por prompt y lo coloco en la variable nombre
	nombre = prompt("Ingrese su nombre");

			//Coloco la variale nombre en el cuadro de texto llamado "elNombre"
	document.getElementById("elNombre").value = nombre ;

}

