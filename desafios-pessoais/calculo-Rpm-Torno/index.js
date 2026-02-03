let velocidadeCorte = Number(prompt("Digite a velocidade de corte:  "));

let diametroPeca = Number(prompt("Digite o diâmetro da peça:  "));

let rpm = (velocidadeCorte * 1000) / (3.14 * diametroPeca);

if(rpm > 2500){
    alert(`cuidado! o valor do RPM: ${rpm.toFixed(2)} está muito alto!`);
}else{
    alert(`O valor do RPM:${rpm.toFixed(2)} está dentro do limite seguro.`);
}