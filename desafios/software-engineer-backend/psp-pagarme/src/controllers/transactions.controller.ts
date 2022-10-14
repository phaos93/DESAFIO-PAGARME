import { Controller, Get, Param, Post, Body, HttpException, HttpStatus } from "@nestjs/common";
import { Transaction } from "src/models/transactions.model";
import { TransactionsService } from "src/services/transactions.service";

@Controller('transactions')
export class TransactionController {

    constructor(private transactionsService: TransactionsService) {

    }

    @Get()
    async getAllTransactions(): Promise<Transaction[]> {
        return this.transactionsService.getAll();
    }

    @Get(':id')
    async getOneTransaction(@Param() params): Promise<Transaction> {
        return this.transactionsService.getOne(params.id);
    }

    @Post()
    async postTransaction(@Body() transaction: Transaction) {
        if (transaction.metodo_pagamento !== "debit_card" && transaction.metodo_pagamento !== "credit_card") {
            throw new HttpException('metodo de pagamento inválido', HttpStatus.BAD_REQUEST);
        }
        this.transactionsService.post(transaction);
    };
}