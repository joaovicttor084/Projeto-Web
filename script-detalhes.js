function contatarViaWhatsApp(nomeProfissional, telefoneProfissional, nomeServico, nomeContratante){
    let telefoneFormatado = telefoneProfissional.replace(/\D/g, "");
    if (!telefoneFormatado.startsWith("55")){
        telefoneFormatado = "55" + telefoneFormatado;
    }
    let mensagem = `Olá ${nomeProfissional}, me chamo ${nomeContratante}. Vi que você está disponivel para o serviço de "${nomeServico}" no FAXINO e estou interessado.`;
    let textoCodificado = encodeURIComponent(mensagem);
    let linkWhatsApp = `https://wa.me/${telefoneFormatado}?text=${textoCodificado}`;
    window.open(linkWhatsApp, '_blank');
}
const btnWhats = document.getElementById('btn-whatsapp');
if (btnWhats){
    btnWhats.addEventListener('click', function(){
        const profissional = "Maria Silva";
        const telefone = "(11) 98765-4321";
        const servico = "Faxina Completa";
        const contratante = "Usuário do Faxino";
        contatarViaWhatsApp(profissional, telefone, servico, contratante);
    })
}