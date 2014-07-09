function tafel(){
	input1 = document.getElementById("tafelInput").value;
	input2 = document.getElementById("tafelInput2").value;
	output = "";
	
	for(i = 1; i <= input2; i++){
		ans = i * input1;
		ans = (Math.round(ans * 1000)) / 1000;
		output = output + i + " * " + input1 + " = " + ans + "<br>";
	}
	document.getElementById("tafelOut").innerHTML = output;
}

function machten(){
	input = document.getElementById("machtenInput").value;
	output = "";
	
	for(i = 0; i < 16; i++){
		ans = Math.pow(input, i);
		ans = (Math.round(ans * 1000)) / 1000;
		output = output + input + "<sup>" + i + "</sup> = " + ans + "<br>";
	}
	document.getElementById("machtenOut").innerHTML = output;
}
function breuken(){
	input = document.getElementById("breukenInput").value;
	output = "";
	
	for(i = 1; i <= input; i++){
		ans = i / input;
		ans = (Math.round(ans * 1000)) / 1000;
		output = output + i + " / " + input + " = " + ans + "<br>";
	}
	document.getElementById("breukenOut").innerHTML = output;
}
function kwadraten(){
	input = document.getElementById("kwadratenInput").value;
	output = "";
	
	for(i = 1; i <= input; i++){
		ans = Math.pow(i, 2);
		ans = (Math.round(ans * 1000)) / 1000;
		output = output + i + "<sup>2</sup> = " + ans + "<br>";
	}
	document.getElementById("kwadratenOut").innerHTML = output;
}
