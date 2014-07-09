var xspeed = new Array();
var yspeed = new Array();
var xpos = new Array();
var ypos = new Array();
var flesh = new Array();
var piggyPos = 500;
var cannonAngle = 0;
var cannonHeight = 185;
var force = 30;
var t = 0.0;
var combo = 0;
xspeed[0] = 0;
yspeed[0] = 0;
xpos[0] = 0;
ypos[0] = 0;
function start(){
	xspeed[0] = force * Math.cos((cannonAngle / 180) * Math.PI); //Calculations to aim the cannon
	yspeed[0] = force * Math.sin((cannonAngle / 180) * Math.PI);
	xpos[0] = 130; // Start position of the ball
	ypos[0] = 180;
	document.getElementById("startButton").value = "Please stand by.";
	document.getElementById("startButton").disabled = true;
	completed = false;
	ball = document.getElementById("ball");
	ball.style.visibility = "visible"; //Make the ball visible
	moveball(); //Call the loop
}
function resetButton(){
	document.getElementById("startButton").disabled = false;
	t = 0.0;
	ball = document.getElementById("ball");
	ball.style.top = (Math.round(ypos[0]));
	ball.style.left = (Math.round(xpos[0]));
	ball.style.visibility = "hidden";
	document.getElementById("startButton").value = "Shoot";
	piggyPos = (Math.random()*400)+360;
	piggy = document.getElementById("piggy");
	piggy.style.left = piggyPos;
	cannonHeight = (Math.random()*300)+50;
	cannon = document.getElementById("cannon");
	cannon.style.top = cannonHeight;
	document.getElementById("mountain").style.height = 450 - cannonHeight;
	decayGore();
}

function aimCannon(dir){
	cannon = document.getElementById("cannon");
	if(dir == "down" && cannonAngle > -10){  //Move the cannon down
		cannonAngle = cannonAngle - 4;
	}
	if(dir == "up" && cannonAngle < 80){ //Move the cannon up
		cannonAngle = cannonAngle + 4;
	}
	if(dir == "fUp" && force < 100){ //Move the force up
		force = force + 5;
	}
	if(dir == "fDown" && force > 20){ //Move the force up
		force = force - 5;
	}
	console.log(cannonAngle);
	document.getElementById("angle").innerHTML = cannonAngle;
	document.getElementById("force").innerHTML = force;
	cannon.style.webkitTransform = "rotate("+ (cannonAngle - (cannonAngle * 2)) +"deg)"; //Transform the image in all browsers
	cannon.style.MozTransform = "rotate("+(cannonAngle - (cannonAngle * 2)) +"deg)";
	cannon.style.msTransform = "rotate("+ (cannonAngle - (cannonAngle * 2)) +"deg)";
	cannon.style.OTransform = "rotate("+ (cannonAngle - (cannonAngle * 2)) +"deg)";
	cannon.style.transform = "rotate("+ (cannonAngle - (cannonAngle * 2)) +"deg)";
}

function moveball(){
	ball = document.getElementById("ball");
	t = t + 0.2;
	
	xpos[0] = 45 + xspeed[0] * t;
	ypos[0] = cannonHeight + (9.81 / 2) * Math.pow(t, 2) - yspeed[0] * t; 
	
	if(ypos[0] >= 470){ // If the ball hits the ground
		yspeed[0] = 0;
		ypos[0] = 470; // Position it properly
		testHit(); // Test if the ball hit the pig
		ball.style.top = (Math.round(ypos[0])); // Render the ball positions
		ball.style.left = (Math.round(xpos[0]));
		setTimeout("resetButton();", 5000); // Reset the shoot button
		console.log("Impact");
		return false; // Break the loop
	}
	ball.style.top = (Math.round(ypos[0])); // Render the ball positions
	ball.style.left = (Math.round(xpos[0]));
	
	setTimeout("moveball()", 16); // Call this function again at 60 FPS
}

function testHit(){
	if((xpos[0] + 20) > piggyPos && xpos[0] < (piggyPos + 70)){ // Test if the bomb landed inside the hitbox
		piggy = document.getElementById("piggy");
		piggy.style.visibility = "hidden"; // Kill the pig
		ball = document.getElementById("ball");
		ball.style.visibility = "hidden"; // Hide the bomb because it "Exploded"
		combo++;
		if(combo > 2){
			displayMessage("Score: " + combo + "!!", 2000);
		}else{displayMessage("It&#39;s a HIT!", 2000);}
		explosion = document.getElementById("explosion"); // Play a bad animation
		explosion.style.top = (Math.round(ypos[0]) - 200); // Render the animation at the position of the ball
		explosion.style.left = (Math.round(xpos[0]) - 128);
		explosion.style.visibility = "visible"; 
		setTimeout("explosion.style.visibility = 'hidden';", 4000);// And stop the animation
		
		for(i=1;i<100;i++){ // Do this loop 100 times
			var t = document.createElement('IMG');
			
			if(combo > 5){
				t.setAttribute("src", "style/Johan.png");
			}else{
				if(i<=25){ // Spawn 25 of each gore type
					t.setAttribute("src", "style/gore1.png");
				}else if(i<=50){
					t.setAttribute("src", "style/gore2.png");
				}else if(i<=75){
					t.setAttribute("src", "style/gore3.png");
				}else if(i<=100){
					t.setAttribute("src", "style/gore4.png");
				}
			}
			
			t.style.position = "absolute"; // Apply the attributes
			t.setAttribute("id", "gore" + i);
			t.style.visibility = "hidden";
			document.getElementById("game").appendChild(t);
			
			xspeed[i] = Math.random()*20-10; // Make them fly all over the place
			yspeed[i] = Math.random()*-15-2;
			xpos[i] = xpos[0]; // And render the positions
			ypos[i] = ypos[0] - 20;
			gore(i);
		}
	}else{
		displayMessage("You missed", 2000);
	}
}

function gore(id){ // Same function to animate the gore
	var flesh = document.getElementById("gore"+ id);
	
	xpos[id] = xpos[id] + xspeed[id];
	xspeed[id] = xspeed[id] / 1.006;
	
	ypos[id] = ypos[id] + yspeed[id];
	yspeed[id] = yspeed[id] + 0.2;
	if(ypos[id] >= 485){
		xspeed[id] = xspeed[id] / 1.06;
		yspeed[id] = 0;
		ypos[id] = 485;
		return false;
	}
	flesh.style.top = (Math.round(ypos[id]));
	flesh.style.left = (Math.round(xpos[id]));
	flesh.style.visibility = ("visible");
	
	setTimeout("gore("+ id +");", 20)
}

function displayMessage(message, time){
	messagebox = document.getElementById("message");
	messagebox.innerHTML = message;
	setTimeout("messagebox.innerHTML = '';", time);
}

function decayGore(){ // Hide the gore
	piggy = document.getElementById("piggy");
	for(i=1;i<100;i++){
		decay = document.getElementById("gore"+ i);
		decay.parentNode.removeChild(decay); // remove the gore
		piggy.style.visibility = "visible";
	}
}
