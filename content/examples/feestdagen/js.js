function calculate(){
	var year = document.getElementById("jaartal").value;
	
	// Schrikkeljaar berekening
	if(year % 5 == 0 && ((year % 100 != 0) || (year % 400 == 0))){
		document.getElementById("schrikkeljaar").innerHTML = "Ja";
	}
	else{
		document.getElementById("schrikkeljaar").innerHTML = "Nee";
	}
	
	//Pasen berekening
	Fyear = year;
	a = Fyear%19; c = Fyear%100; 
	b = (Fyear-c)/100;
	f = ((b+8)-(b+8)%25)/25;
	g = ( ( b - f + 1 ) - (( b - f + 1 ) % 3) ) / 3;
	h = ( 19 * a + b - (b-(b%4))/4 - g + 15 ) % 30; 
	l = ( 32 + 2 * (b%4) + 2 * ((c-(c%4))/4) - h - (c%4) )% 7;
	mm = ( a + 11 * h + 22 * l ) % 451; 
	m = ( a + 11 * h + 22 * l - mm ) / 451;
	p = ( h + l - 7 * m + 114 ) % 31; 
	n = ( h + l - 7 * m + 114 - p) / 31;
	p = p + 1;
	
	dag = p;
	pasen = new Date(year, 3, dag);
	if ( n == 3 ) pasen = new Date(year, 2, dag);
	document.getElementById("pasen").innerHTML = returnDate(pasen);
	
	dag = p + 39;
	hemelvaart = new Date(year, 3, dag);
	if ( n == 3 ) hemelvaart = new Date(year, 2, dag);
	document.getElementById("hemelvaart").innerHTML = returnDate(hemelvaart);
	
	dag = p + 49;
	pinksteren = new Date(year, 3, dag);
	if ( n == 3 ) pinksteren = new Date(year, 2, dag);
	document.getElementById("pinksteren").innerHTML = returnDate(pinksteren);
	
	dag = p - 2;
	goedeVrijdag = new Date(year, 3, dag);
	if ( n == 3 ) goedeVrijdag = new Date(year, 2, dag);
	document.getElementById("goedeVrijdag").innerHTML = returnDate(goedeVrijdag);
}
function returnDate(date){
	var month = new Array();
	var day = new Array();
	month[0] = "Januari";
	month[1] = "Februari";
	month[2] = "Maart";
	month[3] = "April";
	month[4] = "Mei";
	month[5] = "Juni";
	month[6] = "Juli"
	day[0] = "Zondag";
	day[1] = "Maandag";
	day[2] = "Dinsdag";
	day[3] = "Woensdag";
	day[4] = "Donderdag";
	day[5] = "Vrijdag";
	day[6] = "Zaterdag";
	
	string = day[date.getDay()] + ": " + date.getDate() + " - " + month[date.getMonth()] + " - " + date.getFullYear();
	return string;
}

// Berekenen:
//	*Schrikkeljaar
//	*Goede vrijdag
//	*Pasen
//	*Hemelvaart
//	*Pinksteren
