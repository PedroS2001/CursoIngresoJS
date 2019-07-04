/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
            //Creo variables
	var nombre;
    var edad;

            //Asigno a las variables los resultados que complete el usuario en los campos de texto en el HTML
    nombre = document.getElementById("elNombre").value ;
    edad = document.getElementById("laEdad").value;

            //muestro el resultado por alert se agrega + como conector entre string y variables 
    alert ("Usted se llama " + nombre + " y tiene " + edad + " años" ) ;

}

