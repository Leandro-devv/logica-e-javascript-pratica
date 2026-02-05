function trocaTurno (){
    let corpo = document.body;
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let imagem = document.getElementById('foto');
    let msg = document.getElementById('msg');
    let titulo = document.getElementById('titulo');
    let rodape = document.getElementById('rodape');

    if (hora >= 5 && hora < 13){
       msg.innerHTML = `Bom dia! Agora são ${hora}:${minuto}, Bem vindo ao primeiro turno!!!`;
       imagem.src = 'imagens/manha.jpg';
       corpo.style.background = '#e2cd9f'; 
    }else if (hora >= 13 && hora < 21){
        msg.innerHTML = `Boa tarde! Agora são ${hora}:${minuto}, Bem vindo ao segundo turno!!!`;
        imagem.src = 'imagens/tarde.jpg';
        corpo.style.background = '#b9846f';
    }else{
        msg.innerHTML = `Boa noite! Agora são ${hora}:${minuto}, Bem vindo ao terceiro turno!!!`;
        imagem.src = 'imagens/noite.jpg';
        corpo.style.background = '#515154';
        titulo.style.color = 'white';
        rodape.style.color = 'white';
    }

}