function printList( list ) {
	var listHTML = '<ol>';
	for (var i = 0; i < list.length; i ++ ) {
		/*istHTML += '<li>' + list[i] + '</li>';*/
	}
	listHTML += '</ol>';
	print(listHTML);
}


function imprimir(mensaje){
	document.write("<h1> La lista General de Estudiantes es: </h1>" + mensaje);
}


var productos = ["Glenda Bohorquez" , "Genero: Femenino" , "32 Años" , "Datos: " , "Ciudad: Playas" , " Lenguaje favorito: Español" , "Esta trabajando: Si" ,
                 "Fabian Sepulveda" , "Genero: Masculino" , "28 Años" , "Datos: " , "Ciudad: Bogota" , " Lenguaje favorito: Español" , "Esta trabajando: Si" ,
                 "Jose Toledo" , "Genero: Masculino" , "30 Años" , "Datos: " , "Ciudad: Guayas" , " Lenguaje favorito: Español" , "Esta trabajando: No" ,
                 "Lorena Macias" , "Genero: Femenino" , "25 Años" , "Datos: " , "Ciudad: Manabi" , " Lenguaje favorito: Español" , "Esta trabajando: No" ,
                 "Cristina Merino" , "Genero: Femenino" , "35 Años" , "Datos: " , "Ciudad: EL Oro" , " Lenguaje favorito: Español" , "Esta trabajando: Si" ];


while (true)
{
	busqueda = prompt("Si desea salir presion s, si desea ver la lista presiona l, si dsea buscar un estudiante, ingrese el nombre y apellido:");

	if(busqueda == "Salir" || busqueda=="Final" || busqueda=="Adios" || busqueda=="No molestes mas" || busqueda=="s")
	{
		alert("Gracias por visitarnos. Que tenga un buen día");
		break; }
		
		else if(busqueda == "l")
		{
		imprimir(productos);}
		else {
			if (productos.indexOf(busqueda) >=0)

			{
				alert("Estimado Usuario el estudiante " + busqueda + " si esta registrado en nuestra Base de Datos");}
				else{
					alert("Lo sentimos el estudiante " + busqueda + " no esta registrado");
				}
			
		}

	

}