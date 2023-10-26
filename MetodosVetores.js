//Esta é uma variavel contendo uma array só de strigs
let pokemon = ["Pikachu","Charmende","Bubassaur"]
//Arrays são iguais a vetores ,vetores são como armarios,que podem armazer varios tipos de variaveis numa só memória
//Variáveis e contantes sem arrays podem armazenar somente um valor 
//Variáveis com arrays podem armazenar vários tipos de valor no mesmo lugar
//Podendo armazenar até mesmo outra array sendo estas chamadasde matrizes
//exemplos
pokemon.push(1)
//Adiciona um valor ao final da array
console.log(pokemon)

//nome/sexo/nível/podeUsar 
let nomePokemons =[["Pikachu","M",20,true],["Charmende","F",23,false],["Bubassaur","M",15,true]]
//Aparecer tudo sobre o primeiro pokemon
console.log(nomePokemons[0])

//Aparece somente de acordo a ordem colocoda
console.log(nomePokemons[0][0])
//primeiro pokemon nome

console.log(nomePokemons[2][1])
//terceiro pokemon sexo

console.log(nomePokemons[1][2])
//segundo pokemon nivel

console.log(nomePokemons[1][3])
//segundo pokemon pode-se utilizar
