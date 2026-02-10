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
        recomendacao.setAttribute('id','recomendação');
        
        let imagem_1 = document.createElement('img');
        imagem_1.setAttribute('class','icone');
        let imagem_2 = document.createElement('img');
        imagem_2.setAttribute('class','icone');
        let imagem_3 = document.createElement('img');
        imagem_3.setAttribute('class','icone');
        
           
        let containerEpi = document.createElement('div')
        containerEpi.setAttribute('id', 'containerEpi')

        texto.innerHTML = `olá ${nome}, voce faz parte do setor: ${setor}`;
        res.appendChild(texto);

       
        if(setor == 'administrativo'){
            recomendacao.innerHTML = `Atenção, você tem a opção de usar os EPIs somente ao entrar na fábrica!`;
            imagem_1.setAttribute('src','imagens/icones/bota.jpg');
            imagem_2.setAttribute('src','imagens/icones/auricular.jfif');
            imagem_3.setAttribute('src','imagens/icones/oculos.png');       
        }else if(setor == 'operacional' ){

        }else if(setor == 'Manutenção' ){

        }else if(setor == 'Segurança'){

        }

        containerEpi.appendChild(imagem_1);
        containerEpi.appendChild(imagem_2);
        containerEpi.appendChild(imagem_3);
        
        res.appendChild(recomendacao);
        res.appendChild(containerEpi);
    }

}