/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var NumUno ;
    var NumDos ;
    var Resultado ;

    NumUno = document.getElementById("numeroUno").value  ;
    NumDos = document.getElementById("numeroDos").value  ;
 
    NumUno = parseInt(NumUno) ;
    NumDos = parseInt(NumDos) ;

    Resultado = NumUno + NumDos ;   

    alert("La suma es " + Resultado) ;

}

function restar()
{
	var NumUno ;
    var NumDos ;
    var Resultado ;

    NumUno = document.getElementById("numeroUno").value  ;
    NumDos = document.getElementById("numeroDos").value  ;
 
    NumUno = parseInt(NumUno) ;
    NumDos = parseInt(NumDos) ;

    Resultado = NumUno - NumDos ;   

    alert("La resta es " + Resultado) ;
}

function multiplicar()
{ 
	var NumUno ;
    var NumDos ;
    var Resultado ;

    NumUno = document.getElementById("numeroUno").value  ;
    NumDos = document.getElementById("numeroDos").value  ;
 
    NumUno = parseInt(NumUno) ;
    NumDos = parseInt(NumDos) ;

    Resultado = NumUno * NumDos ;   

    alert("La multiplicacion es " + Resultado) ;
}

function dividir()
{
	var NumUno ;
    var NumDos ;
    var Resultado ;

    NumUno = document.getElementById("numeroUno").value  ;
    NumDos = document.getElementById("numeroDos").value  ;
 
    NumUno = parseInt(NumUno) ;
    NumDos = parseInt(NumDos) ;

    Resultado = NumUno / NumDos ;   

    alert("La division es " + Resultado) ;
}

