function pegarDados() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = luidyMoura(numero);
    document.getElementById("resultado").innerHTML = resultado.toString();
}

function luidyMoura(numero) {
    let numeros = [];

    for (let i = 1; i <= numero; i++) {
        if (i % 9 == 0 && i % 5 == 0) {
            numeros.push("LuidyMoura");
        } else if (i % 9 == 0) {
            numeros.push("Moura");
        } else if (i % 5 == 0) {
            numeros.push("Luidy");
        } else {
            numeros.push(i);
        }
    }

    return numeros;
}
