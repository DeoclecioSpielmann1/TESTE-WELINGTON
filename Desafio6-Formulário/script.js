document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;

    limparErros();

    let valido = true;

    if (nome === '') {
        exibirErro('nome', 'Por favor, preencha o campo Nome.');
        valido = false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        exibirErro('email', 'Por favor, preencha o campo Email.');
        valido = false;
    } else if (!regexEmail.test(email)) {
        exibirErro('email', 'Por favor, insira um email válido.');
        valido = false;
    }

    if (senha === '') {
        exibirErro('senha', 'Por favor, preencha o campo Senha.');
        valido = false;
    } else if (senha.length < 6) {
        exibirErro('senha', 'A senha deve conter pelo menos 6 caracteres.');
        valido = false;
    }

    if (valido) {
        console.log('Nome:', nome);
        console.log('Email:', email);
        document.getElementById('cadastroForm').reset();
        exibirSucesso('Cadastro realizado com sucesso!');
    }
});

function exibirErro(campoId, mensagem) {
    const campo = document.getElementById(campoId);
    campo.style.borderColor = '#E24B4A';

    const span = document.createElement('span');
    span.className = 'erro-mensagem';
    span.style.cssText = 'color:#A32D2D; font-size:12px; margin-top:4px; display:block;';
    span.textContent = mensagem;
    campo.insertAdjacentElement('afterend', span);
}

function limparErros() {
    document.querySelectorAll('.erro-mensagem').forEach(el => el.remove());
    document.querySelectorAll('input').forEach(el => el.style.borderColor = '');
}

function exibirSucesso(mensagem) {
    let aviso = document.getElementById('sucesso-mensagem');
    if (!aviso) {
        aviso = document.createElement('p');
        aviso.id = 'sucesso-mensagem';
        aviso.style.cssText = 'color:#0F6E56; font-size:14px; margin-top:1rem; font-weight:500;';
        document.getElementById('cadastroForm').appendChild(aviso);
    }
    aviso.textContent = mensagem;
    setTimeout(() => aviso.remove(), 4000);
}