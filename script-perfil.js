const menuPublicacoes = document.getElementById('menu-publicacoes');
const menuEditar = document.getElementById('menu-editar');
const menuSeguranca = document.getElementById('menu-seguranca');
const btnSair = document.getElementById('btn-sair');
const perfilNome = document.getElementById('perfil-nome');
const perfilCidade = document.getElementById('perfil-cidade');
const avatarUsuario = document.getElementById('avatar-usuario');
const painelOpcoes = document.getElementById('painel-opcoes');
let menuAtivo = null;
function alternarPainel(elementoClicado, tipoMenu, htmlConteudo){
    if (menuAtivo === tipoMenu){
        painelOpcoes.style.display = 'none';
        menuAtivo = null;
    } else {
        painelOpcoes.style.display = 'flex';
        painelOpcoes.innerHTML = htmlConteudo;
        elementoClicado.insertAdjacentElement('afterend', painelOpcoes);
        menuAtivo = tipoMenu;
        if (tipoMenu === 'editar'){
            configurarListenersEdicao();
        }
    }
}
menuPublicacoes.addEventListener('click', () => {
    const html = `
    <h3 style="color: #764ba2; font-size: 1.1rem; margin-bottom: 5px;">Minhas Publicações</h3>
    <p style="color: #666; font-size: 0.85rem; margin-bottom: 10px;">Gerenciar seus anúncios ativos na platafomra</p>
    <div style="border: 1px solid #eee; padding: 12px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
        <div>
        <h4 style="color: #333; font-size: 0.95rem; margin-bottom: 2px;">Faxina Completa</h4>
        <span style="color: #27ae60; font-weight: bold; font-size: 0.85rem;">R$ 150,00</span>
        </div>
        <button style="background-color: #fff; border: 1px solid #e74c3c; color: #e74c3c; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-weight: bold;">Excluir</button>
    </div>
    `;
    alternarPainel(menuPublicacoes, 'publicacoes', html);
});
menuEditar.addEventListener('click', () => {
    const html = `
        <h3 style="color: #764ba2; font-size: 1.1rem; margin-bottom: 5px;">Editar DadosPessoais</h3>
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 10px;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <button type="button" id="btn-escolher-foto" style="background-color: #764ba2; color: white; border: none; padding: 10px 15px; border-radius: 8px; font-size: 0.85rem; cursor: pointer; font-weight: 500;">
                    📷 Alterar Foto de Perfil
                </button>
                <input type="file" id="input-foto" accept="image/*" style="display: none;">
                <span id="nome-arquivo-foto" style="color: #888; font-size: 0.8rem;">Nenhum arquivo selecionado</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 4px;">
                <label style="font-size: 0.85rem; color: #764ba2; font-weight: 500;">Nome Completo</label>
                <input type="text" id="edit-nome" value="${perfilNome.innerText}" style="padding: 12px; border: 1px solid #ddd; border-radius: 8px; outline: none; font-family: 'Poppins', sans-serif;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 4px;">
                <label style="font-size: 0.85rem; color: #764ba2; font-weight: 500;">Cidade</label>
                <input type="text" id="edit-cidade" value="${perfilCidade.innerText.replace('📍 ', '')}" style="padding: 12px; border: 1px solid #ddd; border-radius: 8px; outline: none; font-family: 'Poppins', sans-serif;">
            </div>
            <button id="btn-salvar-dados" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 5px;">
                Salvar Alterações
            </button>
        </div>
    `;
    alternarPainel(menuEditar, 'editar', html);
});
function configurarListenersEdicao(){
    const btnEscolherFoto = document.getElementById('btn-escolher-foto');
    const inputFoto = document.getElementById('input-foto');
    const nomeArquivoFoto = document.getElementById('nome-arquivo-foto');
    const btnSalvarDados = document.getElementById('btn-salvar-dados');
    btnEscolherFoto.addEventListener('click', () => inputFoto.click());
    inputFoto.addEventListener('change', (e) => {
        const arquivo = e.target.files[0];
        if (arquivo) {
            nomeArquivoFoto.innerText = arquivo.name;
            const reader = new FileReader();
            reader.onload = function(event){
                avatarUsuario.innerHTML = `<img src="${event.target.result}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
            }
            reader.readAsDataURL(arquivo);
        }
    });
    btnSalvarDados.addEventListener('click', () => {
        const novoNome = document.getElementById('edit-nome').value;
        const novaCidade = document.getElementById('edit-cidade').value;
        if (novoNome.trim() !== "") perfilNome.innerText = novoNome;
        if (novaCidade.trim() !== "") perfilCidade.innerText = `📍 ${novaCidade}`;
        alert("Dados atualizados com sucesso!");
        painelOpcoes.style.display = 'none';
        menuAtivo = null;
    });
}
menuSeguranca.addEventListener('click', () => {
    const html = `
        <h3 style="color: #764ba2; font-size: 1.1rem; margin-bottom: 5px;">Alterar Senha</h3>
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 10px;">
            <div style="display: flex; flex-direction: column; gap: 4px;">
                <label style="font-size: 0.85rem; color: #764ba2; font-weight: 500;">Senha Atual</label>
                <input type="password" placeholder="******" style="padding: 12px; border: 1px solid #ddd; border-radius: 8px; outline: none;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 4px;">
                <label style="font-size: 0.85rem; color: #764ba2; font-weight: 500;">Nova Senha</label>
                <input type="password" placeholder="Mínimo 6 caracteres" style="padding: 12px; border: 1px solid #ddd; border-radius: 8px; outline: none;">
            </div>
            <button onclick="alert('Senha atualizada com sucesso!'); document.getElementById('painel-opcoes').style.display='none';" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 5px;">
                Atualizar Senha
            </button>
        </div>
    `;
    alternarPainel(menuSeguranca, 'seguranca', html);
});
btnSair.addEventListener('click', () => {
    const confirmar = confirm("Tem certeza que deseja sair da sua conta?");
    if (confirmar) {
        window.location.href = "index.html";
    }
});