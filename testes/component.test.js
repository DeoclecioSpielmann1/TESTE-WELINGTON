function executarTestesComponent() {
    const resultados = [];

    function testar(descricao, fn) {
        try {
            fn();
            resultados.push({ descricao, passou: true });
        } catch (e) {
            resultados.push({ descricao, passou: false });
        }
    }

    function setInputs(v1, v2) {
        document.getElementById("input1").value = v1;
        document.getElementById("input2").value = v2;
    }

    function getResultado() {
        return document.getElementById("soma").textContent;
    }
    function limparInputs() {
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        document.getElementById("soma").textContent = "";
    }

    // testes de somar
    testar("somar(10, 5) exibe 'Resultado: 15'", () => {
        setInputs(10, 5);
        somar();
        if (getResultado() !== "Resultado: 15") throw new Error("Esperado 'Resultado: 15'");
    });

    testar("somar(-3, 3) exibe 'Resultado: 0'", () => {
        setInputs(-3, 3);
        somar();
        if (getResultado() !== "Resultado: 0") throw new Error("Esperado 'Resultado: 0'");
    });

    // testes de subtrair
    testar("subtrair(10, 4) exibe 'Resultado: 6'", () => {
        setInputs(10, 4);
        subtrair();
        if (getResultado() !== "Resultado: 6") throw new Error("Esperado 'Resultado: 6'");
    });

    testar("subtrair(0, 7) exibe 'Resultado: -7'", () => {
        setInputs(0, 7);
        subtrair();
        if (getResultado() !== "Resultado: -7") throw new Error("Esperado 'Resultado: -7'");
    });

    // testes de multiplicar
    testar("multiplicar(6, 7) exibe 'Resultado: 42'", () => {
        setInputs(6, 7);
        multiplicar();
        if (getResultado() !== "Resultado: 42") throw new Error("Esperado 'Resultado: 42'");
    });

    testar("multiplicar(0, 100) exibe 'Resultado: 0'", () => {
        setInputs(0, 100);
        multiplicar();
        if (getResultado() !== "Resultado: 0") throw new Error("Esperado 'Resultado: 0'");
    });

    // testes de dividir
    testar("dividir(20, 4) exibe 'Resultado: 5'", () => {
        setInputs(20, 4);
        dividir();
        if (getResultado() !== "Resultado: 5") throw new Error("Esperado 'Resultado: 5'");
    });

    testar("dividir(7, 2) exibe 'Resultado: 3.5'", () => {
        setInputs(7, 2);
        dividir();
        if (getResultado() !== "Resultado: 3.5") throw new Error("Esperado 'Resultado: 3.5'");
    });

    testar("dividir(5, 0) exibe mensagem de erro", () => {
        setInputs(5, 0);
        dividir();
        limparInputs(); // Limpa os inputs após o teste
        if (getResultado() !== "Erro: Divisão por zero!") throw new Error("Esperado mensagem de erro");

    });
    // Verifica o placeholder do input1 (separado dos testes de operações)
    testar("input1 possui placeholder 'Número 1'", () => {
        const valorPlaceholder = document.getElementById("input1").placeholder.trim();
        console.log("Placeholder capturado:", valorPlaceholder);
        limparInputs(); // Limpa os inputs após o teste
        if (valorPlaceholder.toLowerCase() !== "número 1") {
            throw new Error(`Placeholder incorreto: '${valorPlaceholder}'`);
        }
    });
    return resultados;
}