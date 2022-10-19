import { Transaction } from "../models/transactions.model";

export function formatValue(transaction: Transaction) {
    return transaction.metodo_pagamento === "debit_card" ? (transaction.valor - (transaction.valor * 0.03)) : transaction.valor - (transaction.valor * 0.05);
}