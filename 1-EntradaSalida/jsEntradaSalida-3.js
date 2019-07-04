/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre;
    
            //Busco el valor del elemento llamado "elNombre" en el documento HTML y se lo asigno a la variable nombre
    nombre= document.getElementById("elNombre").value;

            //muestro la variable por alert
    alert(nombre)

}


