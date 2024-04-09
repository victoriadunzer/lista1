function calcularBalançoAnual() {
    let ganhos = [];
    let gastos = [];

    for (let i = 0; i < 12; i++) {
        let ganho = parseFloat(prompt(`Digite o ganho bruto do mês ${i+1}:`));
        ganhos.push(ganho);
        let gasto = parseFloat(prompt(`Digite os gastos do mês ${i+1}:`));
        gastos.push(gasto);
    }

    let ganhoAnual = ganhos.reduce((total, ganho) => total + ganho, 0);
    let gastoAnual = gastos.reduce((total, gasto) => total + gasto, 0);
    let saldoFinanceiro = ganhoAnual - gastoAnual;
    let resultado = saldoFinanceiro >= 0 ? "lucro" : "prejuízo";

    console.log(`Ganho bruto anual: R$ ${ganhoAnual.toFixed(2)}`);
    console.log(`Gasto anual: R$ ${gastoAnual.toFixed(2)}`);
    console.log(`Saldo financeiro: R$ ${saldoFinanceiro.toFixed(2)} (${resultado})`);
}
calcularBalançoAnual();