import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Payable } from "src/models/payables.model";

@Injectable()
export class PayablesService {

    constructor(
        @InjectModel(Payable)
        private payableModel: typeof Payable
    ) { }

    async getAll(): Promise<Payable[]> {
        return this.payableModel.findAll();
    }

    async getOne(id: number): Promise<Payable> {
        return this.payableModel.findByPk(id);
    }
}