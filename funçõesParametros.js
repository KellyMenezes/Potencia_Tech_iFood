//Funções com parametros
//É quando criamos uma variavel dentro de uma função ,ou que queremos diferentes resultados para a mesma coisa alterando somente o que queremos mudar dentro da função
paqueca(" com chocolate")
paqueca(" com doce de leite")
paqueca(" com leite moça")
function paqueca(panqueca){
    console.log("Panqueca"+panqueca)
}

function idade(nome,anoNascimento){
    let idade = 2023 - anoNascimento;
    console.log(nome,"tem",idade,"anos!!!");
}
idade("Kelly",2002)
