const prompt = require("prompt-sync")();

let listaHerois = [
  "Ricardo:1000",
  "Bruno:2000",
  "Douglas:3000",
  "Renata:1000000",
];

/**
  let nome = prompt("Digite o nome do Heroi: ");
  
  let xp = parseInt(prompt("Digite a quantidade de Xp do Heroi: "));
  console.log(xp);
*/



listaHerois.forEach((item) => {

  let[nome,xp] = item.split(':');
  CalculaNivel(nome,xp);

});


function CalculaNivel(nome, xp) {
  if (xp < 1000) {
    console.log(
      `O heroi ${nome}, tem ${xp} pontos de  experiencia e esta no nivel Ferro!`
    );
  } else if ((xp > 1000) & (xp <= 2000)) {
    console.log(
      `O heroi ${nome}, tem ${xp} pontos de  experiencia e esta no nivel Bronze!`
    );
  } else if ((xp > 2000) & (xp <= 5000)) {
    console.log(
      `O heroi ${nome}, tem ${xp} pontos de  experiencia e esta no nivel Prata!`
    );
  } else if ((xp > 6000) & (xp <= 7000)) {
    console.log(
      `O heroi ${nome}, tem ${xp} pontos de  experiencia e esta no nivel Ouro!`
    );
  } else if ((xp > 7000) & (xp <= 8000)) {
    console.log(
      `O heroi ${nome}, tem ${xp} pontos de  experiencia e esta no nivel Platina!`
    );
  } else if ((xp > 8000) & (xp <= 9000)) {
    console.log(
      `O heroi ${nome}, tem ${xp} pontos de  experiencia e esta no nivel Acendente!`
    );
  } else if ((xp > 9000) & (xp <= 10000)) {
    console.log(
      `O heroi ${nome}, tem ${xp} pontos de  experiencia e esta no nivel Imortal!`
    );
  } else {
    console.log(
      `O heroi ${nome}, tem ${xp} pontos de  experiencia e esta no nivel Radiante!`
    );
  }
}
