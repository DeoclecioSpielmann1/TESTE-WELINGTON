function testar(nome, fn) {
    try {
        fn();
        return { nome, status: "PASSOU" };
    } catch (e) {
        return { nome, status: "FALHOU", erro: e.message };
    }
}

function somarPuro(a, b) { return a + b; }
function subtrairPuro(a, b) { return a - b; }
function multiplicarPuro(a, b) { return a * b; }
function dividirPuro(a, b) {
    if (b === 0) return "Erro: Divisão por zero!";
    return a / b;
}

function executarTestes() {
    const resultados = [];

    resultados.push(testar("UNIT - Soma positivos", () => {
        if (somarPuro(2, 3) !== 5) throw new Error("Esperado 5");
    }));

    resultados.push(testar("UNIT - Soma com negativo", () => {
        if (somarPuro(5, -2) !== 3) throw new Error("Esperado 3");
    }));

    resultados.push(testar("UNIT - Subtração", () => {
        if (subtrairPuro(10, 4) !== 6) throw new Error("Esperado 6");
    }));

    resultados.push(testar("UNIT - Multiplicação", () => {
        if (multiplicarPuro(3, 4) !== 12) throw new Error("Esperado 12");
    }));

    resultados.push(testar("UNIT - Divisão", () => {
        if (dividirPuro(10, 2) !== 5) throw new Error("Esperado 5");
    }));

    resultados.push(testar("UNIT - Divisão por zero", () => {
        if (dividirPuro(10, 0) !== "Erro: Divisão por zero!") throw new Error("Esperado mensagem de erro");
    }));

    const div = document.getElementById("testes-resultados");
    div.innerHTML = resultados.map(r => {
        const cor = r.status === "PASSOU" ? "green" : "red";
        const msg = r.erro ? ` — ${r.erro}` : "";
        return `<p style="color:${cor}">${r.status}: ${r.nome}${msg}</p>`;
    }).join("");
}