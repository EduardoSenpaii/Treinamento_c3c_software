function pegarDados() {
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);
    let lado3 = parseFloat(document.getElementById("lado3").value);
    let resultado = classificarTriangulo(lado1, lado2, lado3);
    document.getElementById("resultado").innerHTML = resultado;
}

function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero";
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}