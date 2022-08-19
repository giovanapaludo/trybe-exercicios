const pecaXadrez ="Rainha";

switch(pecaXadrez.toLowerCase()) {
    case "bispo":
        console.log("seja lá o que o bispo faz");
        break;
    case "rei":
        console.log("seja lá o que o rei faz");
        break;
    case "rainha":
        console.log("seja lá o que a rainha faz");
        break;
    case "cavalo":
        console.log("seja lá o que o cavalo faz");
        break;
    case "peão":
        console.log("seja lá o que o peão faz");
        break;
    case "torre":
        console.log("seja lá o que a torre faz");
        break;
    default:
        console.log("Erro: peça inválida");
}