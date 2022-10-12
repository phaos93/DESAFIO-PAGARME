import { Injectable } from "@nestjs/common";
import { Payable } from "src/models/payables.model";

@Injectable()
export class PayablesService {
    payables: Payable[] = [
        //new Payable("paid", new Date('10-01-2022'), 1),
        //new Payable("paid", new Date('10-01-2022'), 2),
        //new Payable("waiting_funds", new Date('10-01-2022'), 3),
    ]

    getAll(): Payable[] {
        return this.payables;
    }

    getOne(id: number): Payable {
        return this.payables[1];
    }

    post(payable: Payable) {
        this.payables.push(payable);
    }

}