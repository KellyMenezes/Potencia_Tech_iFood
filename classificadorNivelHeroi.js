let heroiXp = ["**Batman**",1500]
let mensagem = "O heroi de nome"
let mensagem2 = "está no nivel"
if(heroiXp[1] <= 1000){
    console.log("Ferro")
}
else if(heroiXp[1] && (1001 <= 2000)){
    console.log(mensagem,heroiXp[0],mensagem2,"**Bronze**")
}
else if(heroiXp[1] &&(2001 <= 5000)){
    console.log(mensagem,heroiXp[0],mensagem2,"**Prata**")
}
else if(heroiXp[1] &&(5001 <= 6000)){
    console.log(mensagem,heroiXp[0],mensagem2,"**Ouro**")
}
else if(heroiXp[1] &&(6001 <= 8000)){
    console.log(mensagem,heroiXp[0],mensagem2,"**Platina Diamante**")
}
else if(heroiXp[1] &&(8001 <= 9000)){
    console.log(mensagem,heroiXp[0],mensagem2,"**Ascendente**")
}
else if(heroiXp[1] &&(9001 <= 10000)){
    console.log(mensagem,heroiXp[0],mensagem2,"**Imortal**")
}
else if(heroiXp[1] >= 10001 ){
    console.log(mensagem,heroiXp[0],mensagem2,"**Radiante**")
}
