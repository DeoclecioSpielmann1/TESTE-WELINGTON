// utils.js - funções puras usadas pelos testes unitários
function somarPuro(a, b) { return a + b; }
function subtrairPuro(a, b) { return a - b; }
function multiplicarPuro(a, b) { return a * b; }
function dividirPuro(a, b) {
    if (b === 0) return null;
    return a / b;
}