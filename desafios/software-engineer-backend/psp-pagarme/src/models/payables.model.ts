import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Payable extends Model<Payable> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    status: string;
    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    data_pagamento: Date;
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    transacao_id: number;
}