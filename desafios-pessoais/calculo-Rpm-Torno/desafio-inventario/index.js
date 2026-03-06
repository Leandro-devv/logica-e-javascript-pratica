const cadastro = document.getElementById('btn-cadastro');
const consulta = document.getElementById('btn-consulta');

cadastro.addEventListener('click', () => {
    const menuInativo = document.getElementById('aba-consulta');
    menuInativo.classList.add('hidden')

    const menuAtivo = document.getElementById('aba-cadastro');
    menuAtivo.classList.remove('hidden')

    consulta.classList.remove('active')
    cadastro.classList.add('active')
});

consulta.addEventListener('click', () => {
    const menuInativo = document.getElementById('aba-cadastro');
    menuInativo.classList.add('hidden')

    const menuAtivo = document.getElementById('aba-consulta');
    menuAtivo.classList.remove('hidden')

    cadastro.classList.remove('active')
    consulta.classList.add('active')
    
});

const mostrarCamposCadastro = () => {
    const valorSelecionado = document.getElementById('tipoItem').value;
    const todosOsGrupos = document.querySelectorAll('[data-grupo="cadastro"]');

    todosOsGrupos.forEach(g => g.classList.add('hidden'));

    if (valorSelecionado) {
        const idParaMostrar = 'cadastro-' + valorSelecionado;
        const elemento = document.getElementById(idParaMostrar);
        
        if (elemento) {
            elemento.classList.remove('hidden');
        }
    }
};
document.getElementById('tipoItem').addEventListener('change', mostrarCamposCadastro);

const mostraCamposConsulta = () =>{
    const consultaItem = document.getElementById('consultaItem').value;
    const todosOsGrupos = document.querySelectorAll('[data-grupo="consulta"]');

    todosOsGrupos.forEach(g => g.classList.add('hidden'));


    if(consultaItem){
        const consultaItemSelecionado = 'consulta-' + consultaItem;
        const elemento = document.getElementById(consultaItemSelecionado);

        if (elemento){
            elemento.classList.remove('hidden');
        }

    }
    
};
document.getElementById('consultaItem').addEventListener('change',mostraCamposConsulta);

const formulario = document.getElementById('form-cadastro');
const inventario = [];

formulario.addEventListener('submit',(event) => {
    event.preventDefault()
    
    const ItemSelecionado = document.getElementById('tipoItem').value;
    const quantidade = Number(document.getElementById('quantidade').value);

    let novoItem = {};
    
    if(ItemSelecionado === 'broca'){
        let tipoBroca = document.getElementById('tipoBroca').value;
        novoItem = {
            categoria : ItemSelecionado,
            tipo : tipoBroca,
            quantidadeBrocas : quantidade
        };
    }else if(ItemSelecionado === 'fresa'){
        let tipoFresa = document.getElementById('tipoFresa').value;
         novoItem = {
            categoria : ItemSelecionado,
            tipo : tipoFresa,
            quantidadeFrocas : quantidade
        };
    }else if(ItemSelecionado === 'material'){
        let tipomaterial = document.getElementById('tipoMaterial').value;
        let diametro = Number(document.getElementById('diametroBarras').value);
        let metros = Number(document.getElementById('metrosBarras').value);
        
        novoItem = {
            categoria: ItemSelecionado,
            tipo: tipomaterial,
            medidas: diametro + "mm x " + metros + "m",
            quantidade: quantidade
        };
    }

    if(ItemSelecionado != ''){
        inventario.push(novoItem)

        formulario.reset();

        mostraCamposConsulta();

        console.log("Sucesso! Veja seu inventário:", inventario);

        const todosOsGrupos = document.querySelectorAll('[data-grupo="cadastro"]');

        todosOsGrupos.forEach(g => g.classList.add('hidden'));
    }else {
        alert("Selecione o que deseja cadastrar!");
    }

});