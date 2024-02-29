function adicao(x, y) {
    return x + y;
}

function subtracao(x, y) {
    return x - y;
}

function multiplicacao(x, y) {
    return x * y;
}

function divisao(x, y) {
    if (y === 0) {
        return "Erro! Divisão por zero!";
    } else {
        return x / y;
    }
}

function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado;

    switch (operacao) {
        case "adicao":
            resultado = adicao(num1, num2);
            break;
        case "subtracao":
            resultado = subtracao(num1, num2);
            break;
        case "multiplicacao":
            resultado = multiplicacao(num1, num2);
            break;
        case "divisao":
            resultado = divisao(num1, num2);
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
