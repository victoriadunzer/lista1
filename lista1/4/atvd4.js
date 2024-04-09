function ordenarDecrescente() {
    let valores = [];

    for (let i = 0; i < 4; i++) {
        let valor = parseInt(prompt(`Digite o valor ${i + 1}:`));
        valores.push(valor);
    }

    valores.sort(function(a, b) {
        return b - a;
    });

    alert("Valores em ordem decrescente:\n" + valores.join(", "));
}

window.onload = ordenarDecrescente;