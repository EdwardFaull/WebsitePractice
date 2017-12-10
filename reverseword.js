function myFunction(){
	var x = document.getElementById("word").value;
	var reverseWord = x.split("").reverse().join("");
	document.getElementById("return").innerHTML = reverseWord;
}