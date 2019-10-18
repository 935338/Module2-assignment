
function triangle() {

	var a1 = parseInt(prompt("Enter the frist angle"));
	if (a1>0 && a1<179) {
	var a2 = parseInt(prompt("Enter the second angle"));
	var a3 = 180 - (a1+a2);		
	alert("The third angle is" + " " + a3);
	}
	else {
		alert("you typed something wrong, so re-enter the first angle")
		var a1 = parseInt(prompt("Enter the frist angle"));
		var a2 = parseInt(prompt("Enter the second angle"));
		var a3 = 180 - (a1+a2);		
		alert("The third angle is" + " " + a3);

	}


}

function year() {
	var inputYear = parseInt(prompt("Enter the year"));
	if(type(inputYear)== int ) {
		var century = Math.ceil(inputYear/100);
		alert("the century of" + " " + inputYear+ " " + "is" + " " + century);
	}
	else {
		alert("please enter a realistic year");
	 }
}



