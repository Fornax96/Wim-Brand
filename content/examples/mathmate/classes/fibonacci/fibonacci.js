var a = 0;
var b = 1;

function fibonacci(){
	limit = document.getElementById("limit").value;
	output = 0 + "<br>" + 1 + "<br>";
	while(true){
		c = a + b;
		if(c > limit){
			a = 0;
			b = 1;
			return false
		}
		output = output + c + "<br>";
		document.getElementById("getal").innerHTML = output
		a = b;
		b = c;
	}
}
