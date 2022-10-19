import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Transaction } from "src/models/transactions.model";
import { Payable } from "src/models/payables.model";
import { Balance } from "src/models/balance.model";

@Injectable()
export class BalanceService {
    constructor(
        @InjectModel(Transaction)
        private transactionModel: typeof Transaction,
        @InjectModel(Payable)
        private payableModel: typeof Payable,
    ) { }

    async getAllPayables(): Promise<Payable[]> {
        return this.payableModel.findAll();
    }

    async getAllTransactions(): Promise<Transaction[]> {
        return this.transactionModel.findAll();
    }

    async getBalance(): Promise<Balance> {
        const allTransactions = await this.getAllTransactions()
        let paids: number = 0;
        let waitingFunds: number = 0;
        for (const transaction of allTransactions) {
            if (transaction.metodo_pagamento === "debit_card") {
                paids += transaction.valor;
            }
        }
        for (const transaction of allTransactions) {
            if (transaction.metodo_pagamento === "credit_card") {
                waitingFunds += transaction.valor;
            }
        }
        const balance: Balance = {
            avaliable: paids,
            waiting_funds: waitingFunds
        }
        return balance;
    }
}