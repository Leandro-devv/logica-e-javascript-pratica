
function calcularRpm() {
    const velocidadeCorte = document.getElementById("velocidade")
    const diametro = document.getElementById("diametro")

    const v = parseFloat(velocidadeCorte.value);
    const d = parseFloat(diametro.value);

    const resultado = document.getElementById("resultado");

    if(v>0 && d>0){
        const rpm = (1000 * v) / (3.14 * d)
        resultado.innerHTML = `O RPM do torno é: ${rpm.toFixed(2)} rpm`;
    }else{
        resultado.innerHTML = "Por favor, insira valores válidos para velocidade de corte e diâmetro.";
    }
}