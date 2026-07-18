import { auth } from './firebase-setup.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const formLogin = document.getElementById('form-login');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

if(formLogin){
    formLogin.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = emailInput.value;
        const senha = senhaInput.value;

        try {
            await signInWithEmailAndPassword(auth, email, senha);
            alert("Login realizado com sucesso!");
            window.location.href = "feed.html";
        } catch (error) {
            alert("Erro ao entrar: Verifique seu e-mail e senha.");
            console.error(error);
        }
    });
}