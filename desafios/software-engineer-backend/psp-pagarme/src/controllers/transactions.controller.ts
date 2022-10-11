import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { Transaction } from "src/models/transactions.model";
import { Payable } from "src/models/payables.model";

@Controller('transactions')
export class TransactionController {

    transactions: Transaction[] = [
        new Transaction(100, "Transação teste1", "debit_card", "1111222233334444", "Nome no Cartao1", new Date('05-05-2025'), "111"),
        new Transaction(200, "Transação teste2", "debit_card", "2111222233334444", "Nome no Cartao2", new Date('06-05-2025'), "222"),
        new Transaction(300, "Transação teste3", "credit_card", "3111222233334444", "Nome no Cartao3", new Date('07-05-2025'), "333"),
    ];

    payables: Payable[] = [
        new Payable("paid", new Date('10-01-2022'), 1),
        new Payable("paid", new Date('10-01-2022'), 2),
        new Payable("waiting_funds", new Date('10-01-2022'), 3),
    ]

    @Get()
    getAllTransactions(): Transaction[] {
        return this.transactions;
    }

    @Get(':id')
    getOneTransaction(@Param() params): Transaction {
        return this.transactions[params.id - 1];
    }

    @Post()
    postTransaction(@Body() transacao: Transaction): Payable {
        transacao.id = this.transactions.length + 1;
        this.transactions.push(transacao);
        this.payables.push(new Payable(transacao.metodo_pagamento === "debit_card" ? "paid" : "waiting_funds", new Date(), transacao.id));
        return this.payables[transacao.id - 1];
    };
};