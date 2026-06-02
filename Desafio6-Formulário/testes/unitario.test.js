// testes/unitario.test.js
function executarTestesUnitarios() {
    const resultados = [];

    function testar(descricao, fn) {
        try {
            fn();
            resultados.push({ descricao, passou: true, erro: null });
        } catch (e) {
            resultados.push({ descricao, passou: false, erro: e.message });
        }
    }

    function assert(condicao, mensagem) {
        if (!condicao) throw new Error(mensagem || 'Assertion falhou');
    }

    function exibirResultados() {
        const container = document.getElementById('resultados');
        container.innerHTML = '';

        const total = resultados.length;
        const passou = resultados.filter(r => r.passou).length;

        const resumo = document.createElement('p');
        resumo.textContent = `Resultado: ${passou}/${total} testes passaram`;
        resumo.style.cssText = 'font-weight:500; margin-bottom:8px;';
        container.appendChild(resumo);

        resultados.forEach(resultado => {
            const div = document.createElement('div');
            div.style.cssText = `
                color: ${resultado.passou ? '#0F6E56' : '#A32D2D'};
                font-size: 13px;
                margin-bottom: 4px;
            `;
            div.textContent = resultado.passou
                ? `✔ ${resultado.descricao}`
                : `✘ ${resultado.descricao}${resultado.erro ? ' — ' + resultado.erro : ''}`;
            container.appendChild(div);
        });
    }

    // Utilitário: preenche os campos do formulário
    function preencherCampos(nome, email, senha) {
        document.getElementById('nome').value = nome;
        document.getElementById('email').value = email;
        document.getElementById('senha').value = senha;
    }

    // --- Testes de nome ---
    testar('Nome vazio deve exibir erro', () => {
        preencherCampos('', 'joao@example.com', '123456');
        document.getElementById('cadastroForm').dispatchEvent(new Event('submit'));
        const erro = document.querySelector('.erro-mensagem');
        assert(erro !== null, 'Esperava mensagem de erro para nome vazio');
    });

    testar('Nome preenchido não deve exibir erro', () => {
        preencherCampos('João', 'joao@example.com', '123456');
        document.getElementById('cadastroForm').dispatchEvent(new Event('submit'));
        const erros = document.querySelectorAll('.erro-mensagem');
        assert(erros.length === 0, 'Não esperava erros com dados válidos');
    });

    // --- Testes de email ---
    testar('Email vazio deve exibir erro', () => {
        preencherCampos('João', '', '123456');
        document.getElementById('cadastroForm').dispatchEvent(new Event('submit'));
        const erro = document.querySelector('.erro-mensagem');
        assert(erro !== null, 'Esperava mensagem de erro para email vazio');
    });

    testar('Email sem @ deve exibir erro', () => {
        preencherCampos('João', 'joaoexample.com', '123456');
        document.getElementById('cadastroForm').dispatchEvent(new Event('submit'));
        const erro = document.querySelector('.erro-mensagem');
        assert(erro !== null, 'Esperava erro para email sem @');
    });

    testar('Email válido não deve exibir erro', () => {
        preencherCampos('João', 'joao@example.com', '123456');
        document.getElementById('cadastroForm').dispatchEvent(new Event('submit'));
        const erros = document.querySelectorAll('.erro-mensagem');
        assert(erros.length === 0, 'Não esperava erros com email válido');
    });

    // --- Testes de senha ---
    testar('Senha vazia deve exibir erro', () => {
        preencherCampos('João', 'joao@example.com', '');
        document.getElementById('cadastroForm').dispatchEvent(new Event('submit'));
        const erro = document.querySelector('.erro-mensagem');
        assert(erro !== null, 'Esperava erro para senha vazia');
    });

    testar('Senha com menos de 6 caracteres deve exibir erro', () => {
        preencherCampos('João', 'joao@example.com', '123');
        document.getElementById('cadastroForm').dispatchEvent(new Event('submit'));
        const erro = document.querySelector('.erro-mensagem');
        assert(erro !== null, 'Esperava erro para senha curta');
    });

    testar('Senha com 6 ou mais caracteres não deve exibir erro', () => {
        preencherCampos('João', 'joao@example.com', '123456');
        document.getElementById('cadastroForm').dispatchEvent(new Event('submit'));
        const erros = document.querySelectorAll('.erro-mensagem');
        assert(erros.length === 0, 'Não esperava erros com senha válida');
    });

    exibirResultados();
}