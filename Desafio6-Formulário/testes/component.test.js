// testes/component.test.js
function executarTestesComponente() {
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

    function submeter(nome, email, senha) {
        limparErros();
        document.getElementById('nome').value = nome;
        document.getElementById('email').value = email;
        document.getElementById('senha').value = senha;
        document.getElementById('cadastroForm').dispatchEvent(new Event('submit'));
    }

    // --- Estrutura do formulário ---
    testar('Formulário deve existir no DOM', () => {
        assert(document.getElementById('cadastroForm') !== null, 'Formulário não encontrado');
    });

    testar('Campo nome deve existir', () => {
        assert(document.getElementById('nome') !== null, 'Campo nome não encontrado');
    });

    testar('Campo email deve existir', () => {
        assert(document.getElementById('email') !== null, 'Campo email não encontrado');
    });

    testar('Campo senha deve existir', () => {
        assert(document.getElementById('senha') !== null, 'Campo senha não encontrado');
    });

    testar('Botão de submit deve existir', () => {
        const btn = document.querySelector('button[type="submit"]');
        assert(btn !== null, 'Botão submit não encontrado');
    });

    testar('Botão deve ter texto "Cadastrar"', () => {
        const btn = document.querySelector('button[type="submit"]');
        assert(btn.textContent.trim() === 'Cadastrar', `Texto do botão incorreto: "${btn.textContent.trim()}"`);
    });

    // --- Atributos dos campos ---
    testar('Campo nome deve ser do tipo text', () => {
        assert(document.getElementById('nome').type === 'text', 'Tipo do campo nome incorreto');
    });

    testar('Campo email deve ser do tipo email', () => {
        assert(document.getElementById('email').type === 'email', 'Tipo do campo email incorreto');
    });

    testar('Campo senha deve ser do tipo password', () => {
        assert(document.getElementById('senha').type === 'password', 'Tipo do campo senha incorreto');
    });

    testar('Campos obrigatórios devem ter atributo required', () => {
        assert(document.getElementById('nome').required, 'Campo nome não é required');
        assert(document.getElementById('email').required, 'Campo email não é required');
        assert(document.getElementById('senha').required, 'Campo senha não é required');
    });

    // --- Comportamento visual dos erros ---
    testar('Erro deve aparecer abaixo do campo nome quando vazio', () => {
        submeter('', 'joao@example.com', '123456');
        const erro = document.querySelector('.erro-mensagem');
        assert(erro !== null, 'Mensagem de erro não foi renderizada');
        assert(
            document.getElementById('nome').nextElementSibling?.classList.contains('erro-mensagem'),
            'Erro não está posicionado após o campo nome'
        );
    });

    testar('Campo com erro deve ter borda vermelha', () => {
        submeter('', 'joao@example.com', '123456');
        const borderColor = document.getElementById('nome').style.borderColor;
        assert(borderColor !== '', 'Borda do campo nome não foi alterada');
    });

    testar('Erros devem ser limpos ao submeter dados válidos', () => {
        submeter('', 'joao@example.com', '123456');
        submeter('João', 'joao@example.com', '123456');
        const erros = document.querySelectorAll('.erro-mensagem');
        assert(erros.length === 0, 'Erros anteriores não foram removidos');
    });

    testar('Formulário deve ser resetado após envio válido', () => {
        submeter('João', 'joao@example.com', '123456');
        assert(document.getElementById('nome').value === '', 'Campo nome não foi limpo');
        assert(document.getElementById('email').value === '', 'Campo email não foi limpo');
        assert(document.getElementById('senha').value === '', 'Campo senha não foi limpo');
    });

    exibirResultadosComponente(resultados);
}

function exibirResultadosComponente(resultados) {
    const container = document.getElementById('resultados-componente');
    container.innerHTML = '';

    const passou = resultados.filter(r => r.passou).length;
    const total = resultados.length;

    const resumo = document.createElement('p');
    resumo.className = 'resumo-testes';
    resumo.textContent = `${passou}/${total} testes passaram`;
    resumo.style.color = passou === total ? '#0F6E56' : '#A32D2D';
    container.appendChild(resumo);

    resultados.forEach(r => {
        const div = document.createElement('div');
        div.className = 'item-teste';
        div.textContent = `${r.passou ? '✔' : '✘'} ${r.descricao}${r.erro ? ' — ' + r.erro : ''}`;
        div.style.color = r.passou ? '#0F6E56' : '#A32D2D';
        container.appendChild(div);
    });
}