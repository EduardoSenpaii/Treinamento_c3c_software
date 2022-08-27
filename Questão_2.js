function pegarDados() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let resultado = bhaskara(a, b, c);
    document.getElementById("resultado").innerHTML = resultado.toString();
}

function bhaskara(a, b, c) {
    let delta = (b ** 2) - (4 * a * c);
    if (delta < 0) {
        return "Delta é negativo";
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    }
}