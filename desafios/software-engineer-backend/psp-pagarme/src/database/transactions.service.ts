import { Injectable } from "@nestjs/common";
import { Transaction } from "src/models/transactions.model";

@Injectable()
export class TransactionsService {
    transactions: Transaction[] = [
        new Transaction(100, "Transação teste1", "debit_card", "1111222233334444", "Nome no Cartao1", new Date('05-05-2025'), "111"),
        new Transaction(200, "Transação teste2", "debit_card", "2111222233334444", "Nome no Cartao2", new Date('06-05-2025'), "222"),
        new Transaction(300, "Transação teste3", "credit_card", "3111222233334444", "Nome no Cartao3", new Date('07-05-2025'), "333"),
    ];

    getAll(): Transaction[] {
        return this.transactions;
    }

    getOne(id: number): Transaction {
        return this.transactions[id];
    }

    post(transaction: Transaction) {
        this.transactions.push(transaction);
    }
}