import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { Payable } from "src/models/payables.model";
import { PayablesService } from "src/services/payables.service";

@Controller('payables')
export class PayableController {

    constructor(private payablesService: PayablesService) {

    }

    @Get()
    async getAllPayables(): Promise<Payable[]> {
        return this.payablesService.getAll();
    }

    @Get(':id')
    async getOnePayable(@Param() params): Promise<Payable> {
        return this.payablesService.getOne(params.id);
    }
};