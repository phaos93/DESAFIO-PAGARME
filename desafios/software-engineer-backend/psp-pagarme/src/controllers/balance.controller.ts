import { Controller, Get, Param } from "@nestjs/common";
import { Balance } from "src/models/balance.model";
import { BalanceService } from "src/services/balance.service";

@Controller('balance')
export class BalanceController {

    constructor(private balanceService: BalanceService) {

    }

    @Get()
    async get(): Promise<Balance> {
        return this.balanceService.getBalance();
    }
};