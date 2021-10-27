function Operacion() {
			// declarar las variables
			var p1,g1,g2,p2;
			//recuperar los valores
			p1=parseFloat(document.getElementById("Pes").value);
			g1=parseFloat(document.getElementById("Gravedadp").value);
			g2=parseFloat(document.getElementById("Gravedadt").value);
			
			//realizar la operacion 
			p2=(p1*g1)/g2;
			//Mostrar el resultado
			document.getElementById("Pesf").value=p2;
		}
		function Borrar(){
			document.getElementById("Pes").value="";
			document.getElementById("Gravedadp").value="";
			document.getElementById("Gravedadt").value="";
			document.getElementById("Pesf").value=" ";
}