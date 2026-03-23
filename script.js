document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContato');

    form.addEventListener('submit', function(e) {
        // Impede o recarregamento da página para processar a validação
        e.preventDefault();
        // Captura de dados inseridos pelo usuário
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        // Verifica se existem campos vazios antes do envio
        if (!nome || !email || !mensagem) {
            alert("⚠️ Erro: Todos os campos devem ser preenchidos.");
            return;
        }

        // Validação do formato de e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("⚠️ Erro: Informe um e-mail válido (ex: nome@email.com).");
            return;
        }
        // Simulação de envio com mensagem de sucesso e limpeza dos campos
        console.log("Enviando dados:", { nome, email, mensagem });
        alert(`✅ Sucesso, ${nome}!\nSua mensagem foi enviada com sucesso para o Humberto.`);
        form.reset();
    });
});