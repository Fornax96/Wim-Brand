var output = "";
var number = 0;
function prime(){
	number = document.getElementById("input").value;
	if(number < 2){return false} //If we don't do this the webpage will crash with an empty field
	primes = new Array(3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311);
	selectedPrime = 2;
	output = "";
	original = number;
	while(number != 1){
		if(number % selectedPrime == 0){
			number = number / selectedPrime;
			output = output + selectedPrime + " * ";
		}else{
			selectedPrime = primes.shift();
			if(typeof primes[0] == "undefined"){
				output = output + number + " * ";
				number = 1;
			}
		}
		//alert(number);
	}
	output = output.slice(0, -2);
	output = output + "= " + original;
	document.getElementById("output").innerHTML = (output);
}
