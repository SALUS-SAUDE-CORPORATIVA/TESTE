document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const empresa = document.getElementById('empresa').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const contactMethod = document.getElementById('contact-method').value;

    // Função para enviar por e-mail
    function enviarEmail() {
        const emailDestino = 'henriquefdalves15@gmail.com'; // Substitua pelo seu endereço de e-mail
        const assunto = 'Formulário de Contato';
        let corpoEmail = `Nome: ${nome}\n`;
        corpoEmail += `Empresa: ${empresa}\n`;
        corpoEmail += `Telefone: ${telefone}\n`;
        corpoEmail += `Email: ${email}\n`;
        
        if (mensagem) {
            corpoEmail += `Mensagem: ${mensagem}\n`;
        }

        const mailtoLink = `mailto:${emailDestino}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;
        window.location.href = mailtoLink;
    }

    // Função para enviar pelo WhatsApp
    function enviarWhatsApp() {
        const numeroWhatsApp = '5537999386472'; // Número formatado corretamente para o WhatsApp
        let texto = `Nome: ${nome}\n`;
        texto += `Empresa: ${empresa}\n`;
        texto += `Telefone: ${telefone}\n`;
        texto += `Email: ${email}\n`;
        
        if (mensagem) {
            texto += `Mensagem: ${mensagem}\n`;
        }

        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
        window.open(urlWhatsApp, '_blank');
    }

    // Verifica o método de contato selecionado e chama a função correspondente
    if (contactMethod === 'email') {
        enviarEmail();
    } else if (contactMethod === 'whatsapp') {
        enviarWhatsApp();
    }

    exibirMensagemConfirmacao();
});

function exibirMensagemConfirmacao() {
    // Exibe a div de confirmação
    const mensagemConfirmacao = document.getElementById('mensagem-confirmacao');
    mensagemConfirmacao.style.display = 'block';

    // Define um temporizador para ocultar a mensagem após alguns segundos
    setTimeout(function() {
        mensagemConfirmacao.style.display = 'none';
    }, 5000); // Tempo em milissegundos (5 segundos)
}
