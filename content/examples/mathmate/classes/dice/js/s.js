var degrees1 = 0;
var speed1 = 0;
var degrees2 = 0;
var speed2 = 0;
function loop(){
	rotate1();
	rotate2();
	findAnswer();
	setTimeout("loop()", 10);
}
function rotate1(){
	if(degrees1 < 360){
		element1 = document.getElementById("rotate1");
		element1.style.webkitTransform = "rotate("+ degrees1 +"deg)";
		element1.style.MozTransform = "rotate("+ degrees1 +"deg)";
		element1.style.msTransform = "rotate("+ degrees1 +"deg)";
		element1.style.OTransform = "rotate("+ degrees1 +"deg)";
		element1.style.transform = "rotate("+ degrees1 +"deg)";
		degrees1 = degrees1 + speed1;
		if(speed1 > 0.01){
			speed1 = speed1 / 1.008;
		}else{
			speed1 = 0;
			degrees1 = Math.round(degrees1*10)/10;
		}
		//speed1Counter = document.getElementById("speed1Counter");
		//speed1Counter.innerHTML = "Speed of wheel one: " + speed1;
		//degree1Counter = document.getElementById("degree1Counter");
		//degree1Counter.innerHTML = "Rotation of wheel one: " + degrees1 + " degrees.";
	}else{
		degrees1 = 0;
	}
}
function rotate2(){
	if(degrees2 < 360){
		element2 = document.getElementById("rotate2");
		element2.style.webkitTransform = "rotate("+ degrees2 +"deg)";
		element2.style.MozTransform = "rotate("+ degrees2 +"deg)";
		element2.style.msTransform = "rotate("+ degrees2 +"deg)";
		element2.style.OTransform = "rotate("+ degrees2 +"deg)";
		element2.style.transform = "rotate("+ degrees2 +"deg)";
		degrees2 = degrees2 + speed2;
		if(speed2 > 0.01){
			speed2 = speed2 / 1.008;
		}else{
			speed2 = 0;
			degrees2 = Math.round(degrees2*10)/10;
		}
		//speed2Counter = document.getElementById("speed2Counter");
		//speed2Counter.innerHTML = "Speed of wheel two: " + speed2;
		//degree2Counter = document.getElementById("degree2Counter");
		//degree2Counter.innerHTML = "Rotation of wheel two: " + degrees2 + " degrees.";
	}else{
		degrees2 = 0;
	}
}
function randSpeed(){
	speed1 = (Math.random() * 20)+6;	
	speed2 = (Math.random() * 20)+6;
}

function findAnswer(){
	if(degrees1 >= 0 && degrees1 < 60){
		answer1 = 6;
	}
	else if(degrees1 >= 60 && degrees1 < 120){
		answer1 = 5;
	}
	else if(degrees1 >= 120 && degrees1 < 180){
		answer1 = 4;
	}
	else if(degrees1 >= 180 && degrees1 < 240){
		answer1 = 1;
	}
	else if(degrees1 >= 240 && degrees1 < 300){
		answer1 = 2;
	}
	else {
		answer1 = 3;
	}

	if(degrees2 >= 0 && degrees2 < 60){
		answer2 = 6;
	}
	else if(degrees2 >= 60 && degrees2 < 120){
		answer2 = 5;
	}
	else if(degrees2 >= 120 && degrees2 < 180){
		answer2 = 4;
	}
	else if(degrees2 >= 180 && degrees2 < 240){
		answer2 = 1;
	}
	else if(degrees2 >= 240 && degrees2 < 300){
		answer2 = 2;
	}
	else {
		answer2 = 3;
	}

	answer = answer1 + answer2;
	ansSpan = document.getElementById("answer");
	ansSpan.innerHTML = answer;
}
