// testes/unitario.test.js
// Testes unitários — validam as funções matemáticas puras de utils.js

function executarTestesUnitarios() {
    const resultados = [];

    function assert(descricao, condicao) {
        resultados.push({ descricao, passou: condicao });
    }

    // somar
    assert("somar(2, 3) === 5",          somar(2, 3) === 5);
    assert("somar(-1, 1) === 0",          somar(-1, 1) === 0);
    assert("somar(0, 0) === 0",           somar(0, 0) === 0);
    assert("somar(1.5, 1.5) === 3",       somar(1.5, 1.5) === 3);

    // subtrair
    assert("subtrair(5, 3) === 2",        subtrair(5, 3) === 2);
    assert("subtrair(0, 5) === -5",       subtrair(0, 5) === -5);
    assert("subtrair(-2, -3) === 1",      subtrair(-2, -3) === 1);

    // multiplicar
    assert("multiplicar(3, 4) === 12",    multiplicar(3, 4) === 12);
    assert("multiplicar(-2, 5) === -10",  multiplicar(-2, 5) === -10);
    assert("multiplicar(0, 99) === 0",    multiplicar(0, 99) === 0);

    // dividir
    assert("dividir(10, 2) === 5",        dividir(10, 2) === 5);
    assert("dividir(7, 2) === 3.5",       dividir(7, 2) === 3.5);
    assert("dividir(0, 5) === 0",         dividir(0, 5) === 0);
    assert("dividir(5, 0) === null",      dividir(5, 0) === null);

    return resultados;
}
