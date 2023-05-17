// Estrtura de dados

const pessoas = [
  { id: 3, nome: "Felipe" },
  { id: 1, nome: "Joaquin" },
  { id: 2, nome: "Maria" },
];

const novaPessoas = new Map();
let listPessoas = pessoas.forEach((value) => {
  const { id } = value;
  novaPessoas.set(id, { ...value });
});
console.log(novaPessoas.get(1));