const NUMERO_WHATSAPP = "5521996457245"; // COLOQUE SEU NÚMERO AQUI
let servicoAtual = "";

function abrirModal(tipo) {
    servicoAtual = tipo;
    const modal = document.getElementById("modalFormulario");
    const titulo = document.getElementById("modalTitulo");
    const campos = document.getElementById("camposFormulario");
    
    campos.innerHTML = ""; // Limpa campos antigos
    modal.style.display = "flex";

    if (tipo === "Passageiro") {
        titulo.innerText = "📍 Solicitar Corrida";
        campos.innerHTML = `
            <div class="campo-grupo"><label>Seu Nome</label><input type="text" id="nomeCliente" placeholder="Ex: João"></div>
            <div class="campo-grupo"><label>Bairro de Origem</label><input type="text" id="origem" placeholder="Ex: Centro"></div>
            <div class="campo-grupo"><label>Bairro de Destino</label><input type="text" id="destino" placeholder="Ex: Itaipuaçu"></div>
        `;
    } else if (tipo === "Entrega") {
        titulo.innerText = "📦 Solicitar Entrega Comercial";
        campos.innerHTML = `
            <div class="campo-grupo"><label>Nome do Estabelecimento</label><input type="text" id="comercio" placeholder="Ex: Quentinhas da Maria"></div>
            <div class="campo-grupo"><label>Bairro de Entrega</label><input type="text" id="bairroEntrega" placeholder="Ex: Cordeirinho"></div>
        `;
    } else if (tipo === "Coleta") {
        titulo.innerText = "📋 Solicitar Coleta de Objeto";
        campos.innerHTML = `
            <div class="campo-grupo"><label>O que precisa buscar?</label><input type="text" id="objeto" placeholder="Ex: Chave / Maquininha"></div>
            <div class="campo-grupo"><label>Onde retirar? (Bairro)</label><input type="text" id="retirada" placeholder="Ex: Inoã"></div>
        `;
    } else if (tipo === "Motoboy") {
        titulo.innerText = "🦅 Cadastro de Motoboy";
        campos.innerHTML = `
            <div class="campo-grupo"><label>Nome Completo</label><input type="text" id="nomeMoto" placeholder="Seu nome"></div>
            <div class="campo-grupo"><label>Bairro onde Mora</label><input type="text" id="bairroMoto" placeholder="Ex: Ponta Negra"></div>
            <div class="campo-grupo"><label>Modelo da Moto</label><input type="text" id="veiculoMoto" placeholder="Ex: Fan 125cc"></div>
        `;
    }
}

function fecharModal() {
    document.getElementById("modalFormulario").style.display = "none";
}

function processarFormulario() {
    let mensagem = "";

    if (servicoAtual === "Passageiro") {
        const nome = document.getElementById("nomeCliente").value;
        const de = document.getElementById("origem").value;
        const para = document.getElementById("destino").value;
        if(!de || !para) return alert("Preencha a origem e o destino!");
        mensagem = `🏍️ *NOVA CORRIDA (Passageiro)*\n\n• *Nome:* ${nome || 'Não informado'}\n• *De:* ${de}\n• *Para:* ${para}`;
    
    } else if (servicoAtual === "Entrega") {
        const loja = document.getElementById("comercio").value;
        const destinoEntrega = document.getElementById("bairroEntrega").value;
        if(!loja || !destinoEntrega) return alert("Preencha os campos!");
        mensagem = `📦 *SOLICITAÇÃO DE ENTREGA*\n\n• *Estabelecimento:* ${loja}\n• *Destino:* ${destinoEntrega}`;
    
    } else if (servicoAtual === "Coleta") {
        const item = document.getElementById("objeto").value;
        const local = document.getElementById("retirada").value;
        if(!item || !local) return alert("Preencha os campos!");
        mensagem = `📋 *SERVIÇO DE COLETA*\n\n• *Item:* ${item}\n• *Retirar em:* ${local}`;
    
    } else if (servicoAtual === "Motoboy") {
        const n = document.getElementById("nomeMoto").value;
        const b = document.getElementById("bairroMoto").value;
        const m = document.getElementById("veiculoMoto").value;
        if(!n || !b) return alert("Preencha seu nome e bairro!");
        mensagem = `🦅 *CADASTRO MOTOBOY*\n\n• *Nome:* ${n}\n• *Mora em:* ${b}\n• *Moto:* ${m || 'Não informada'}`;
    }

    const linkZap = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    window.open(linkZap, '_blank');
    fecharModal();
}

// Fecha o modal se clicar fora da janelinha
window.onclick = function(event) {
    const modal = document.getElementById("modalFormulario");
    if (event.target == modal) {
        fecharModal();
    }
}