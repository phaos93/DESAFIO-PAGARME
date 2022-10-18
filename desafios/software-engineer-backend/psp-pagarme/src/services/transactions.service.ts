import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Transaction } from "src/models/transactions.model";
import { Payable } from "src/models/payables.model";
import { formatValue } from "src/utils/transaction.value.format";
import { formatCard } from "src/utils/transaction.card.format";

@Injectable()
export class TransactionsService {

    constructor(
        @InjectModel(Transaction)
        private transactionModel: typeof Transaction,
        @InjectModel(Payable)
        private payableModel: typeof Payable,
    ) { }

    async getAll(): Promise<Transaction[]> {
        return this.transactionModel.findAll();
    }

    async getOne(id: number): Promise<Transaction> {
        return this.transactionModel.findByPk(id);
    }

    async getLastOne() {
        const allTransactions = await this.getAll()
        let maxId: number = 0;
        for (const transaction of allTransactions) {
            if (transaction.id > maxId) {
                maxId = transaction.id;
            }
        }
        return maxId;
    }

    async post(transaction: Transaction) {
        transaction.numero_cartao = formatCard(transaction.numero_cartao);
        transaction.valor = transaction.metodo_pagamento === "debit_card" ? parseFloat(formatValue(transaction.valor - (transaction.valor * 0.03))) : parseFloat(formatValue(transaction.valor - (transaction.valor * 0.05)));
        this.transactionModel.create(transaction);
        const transactionId = await this.getLastOne() + 1
        const date = new Date()
        const paymentDate = transaction.metodo_pagamento === "debit_card" ? new Date() : new Date(date.setDate(date.getDate() + 30));
        this.payableModel.create({
            status: transaction.metodo_pagamento === "debit_card" ? "paid" : "waiting_funds",
            data_pagamento: paymentDate,
            fee: transaction.metodo_pagamento === "debit_card" ? "3%" : "5%",
            transacao_id: transactionId
        })
    }
}