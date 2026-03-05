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

const mostrarCampos = () => {
    const valorSelecionado = document.getElementById('tipoItem').value;
    const todosOsGrupos = document.querySelectorAll('[data-grupo]');

    todosOsGrupos.forEach(g => g.classList.add('hidden'));

    if (valorSelecionado) {
        const idParaMostrar = 'campos-' + valorSelecionado;
        const elemento = document.getElementById(idParaMostrar);
        
        if (elemento) {
            elemento.classList.remove('hidden');
        }
    }
};

document.getElementById('tipoItem').addEventListener('change', mostrarCampos);