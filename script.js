const form = document.getElementById('form-login');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const linkEsqueci = document.getElementById('link-esqueci');

if(formLogin){
    formLogin.addEventListener('submit', function(event){
        event.preventDefault();
        const email = emailInput.value;
        const senha = senhaInput.value;
        if(email === "admin@teste.com" && senha === "123456"){
            window.location.href = "feed.html";
        } else {
            alert("Email ou Senha incorreto!");
        }
    });
}
if(linkEsqueci){
    linkEsqueci.addEventListener('click', function(event){
        event.preventDefault();
        alert("Um link de recuperação será enviado para o seu email em breve!")
    });
}