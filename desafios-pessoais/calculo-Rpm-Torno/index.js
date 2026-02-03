
function calcularRpm() {
    let velocidadeCorte = document.getElementById("velocidade").value;
    let diametro = document.getElementById("diametro").value;
    let resultado = document.getElementById("resultado");
    let rpm = (1000 * velocidadeCorte) / (3.14 * diametro);
    resultado.innerHTML = "O valor do RPM é: " + rpm.toFixed(2);
    return rpm.toFixed(2);
}