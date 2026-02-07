function identificador(){
    let corpo = document.body;
    let nome = document.getElementById("nome").value;
    let setor = document.getElementById("setor").value;
    let res = document.getElementById('res');

    let data =  new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();

    res.innerHTML = '';

    if(nome == '' || setor == ''){
        window.alert('ERRO Preencha o nome e Setor');
    }else{
        let texto = document.createElement('h3');
        let recomendacao = document.createElement('p');
        let imagem = document.createElement('img');
        imagem.setAttribute('id','imagem')
        recomendacao.setAttribute('id','recomendação')

        texto.innerHTML = `olá ${nome}, voce faz parte do setor: ${setor}`;
        res.appendChild(texto);

       
        if(setor == 'administrativo'){
            recomendacao.innerHTML = `Atenção você deve usar os EPIs se for entrar na fábrica!`; 
        }else if(setor == 'operacional' ){

        }else if(setor == 'Manutenção' ){

        }else if(setor == 'Segurança'){

        }
        
        res.appendChild(recomendacao);
    }

}