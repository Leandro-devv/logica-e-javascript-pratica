function identificador(){
    let corpo = document.body;
    let nome = document.getElementById("nome").value;
    let setor = document.getElementById("setor").value;
    let res = document.getElementById('res');

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

        texto.innerHTML = `Olá ${nome}, voce faz parte do setor: ${setor}`;
        res.appendChild(texto);

       
        if(setor == 'administrativo'){
            recomendacao.innerHTML = `Atenção, você tem a opção de usar os EPIs somente ao entrar na fábrica!`;
            corpo.style.backgroundImage = "linear-gradient(rgba(77, 73, 73, 0.50), rgba(77, 73, 73, 0.85)), url('imagens/background/bodyAdm.jpg')";
            imagem_1.setAttribute('src','imagens/icones/bota.jpg');
            imagem_2.setAttribute('src','imagens/icones/auricular.jfif');
            imagem_3.setAttribute('src','imagens/icones/oculos.png');       
        }else if(setor == 'solda' ){
            recomendacao.innerHTML = `Atenção, estes EPIS são de uso obrigatório`;
            corpo.style.backgroundImage = "linear-gradient(rgba(77, 73, 73, 0.50), rgba(77, 73, 73, 0.85)), url('imagens/background/bodySolda.jpg')";
            imagem_1.setAttribute('src','imagens/icones/bota.jpg');
            imagem_2.setAttribute('src','imagens/icones/macacao.jpg');
            imagem_3.setAttribute('src','imagens/icones/mascara.jfif');
        }else if(setor == 'manutencao' ){
            recomendacao.innerHTML = `Atenção, estes EPIS são de uso obrigatório`;
            corpo.style.backgroundImage = "linear-gradient(rgba(77, 73, 73, 0.50), rgba(77, 73, 73, 0.85)), url('imagens/background/bodyManutencao.jfif')";
            imagem_1.setAttribute('src','imagens/icones/bota.jpg');
            imagem_2.setAttribute('src','imagens/icones/auricular.jfif');
            imagem_3.setAttribute('src','imagens/icones/oculos.png');
        }else if(setor == 'operacional'){
            recomendacao.innerHTML = `Atenção, estes EPIS são de uso obrigatório`;
            corpo.style.backgroundImage = "linear-gradient(rgba(77, 73, 73, 0.50), rgba(77, 73, 73, 0.85)), url('imagens/background/bodyOperacional.jpeg')";
            imagem_1.setAttribute('src','imagens/icones/bota.jpg');
            imagem_2.setAttribute('src','imagens/icones/auricular.jfif');
            imagem_3.setAttribute('src','imagens/icones/oculos.png');
        }

        containerEpi.appendChild(imagem_1);
        containerEpi.appendChild(imagem_2);
        containerEpi.appendChild(imagem_3);
        
        res.appendChild(recomendacao);
        res.appendChild(containerEpi);
    }

}