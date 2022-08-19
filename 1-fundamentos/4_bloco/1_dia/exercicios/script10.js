const custoProduto = 100;
const vendaProduto = -150;

let custoTotal = 0;
let lucro = 0;
let lucroTotal = 0;

if (custoProduto > 0 && vendaProduto > 0) {
    custoTotal = (custoProduto * 0.20) + custoProduto; lucro = vendaProduto - custoTotal; lucroTotal = lucro * 1000; console.log(lucroTotal);
}
else {
    console.log("Erro");
}

// No imposto poderia ter colocado 1.2, poderia ter criado consts do lucro, custo total e lucro total dentro do if

