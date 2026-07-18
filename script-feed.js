import { db } from './firebase-setup.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const bntFiltro = document.getElementById('btn-toggle-filtro');
const painelFiltro = document.getElementById('filter-panel');
if (bntFiltro && painelFiltro) { 
    bntFiltro.addEventListener('click', () => {
        painelFiltro.classList.toggle('ativo');
    });
}

function verDetalhes(idServico){
    window.location.href = `detalhes-servico.html?id=${idServico}`;
}
const listaVagas = document.getElementById('lista-vagas');

async function carregarVagas() {
    try {
        const querySnapshot = await getDocs(collection(db, 'vagas'));
        listaVagas.innerHTML = "";
        querySnapshot.forEach((doc) => {
            const vaga = doc.data();
            const idVaga = doc.id;
            const vagaCard = document.createElement('div');
            vagaCard.className = 'card-vaga';
            vagaCard.innerHTML = `
                <h3>${vaga.titulo}</h3>
                <p><strong>Cidade:</strong> ${vaga.cidade}</p>
                <p><strong>Preço:</strong> R$ ${vaga.preco}</p>
                <p>${vaga.descricao}</p>
                <a href="detalhes-servico.html?id=${idVaga}" class="btn-detalhes">Ver Detalhes</a>
            `;
            listaVagas.appendChild(vagaCard);
        });
    } catch (error) {
        console.error('Erro ao carregar vagas:', error);
    }
}

carregarVagas();