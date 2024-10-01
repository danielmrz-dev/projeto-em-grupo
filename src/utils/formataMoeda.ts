export function formataMoeda(valor: number): string {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}