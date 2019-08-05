const _ = require("lodash");

const alunos = [
  {
    nome: "roberto",
    nota: 7.3
  },
  {
    nome: "lucas",
    nota: 4.4
  }
];

const media = _.sumBy(alunos, "nota") / alunos.length;
console.log(alunos);
console.log(media);
