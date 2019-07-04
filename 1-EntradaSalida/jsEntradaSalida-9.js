/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var Sueldo ;
    var Resultado ;
    var SueldoConAumento ;

    Sueldo = parseFloat( document.getElementById("sueldo").value ) ;
    
    Resultado = Sueldo * 10 / 100 ;

    SueldoConAumento = Sueldo + Resultado ;
    

    document.getElementById("resultado").value = SueldoConAumento ;



	
}
