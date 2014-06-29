var req = new XMLHttpRequest();

function load(page){
	console.log("Hi");
	
	req.open("GET","content/" + page + ".html?v=" + new Date().getTime(), true);
	req.send();
}

req.onreadystatechange = function(){
if (req.readyState === 4 && req.status === 200){
		document.getElementById("body").innerHTML=req.responseText;
		//str = req.responseText;
		
		//type();
	}
};

var str, i = 0, text;

function type() {
	text = str.slice(0, ++i);
	if (text === str) return;
			
	document.getElementById('body').innerHTML = str;
	console.log("Type: " + str);
	
	setTimeout(type(), 100);
}