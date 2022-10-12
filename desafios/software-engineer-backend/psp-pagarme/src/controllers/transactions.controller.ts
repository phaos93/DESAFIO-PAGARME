import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { Transaction } from "src/models/transactions.model";
import { Payable } from "src/models/payables.model";
import { TransactionsService } from "src/database/transactions.service";
import { PayablesService } from "src/database/payables.service";

@Controller('transactions')
export class TransactionController {

    constructor(private transactionsService: TransactionsService, private payablesService: PayablesService) {

    }

    @Get()
    getAllTransactions(): Transaction[] {
        return this.transactionsService.getAll();
    }

    @Get(':id')
    getOneTransaction(@Param() params): Transaction {
        return this.transactionsService.getOne(params.id - 1);
    }

    @Post()
    postTransaction(@Body() transacao: Transaction): Payable {
        transacao.id = this.transactionsService.transactions.length + 1;
        this.transactionsService.post(transacao);
        this.payablesService.post(new Payable(transacao.metodo_pagamento === "debit_card" ? "paid" : "waiting_funds", new Date(), transacao.id));
        return this.payablesService.payables[transacao.id - 1];
    };
};