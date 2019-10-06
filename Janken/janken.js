// 1) Getter les buttons
document.getElementById('ciseaux').addEventListener("click",function(){
	choix("ciseaux");
});
document.getElementById('pierre').addEventListener("click",function(){
	choix("pierre");
});
document.getElementById('feuille').addEventListener("click",function(){
	choix("feuille");
});
var computer;


// 2) Interaction avec l'ordi

function choix(user){
	var choiceOrdi = Math.random();

	if(choiceOrdi <= 0.33){
		computer = "ciseaux";
	}
	else if(choiceOrdi > 0.33 && choiceOrdi <= 0.66){
		computer = "pierre";
	}
	else{
		computer = "feuille";
	}
	// console.log(vide);

	switch(user) {
		case "ciseaux":
			if(computer === 'pierre'){
				alert("Le joueur à perdu");
			}
			else if(computer === 'feuille'){
				alert("L'ordi à perdu");
			}
			else{
				alert("Match nul");
			}
			break;
		case "pierre":
			if(computer === 'feuille'){
				alert("Le joueur à perdu");
			}
			else if(computer === 'ciseaux'){
				alert("L'ordi à perdu");
			}
			else{
				alert("Match nul");
			}
			break;
		default:
			if(computer === 'ciseaux'){
				alert("Le joueur à perdu");
			}
			else if (computer === 'pierre') {
				alert("L'ordi à perdu");
			}
			else{
				alert("Match nul");
			}
			break;
	}
}

