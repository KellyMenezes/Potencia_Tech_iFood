//SwitchCase é uma das formas de ter vária escolhas ,apesar do if elseif else ,você pode ter várias opções e fica menos casativo de ler.
let clubeWinx = 1
let fada = "Parabéns você é "
  switch(clubeWinx){
    case 1:
     console.log(fada+"uma fada das Natureza!");
     break;
    case 2:
      console.log(fada+"uma fada da chama do Dragão!");
      break;
    case 3:
      console.log(fada+"uma  fada do Sol!");
      break;
    case 4:
      console.log(fada+"uma fada da Música!");
      break;
    case 5:
      console.log(fada+"uma fada da Tecnologia");
      break
    default:
      console.log("Você não é uma fada ,você é uma bruxa!")
