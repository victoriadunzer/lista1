function calcularBalancoAnual() {
    let ganhoAnual = 0;
    let gastoAnual = 0;

    for (let mes = 1; mes <= 12; mes++) {
        let ganhoMensal = parseFloat(prompt(`Digite o ganho bruto do mês ${mes}:`));
        let gastoMensal = parseFloat(prompt(`Digite os gastos do mês ${mes}:`));
        
        ganhoAnual += ganhoMensal;
        gastoAnual += gastoMensal;
    }

    let saldo = ganhoAnual - gastoAnual;
    let resultado = saldo > 0 ? "lucro" : (saldo < 0 ? "prejuízo" : "equilibrado");

    alert("Balanço Financeiro Anual:\n\n" +
          "Ganho Bruto Anual: R$ " + ganhoAnual.toFixed(2) + "\n" +
          "Gasto Anual: R$ " + gastoAnual.toFixed(2) + "\n" +
          "Saldo Financeiro: R$ " + saldo.toFixed(2) + " (" + resultado + ")");
}

window.onload = calcularBalancoAnual;