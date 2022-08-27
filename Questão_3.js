function pegarDados() {
    let nota = parseFloat(document.getElementById("nota").value);
    let resultado = calcularArredondamento(nota);
    document.getElementById("resultado").innerHTML = resultado;
}

function calcularArredondamento(nota) {
    if (nota < 38) {
        return "Nota não arredondada - Aluno reprovado";
    }
    let div = parseInt(nota / 5);
    let multCinco = (div + 1) * 5;
    if (multCinco - nota < 3) {
        return "Nota arredondada: " + multCinco + " - Aluno aprovado";
    } else {
        return "Aluno aprovado";
    }
}