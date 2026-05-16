console.log("PPMU Mobility iniciado")
// Substitua o número abaixo pelo seu número de atendimento do WhatsApp
// Coloque o código do país (55) + DDD (21) + seu número, tudo junto sem espaços ou traços.
const NUMERO_WHATSAPP = "5521996457245"; 

function chamarNoWhats(tipoServico) {
    let mensagem = "";

    switch(tipoServico) {
        case "Passageiro":
            mensagem = "Olá! Gostaria de solicitar um motoboy para uma corrida de passageiro em Maricá.";
            break;
        case "Entrega":
            mensagem = "Olá! Preciso de um motoboy para realizar uma entrega comercial.";
            break;
        case "Coleta":
            mensagem = "Olá! Preciso que um motoboy busque/colete um documento ou objeto para mim.";
            break;
        case "Cadastro Motoboy":
            mensagem = "E aí! Sou motoboy aqui em Maricá e gostaria de fazer o meu cadastro para rodar com o MF Mobility.";
            break;
        default:
            mensagem = "Olá! Gostaria de mais informações sobre os serviços de corrida e entrega da MF Mobility em Maricá.";
    }

    // Codifica o texto para formato de URL do WhatsApp
    const linkZap = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    
    // Abre o WhatsApp numa nova aba
    window.open(linkZap, '_blank');
}
