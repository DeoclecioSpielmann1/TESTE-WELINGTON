function executarTestesUnitarios() {
    const resultados = [];

    function testar(descricao, fn) {
        try {
            fn();
            resultados.push({ descricao, passou: true });
        } catch (e) {
            resultados.push({ descricao, passou: false });
        }
    }

    // funções puras extraídas da lógica do index.html
    function somar(a, b) { return a + b; }
    function subtrair(a, b) { return a - b; }
    function multiplicar(a, b) { return a * b; }
    function dividir(a, b) {
        if (b === 0) return null;
        return a / b;
    }
    function porcentagem(a, b) {
        return (a / 100) * b;
    }

    // testes de somar
    testar("somar(2, 3) deve ser 5", () => {
        if (somar(2, 3) !== 5) throw new Error("Esperado 5");
    });
    testar("somar(-1, 1) deve ser 0", () => {
        if (somar(-1, 1) !== 0) throw new Error("Esperado 0");
    });
    testar("somar(0, 0) deve ser 0", () => {
        if (somar(0, 0) !== 0) throw new Error("Esperado 0");
    });

    // testes de subtrair
    testar("subtrair(5, 3) deve ser 2", () => {
        if (subtrair(5, 3) !== 2) throw new Error("Esperado 2");
    });
    testar("subtrair(0, 5) deve ser -5", () => {
        if (subtrair(0, 5) !== -5) throw new Error("Esperado -5");
    });

    // testes de multiplicar
    testar("multiplicar(3, 4) deve ser 12", () => {
        if (multiplicar(3, 4) !== 12) throw new Error("Esperado 12");
    });
    testar("multiplicar(0, 99) deve ser 0", () => {
        if (multiplicar(0, 99) !== 0) throw new Error("Esperado 0");
    });

    // testes de dividir
    testar("dividir(10, 2) deve ser 5", () => {
        if (dividir(10, 2) !== 5) throw new Error("Esperado 5");
    });
    testar("dividir(5, 0) deve retornar null", () => {
        if (dividir(5, 0) !== null) throw new Error("Esperado null");
    });

    // teste de porcentagem
    testar("porcentagem(50, 10) deve ser 5", () => {
        const porcentagem = (num1, num2) => (num1 / 100) * num2;
        if (porcentagem(50, 10) !== 5) throw new Error("Esperado 5");
    });

    testar("porcentagem(200, 15) deve ser 30", () => {
        const porcentagem = (num1, num2) => (num1 / 100) * num2;
        if (porcentagem(200, 15) !== 30) throw new Error("Esperado 30");
    });

    testar("porcentagem(50, 50) deve ser 25", () => {
        const porcentagem = (num1, num2) => (num1 / 100) * num2;
        if (porcentagem(50, 50) !== 25) throw new Error("Esperado 25");
    });

    return resultados;
}