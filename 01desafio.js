const prompt = require("prompt-sync")();

let listaHerois = [
  "Ricardo:100",
  "Bruno:2000",
  "Douglas:3000",
  "Renata:1000000",
];


listaHerois.forEach((item) => {
  let [nome, xp] = item.split(":");
  let nivel = CalculaNivel(xp);
  console.log(Mensagem(nome, xp, nivel));
});

function Mensagem(nome, xp, nivel) {
  let Mensagem = `O heroi ${nome}, tem ${xp} pontos de  experiencia e esta no nivel ${nivel}`;
  return Mensagem;
}

function CalculaNivel(xp) {
  if (xp <= 1000) {
    return "Ferro";
  } else if ((xp > 1000) & (xp <= 2000)) {
    return "Bronze!";
  } else if ((xp > 2000) & (xp <= 5000)) {
    return "Prata!";
  } else if ((xp > 6000) & (xp <= 7000)) {
    return " Ouro!";
  } else if ((xp > 7000) & (xp <= 8000)) {
    return "Platina!";
  } else if ((xp > 8000) & (xp <= 9000)) {
    return "Acendente!";
  } else if ((xp > 9000) & (xp <= 10000)) {
    return "Imortal!";
  } else if (xp > 10000) {
    return "Radiante!";
  }
}
