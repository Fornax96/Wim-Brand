function validate(){
	bsn = document.getElementById("bsn").value;
	
	if(bsn.length == 9){
		x = 9;
		nr = 0;
		som = 0;
		while(nr < 9){
			if(x > 1){
				som = som + (bsn.charAt(nr) * x);
			}else{
				som = som + (bsn.charAt(nr) * -1)
			}
			x--;
			nr++;
		}
		
		if(som % 11 == 0){
			document.getElementById("valid").innerHTML = som + " % 11 = 0<br>Geldig";
		}else{
			document.getElementById("valid").innerHTML = som + " % 11 != 0<br>Ongeldig";
		}
	}else{
		alert("Nummer te kort, moet negen cijfers lang zijn.\nAls je nummer 8 lang cijfers is, zet er dan een 0 voor.");
	}
}
