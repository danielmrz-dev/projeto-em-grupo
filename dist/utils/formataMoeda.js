export function formataMoeda(valor) {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
