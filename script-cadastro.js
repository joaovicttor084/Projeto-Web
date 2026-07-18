import { auth, db } from './firebase-setup.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const formCadastro = document.getElementById('form-cadastro');

formCadastro.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const cidade = document.getElementById('cidade').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, "123456");
        await setDoc(doc(db, "usuarios", userCredential.user.uid), {
            nome: nome,
            cpf: cpf,
            cidade: cidade,
            email: email,
            criadoEm: new Date()
        });
        alert("Conta criada com sucesso!");
        window.location.href = "feed.html";
    } catch (error) {
        alert("Erro ao cadastrar: " + error.message);
    }
});

window.togglePassword = function(inputId, iconElement) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        iconElement.innerText = "Ocultar";
    } else {
        input.type = "password";
        iconElement.innerText = "Ver";
    }
}

window.togglePassword = function() {
    const input1 = document.getElementById('senha');
    const input2 = document.getElementById('confirmar-senha');
    const icones = document.querySelectorAll('.eye-icon'); 
    
    if (!input1 || !input2) {
        console.error("IDs 'senha' ou 'confirmar-senha' não encontrados no HTML!");
        return;
    }
    const isHidden = input1.type === "password";
    const novoTipo = isHidden ? "text" : "password";
    input1.type = novoTipo;
    input2.type = novoTipo;
    icones.forEach(icone => {
        icone.innerText = isHidden ? "Ocultar" : "Ver";
    });
};