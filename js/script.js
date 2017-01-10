var nbCase = prompt("Combien de case souhaitez-vous?");	
if(nbCase < 1000){
for (var i = 1; i <= nbCase; i++) {
	document.getElementById('liste').innerHTML += "<li>" +i+ "</li>";
}}else{
	alert("nombre trop élevé")
}
     