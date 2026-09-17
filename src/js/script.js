function cadastrarVinho() {
var nomeVinho = prompt("Digite o nome do vinho: ");

var tipoVinho = prompt("Digite o tipo de vinho (tinto, branco, rosé): ");

var safraVinho = parseInt(prompt("Digite a safra do vinho: "));

var quantidadeEstoque = parseInt(prompt("Digite a quantidade em estoque: "));
var novasGarrafas = 10;
var novoEstoque = quantidadeEstoque + novasGarrafas;

console.log("Novo estoque: " + novoEstoque);

var precoVinho = parseFloat(prompt("Digite o preço do vinho: "));

var totalEstoque = quantidadeEstoque * precoVinho;

alert("Cadastro realizado! Veja os detalhes no console.");


console.log("Nome do vinho: " + nomeVinho);
console.log("Tipo de vinho: " + tipoVinho);
console.log("Safra do vinho: " + safraVinho);
console.log("Quantidade em estoque: " + quantidadeEstoque);
console.log("Preço do vinho: R$ " + precoVinho.toFixed(2));

console.log("Valor total em estoque: R$ " + totalEstoque.toFixed(2));
}
