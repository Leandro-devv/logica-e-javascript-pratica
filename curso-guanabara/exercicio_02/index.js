function calcular(){
    // Pegando os valores dos inputs
    let i = document.getElementById('inicio').value;
    let f = document.getElementById('fim').value;
    let p = document.getElementById('passo').value;
     
    if(i.length == 0 || f.length == 0 || p.length == 0){
        window.alert('ERRO: por favor preencha todos os campos');
    } else {
        let inicio = parseInt(i);
        let fim = parseInt(f);
        let passo = parseInt(p);

        let res = document.getElementById('res');

        res.innerHTML = "";
  
        if(passo <= 0){
            window.alert('Passo inválido! Considerando PASSO 1');
            passo = 1;
        }

    
        if (inicio < fim) {
            for(let c = inicio; c <= fim ; c += passo ){
                res.innerHTML += `${c} \u{1F449} `;
            }
        } else {

            for(let c = inicio; c >= fim ; c -= passo ){
                res.innerHTML += `${c} \u{1F449} `;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
        botaoLimpar.style.display = 'block'
    }
}

function limpar(){
    let res = document.getElementById('res');
    document.getElementById('inicio').value = '';
    document.getElementById('fim').value = '';
    document.getElementById('passo').value = '';

    res.innerHTML = '';
    document.getElementById('botaoLimpar').style.display = 'none';
    
    res.style.backgroundColor = 'transparent';
    res.style.padding = '0px';
}