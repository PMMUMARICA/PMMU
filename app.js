// CONFIGURAÇÃO REAL: Mude para o seu número de atendimento (Código do país 55 + DDD 21 + Número)
const NUMERO_WHATSAPP = "5521999999999"; 

function chamarNoWhats(tipoServico) {
    let mensagem = "";

    if (tipoServico === "Passageiro") {
        let origem = prompt("Qual o bairro de Origem? (Ex: Centro, Itaipuaçu, Inoã...)");
        let destino = prompt("Qual o bairro de Destino? (Ex: Cordeirinho, Ponta Negra...)");
        
        if (!origem || !destino) {
            alert("Por favor, informe a origem e o destino para solicitar a moto!");
            return;
        }
        mensagem = `🏍️ *NOVA CORRIDA (Passageiro)*\n\n• *De:* ${origem}\n• *Para:* ${destino}\n\nAgilize um motoboy para mim, por favor!`;

    } else if (tipoServico === "Entrega") {
        let comercio = prompt("Qual o nome do seu comércio ou restaurante?");
        let bairroEntrega = prompt("Para qual bairro de Maricá é a entrega?");
        
        if (!comercio || !bairroEntrega) {
            alert("Por favor, preencha os dados da entrega!");
            return;
        }
        mensagem = `📦 *SOLICITAÇÃO DE ENTREGA*\n\n• *Estabelecimento:* ${comercio}\n• *Destino da Entrega:* ${bairroEntrega}\n\nPreciso de um motoboy para levar um pedido.`;

    } else if (tipoServico === "Coleta") {
        let oQueE = prompt("O que precisa ser coletado? (Ex: Chave, Documento, Maquininha...)");
        let localColeta = prompt("Onde o motoboy deve retirar? (Bairro/Ponto de referência)");
        
        if (!oQueE || !localColeta) {
            alert("Por favor, informe o objeto e o local de coleta!");
            return;
        }
        mensagem = `📋 *SERVIÇO DE COLETA / EXPEDIENTE*\n\n• *Item:* ${oQueE}\n• *Retirar em:* ${localColeta}\n\nPreciso de um motoboy para coletar esse item urgência.`;

    } else if (tipoServico === "Cadastro Motoboy") {
        let nome = prompt("Qual o seu nome completo?");
        let bairroMora = prompt("Em qual bairro de Maricá você mora?");
        let moto = prompt("Qual a sua moto? (Ex: Fan 125, Titan 160...)");
        
        if (!nome || !bairroMora) {
            alert("Por favor, preencha seu nome e bairro para o cadastro!");
            return;
        }
        mensagem = `🦅 *CADASTRO DE MOTOBOY*\n\n• *Nome:* ${nome}\n• *Bairro:* ${bairroMora}\n• *Veículo:* ${moto}\n\nQuero me cadastrar para rodar e fazer entregas com o MF Mobility!`;

    } else {
        mensagem = "Olá! Gostaria de saber mais sobre como funciona o sistema de corridas e entregas da MF Mobility aqui em Maricá.";
    }

    // Gerar link do WhatsApp formatado
    const linkZap = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    
    // Abre o WhatsApp
    window.open(linkZap, '_blank');
}