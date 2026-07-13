const radioTrabalhar = document.getElementById('tipo-trabalho');
const radioContratar = document.getElementById('tipo-contratar');
const containerCampos = document.getElementById('campos-dinamicos');

function atualizarFormulario(){
    const isTrabalho = radioTrabalhar.checked;
    const tituloPrincipal = isTrabalho ? "Qual serviço você oferece?" : "Qual vaga você deseja criar?";
    const placeholderServico = isTrabalho ? "Ex: Faxina Residencial" : "Ex: Precisa-se de Cozinheiro";
    const labelValor = isTrabalho ? "Preço do seu serviço (R$)" : "Orçamento disponível (R$)";
    containerCampos.innerHTML = `
        <div class="campo-grupo">
            <label>${tituloPrincipal}</label>
            <input type="text" placeholder="${placeholderServico}" required>
        </div>
        <div class="filter-row" style="display: flex; gap: 10px;">
            <div class="campo-grupo" style="flex: 1;">
                <label>${labelValor}</label>
                <input type="number" placeholder="0,00" required>
            </div>
            <div class="campo-grupo" style="flex: 1;">
                <label>Cidade</label>
                <input type="text" placeholder="Sua cidade" required>
            </div>
        </div>
        <div class="campo-grupo">
            <label>Categoria</label>
            <select required>
                <option value="">Selecione...</option>
                <option value="faxina">Faxina</option>
                <option value="cozinha">Cozinha</option>
                <option value="reparos">Reparos</option>
                <option value="outros">Outros</option>
            </select>
        </div>
        <div class="campo-grupo">
            <label>Descrição Detalhada</label>
            <textarea rows="4" placeholder="Descreva os detalhes aqui..." required></textarea>
        </div>
    `;
}
radioTrabalhar.addEventListener('change', atualizarFormulario);
radioContratar.addEventListener('change', atualizarFormulario);
atualizarFormulario();

document.getElementById('form-publicar').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Publicação enviada com sucesso! (Simulação)");
    window.location.href= "feed.html";
});