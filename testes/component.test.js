// testes/component.test.js
// Testes de componente — simulam interação do usuário com o DOM

function executarTestesComponent() {
    const resultados = [];

    function assert(descricao, condicao) {
        resultados.push({ descricao, passou: condicao });
    }

    function setInputs(v1, v2) {
        document.getElementById("input1").value = v1;
        document.getElementById("input2").value = v2;
    }

    function getResultado() {
        return document.getElementById("soma").textContent;
    }

    // Somar via DOM
    setInputs(10, 5);
    somar();
    assert("somar(10, 5) exibe 'Resultado: 15'", getResultado() === "Resultado: 15");

    setInputs(-3, 3);
    somar();
    assert("somar(-3, 3) exibe 'Resultado: 0'", getResultado() === "Resultado: 0");

    // Subtrair via DOM
    setInputs(10, 4);
    subtrair();
    assert("subtrair(10, 4) exibe 'Resultado: 6'", getResultado() === "Resultado: 6");

    setInputs(0, 7);
    subtrair();
    assert("subtrair(0, 7) exibe 'Resultado: -7'", getResultado() === "Resultado: -7");

    // Multiplicar via DOM
    setInputs(6, 7);
    multiplicar();
    assert("multiplicar(6, 7) exibe 'Resultado: 42'", getResultado() === "Resultado: 42");

    setInputs(0, 100);
    multiplicar();
    assert("multiplicar(0, 100) exibe 'Resultado: 0'", getResultado() === "Resultado: 0");

    // Dividir via DOM
    setInputs(20, 4);
    dividir();
    assert("dividir(20, 4) exibe 'Resultado: 5'", getResultado() === "Resultado: 5");

    setInputs(7, 2);
    dividir();
    assert("dividir(7, 2) exibe 'Resultado: 3.5'", getResultado() === "Resultado: 3.5");

    setInputs(5, 0);
    dividir();
    assert("dividir(5, 0) exibe mensagem de erro", getResultado() === "Erro: Divisão por zero!");

    return resultados;
}
