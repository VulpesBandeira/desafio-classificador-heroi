// Classificador nível de Herói

let nomeHeroi = "Batman"
let xpHeroi = 10500
let nivelHeroi = ""

if(xpHeroi < 1000){
	nivelHeroi = "Ferro"
}
else if(xpHeroi > 1001 >= 2000){
	nivelHeroi = "Bronze"
}
else if (xpHeroi > 2001 >= 5000){
	nivelHeroi = "Prata"
}
else if (xpHeroi > 6001 >= 7000){
	nivelHeroi = "Ouro"
}
else if (xpHeroi > 7001 >= 8000){
	nivelHeroi = "Platina"
}
else if (xpHeroi > 8001 >= 9000){
	nivelHeroi = "Ascendente"
}
else if (xpHeroi > 9001 >= 10000){
	nivelHeroi = "Imortal"
} else { xpHeroi >=10001
	nivelHeroi = "Radiante"

}

console.log("O herói de nome"+ '' + ' ' + nomeHeroi+ ' ' + "está no nivel de: " + '' + nivelHeroi)