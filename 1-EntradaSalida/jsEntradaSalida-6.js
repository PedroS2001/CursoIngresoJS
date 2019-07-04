/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
        //creo variables para 
var NumeroUno ;
var NumeroDos ;
var Suma ;

NumUno = document.getElementById("numeroUno").value ;
NumDos = document.getElementById("numeroDos").value ;

NumDos = parseInt(NumDos) ;
NumUno = parseInt(NumUno) ;

Suma = NumUno + NumDos ;

alert("la suma es " + Suma    ) ;


}

