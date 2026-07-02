const bntFiltro = document.getElementById('btn-toggle-filtro');
const painelFiltro = document.getElementById('filter-panel');
bntFiltro.addEventListener('click', () => {
    painelFiltro.classList.toggle('ativo');
});
function verDetalhes(idServico){
    window.location.href = `detalhes-servico.html?id=${idServico}`;
}