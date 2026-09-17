var nomeVinho = prompt("Digite o nome do vinho: ");

var tipoVinho = prompt("Digite o tipo de vinho (tinto, branco, rosé): ");

var safraVinho = parseInt(prompt("Digite a safra do vinho: "));

var quantidadeEstoque = parseInt(prompt("Digite a quantidade em estoque: "));

var precoVinho = parseFloat(prompt("Digite o preço do vinho: "));

alert("Cadastro realizado! Veja os detalhes no console.");

alert("A seguir, veja os detalhes do vinho no console.");


console.log("Nome do vinho: " + nomeVinho);
console.log("Tipo de vinho: " + tipoVinho);
console.log("Safra do vinho: " + safraVinho);
console.log("Quantidade em estoque: " + quantidadeEstoque);
console.log("Preço do vinho: R$ " + precoVinho.toFixed(2));
